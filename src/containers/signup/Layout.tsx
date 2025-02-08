import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import { TextInput as RNTextInput, ScrollView, View } from 'react-native';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { isValidEmailAddress, isValidPassword } from '../utils.ts/singup.utils';
import { useAtomValue, useSetAtom } from 'jotai';

import { AccountInformation } from './types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStack } from '../navigation/types';
import { accountInputLengthAtom } from './store';
import { showSnackbar } from '../../component/snack-bar/service';
import { useNavigation } from '@react-navigation/native';

type InvalidInfo = Record<keyof AccountInformation, boolean>;
const SignupLayout: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const accountRef = useRef<AccountInformation>({ email: '', password: '', password_confirm: '' });
  const emailInputRef = useRef<RNTextInput>(null);
  const passwordInputRef = useRef<RNTextInput>(null);
  const passwordConfirmInputRef = useRef<RNTextInput>(null);
  const setInputLength = useSetAtom(accountInputLengthAtom);
  const [inValidInfo, setInValidInfo] = useState<InvalidInfo>({ email: false, password: false, password_confirm: false });

  // actions
  const resetAccountInfo = () => {
    accountRef.current = { email: '', password: '', password_confirm: '' };
    setInputLength({ email: 0, password: 0, password_confirm: 0 });
    setInValidInfo({ email: false, password: false, password_confirm: false });
    emailInputRef.current?.setNativeProps({ text: '' });
    passwordInputRef.current?.setNativeProps({ text: '' });
    passwordConfirmInputRef.current?.setNativeProps({ text: '' });
  };
  // lifecycle
  useEffect(() => {
    if (inValidInfo.email) {
      console.log(111);
      emailInputRef.current?.focus();
    } else if (inValidInfo.password && !inValidInfo.password_confirm) {
      passwordInputRef.current?.focus();
    } else if (inValidInfo.password_confirm) {
      passwordConfirmInputRef.current?.focus();
    }
  }, [inValidInfo]);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View className="screen-wrapper">
        <View className="flex-[0.5] justify-center items-start pl-[10px]">
          <Text variant="titleMedium" style={{ color: theme.colors.secondary }}>
            이메일과 비밀번호를 이용해 회원가입해주세요!
          </Text>
        </View>
        <View className="flex-1">
          <TextInput
            ref={emailInputRef}
            autoCapitalize={'none'}
            className="bg-white"
            label={'이메일'}
            placeholder="이메일을 입력해주세요"
            error={inValidInfo.email}
            mode="outlined"
            onChangeText={(text) => {
              accountRef.current.email = text;
              emailInputRef.current?.setNativeProps({ text: text });
              setInputLength((prev) => ({ ...prev, email: text.length }));
            }}
          />
          <View className="h-[16px]"></View>
          <TextInput
            ref={passwordInputRef}
            secureTextEntry
            label={'비밀번호'}
            autoCapitalize={'none'}
            keyboardType="numbers-and-punctuation"
            className="bg-white"
            placeholder="비밀번호 (숫자 + 특수문자 (8 ~ 15자)"
            mode="outlined"
            error={inValidInfo.password}
            maxLength={15}
            onChangeText={(text) => {
              accountRef.current.password = text;
              passwordInputRef.current?.setNativeProps({ text: text });
              setInputLength((prev) => ({ ...prev, password: text.length }));
            }}
          />
          <View className="h-[16px]"></View>
          <TextInput
            ref={passwordConfirmInputRef}
            secureTextEntry
            label={'비밀번호 확인'}
            autoCapitalize={'none'}
            keyboardType="numbers-and-punctuation"
            className="bg-white"
            placeholder="비밀번호 확인"
            mode="outlined"
            maxLength={15}
            error={inValidInfo.password_confirm && !inValidInfo.password}
            onChangeText={(text) => {
              accountRef.current.password_confirm = text;
              passwordConfirmInputRef.current?.setNativeProps({ text: text });
              setInputLength((prev) => ({ ...prev, password_confirm: text.length }));
            }}
          />
        </View>
        <View className="flex-1 justify-center">
          <View className="h-[12px]" />
          <SubmitButton
            onSubmit={() => {
              if (isValidEmailAddress(accountRef.current.email) === false) {
                accountRef.current.email = '';
                emailInputRef.current?.setNativeProps({ text: '' });
                setInputLength((prev) => ({ ...prev, email: 0 }));
                setInValidInfo({ email: true, password: false, password_confirm: false });
                showSnackbar('ERROR', '이메일 형식이 올바르지 않습니다.');
                return;
              } else if (accountRef.current.password !== accountRef.current.password_confirm) {
                accountRef.current.password_confirm = '';
                passwordConfirmInputRef.current?.setNativeProps({ text: '' });
                setInputLength((prev) => ({ ...prev, password_confirm: 0 }));
                setInValidInfo({ email: false, password: false, password_confirm: true });
                showSnackbar('ERROR', '비밀번호가 일치하지 않습니다.');
                return;
              } else if (isValidPassword(accountRef.current.password) === false) {
                accountRef.current.password = '';
                accountRef.current.password_confirm = '';
                passwordInputRef.current?.setNativeProps({ text: '' });
                passwordConfirmInputRef.current?.setNativeProps({ text: '' });
                setInputLength((prev) => ({ ...prev, password: 0, password_confirm: 0 }));
                setInValidInfo({ email: false, password: true, password_confirm: true });
                showSnackbar('ERROR', '비밀번호 형식이 올바르지 않습니다.');
                return;
              }

              navigation.goBack();
              showSnackbar('SUCCESS', '회원가입이 완료되었습니다. 로그인해주세요');
              resetAccountInfo();
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

interface SubmitButtonProps {
  onSubmit: () => void;
}
const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit }) => {
  const inputLength = useAtomValue(accountInputLengthAtom);
  const buttonStyle = useMemo(() => ({ borderRadius: 5 }), []);
  const isValid = useMemo(() => {
    return inputLength.email > 0 && inputLength.password > 0 && inputLength.password_confirm > 0;
  }, [inputLength]);

  return (
    <Button style={buttonStyle} mode="contained" disabled={!isValid} onPress={onSubmit}>
      회원가입
    </Button>
  );
};
export default SignupLayout;
