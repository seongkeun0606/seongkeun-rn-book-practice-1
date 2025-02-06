import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

import AppNavigation from './containers/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const theme = {
  ...DefaultTheme,
};

const GlobalApp: React.FC = () => {
  return (
    <GestureHandlerRootView>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <AppNavigation />
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default GlobalApp;
