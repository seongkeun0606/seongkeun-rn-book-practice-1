import { MD3LightTheme as DefaultTheme, MD3Theme, PaperProvider } from 'react-native-paper';
import FadeSnackbar, { FadeSnackbarActions } from './component/snack-bar';
import React, { createRef } from 'react';

import AppNavigation from './containers/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const theme: MD3Theme = {
  ...DefaultTheme,
  // fonts: configureFonts({})
};

export const SNACKBAR_REF = createRef<FadeSnackbarActions>();

const GlobalApp: React.FC = () => {
  return (
    <GestureHandlerRootView>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <AppNavigation />
          <GlobalComponent />
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

const GlobalComponent: React.FC = () => {
  return (
    <React.Fragment>
      <FadeSnackbar ref={SNACKBAR_REF} />
    </React.Fragment>
  );
};

export default GlobalApp;
