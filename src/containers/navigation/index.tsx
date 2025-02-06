import LoginLayout from '../login/Layout';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack } from './types';
import React from 'react';
import SignupLayout from '../signup/Layout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<NavigationStack>();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginLayout} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignupLayout} options={{ headerShown: true, title: '회원가입' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
