import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import React, { useMemo } from 'react';
import { TextStyle, View } from 'react-native';

const LoginLayout: React.FC = () => {
  const theme = useTheme();
  const titleStyle = useMemo<TextStyle>(() => ({ ...theme.fonts.displaySmall, fontWeight: '600', color: theme.colors.primary }), []);

  return (
    <View className="screen-wrapper">
      <View className="flex flex-[0.7] justify-end items-center">
        <Text style={titleStyle}>Gallery</Text>
      </View>
      <View className="flex-1 justify-center">
        <TextInput placeholder="이메일을 입력해주세요" mode="flat" className="bg-purple-100" />
        <View className="h-[24px]"></View>
        <TextInput placeholder="비밀번호를 입력해주세요" mode="flat" className="bg-purple-100" />
      </View>
      <View className="flex-1 justify-start">
        <Button style={{ borderRadius: 5 }} mode="contained" onPress={() => {}}>
          로그인
        </Button>
        <View className="h-[12px]"></View>
        <Button style={{ borderRadius: 5 }} mode="text" onPress={() => {}}>
          회원가입
        </Button>
      </View>
    </View>
  );
};

export default LoginLayout;
