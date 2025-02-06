import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import React, { useMemo } from 'react';
import { ScrollView, TextStyle, View } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStack } from '../navigation/types';
import { useNavigation } from '@react-navigation/native';

const LoginLayout: React.FC = () => {
  const theme = useTheme();
  const titleStyle = useMemo<TextStyle>(() => ({ ...theme.fonts.displaySmall, letterSpacing: -1, fontWeight: '600', color: theme.colors.primary }), []);
  const navigation = useNavigation<NativeStackNavigationProp<NavigationStack>>();

  // styles
  const buttonStyle = useMemo(() => ({ borderRadius: 5 }), []);

  return (
    <ScrollView scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
      <View className="screen-wrapper">
        <View className="flex flex-[0.5] justify-end items-center">
          <Text style={titleStyle}>GALLERY</Text>
        </View>
        <View className="flex-1 justify-center">
          <TextInput autoCapitalize={'none'} className="bg-white" placeholder="이메일을 입력해주세요" mode="outlined" />
          <View className="h-[24px]"></View>
          <TextInput secureTextEntry autoCapitalize={'none'} keyboardType="numbers-and-punctuation" className="bg-white" placeholder="비밀번호를 입력해주세요" mode="outlined" />
        </View>
        <View className="flex-1 justify-start">
          <Button style={buttonStyle} mode="contained" onPress={() => {}}>
            로그인
          </Button>
          <View className="h-[12px]"></View>
          <Button
            style={buttonStyle}
            mode="text"
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            회원가입
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginLayout;
