import { MD3LightTheme as DefaultTheme, PaperProvider, Text } from 'react-native-paper';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';

const theme = {
  ...DefaultTheme,
};

const GlobalApp: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <View>
          <Text>asd</Text>
        </View>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default GlobalApp;
