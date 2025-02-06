import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import React, { useMemo, useReducer } from 'react';
import { ScrollView, View } from 'react-native';

import { updateAccountInfo } from './utils';

const SignupLayout: React.FC = () => {
  const theme = useTheme();
  const [state, dispatch] = useReducer(updateAccountInfo, {
    email: '',
    password: '',
    password_confirm: '',
  });

  // styles
  const buttonStyle = useMemo(() => ({ borderRadius: 5 }), []);
  console.log('state', state);
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View className="screen-wrapper">
        <View className="flex-[0.5] justify-center items-start pl-[10px]">
          <Text style={{ ...theme.fonts.titleMedium, color: theme.colors.secondary }}>이메일과 비밀번호를 이용해 회원가입해주세요!</Text>
        </View>
        <View className="flex-1">
          <TextInput autoCapitalize={'none'} className="bg-white" placeholder="이메일을 입력해주세요" mode="outlined" onChangeText={(text) => dispatch({ email: text })} />
          <View className="h-[16px]"></View>
          <TextInput
            secureTextEntry
            autoCapitalize={'none'}
            keyboardType="numbers-and-punctuation"
            className="bg-white"
            placeholder="비밀번호 (숫자 + 특수문자 (8 ~ 15자)"
            mode="outlined"
            maxLength={15}
            onChangeText={(text) => dispatch({ password: text })}
          />
          <View className="h-[16px]"></View>
          <TextInput
            secureTextEntry
            autoCapitalize={'none'}
            keyboardType="numbers-and-punctuation"
            className="bg-white"
            placeholder="비밀번호 확인"
            mode="outlined"
            maxLength={15}
            onChangeText={(text) => dispatch({ password_confirm: text })}
          />
        </View>
        <View className="flex-1 justify-center">
          <Button style={buttonStyle} mode="contained" onPress={() => {}}>
            로그인
          </Button>
          <View className="h-[12px]"></View>
          <Button style={buttonStyle} mode="text" onPress={() => {}}>
            회원가입
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignupLayout;
