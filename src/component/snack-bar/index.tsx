import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { Snackbar as PaperSnackbar, useTheme } from 'react-native-paper';
import React, { useImperativeHandle, useMemo, useState } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

export type SnackbarType = 'SUCCESS' | 'INFO' | 'ERROR';
export interface FadeSnackbarActions {
  show: (type: SnackbarType, message: string) => void;
  hide: () => void;
}

const Snackbar: React.ForwardRefRenderFunction<FadeSnackbarActions> = (_, ref) => {
  const theme = useTheme();
  const [visible, setVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [type, setType] = useState<SnackbarType>('SUCCESS');

  // styles
  const snackbarStyle = useMemo<ViewStyle>(
    () => ({
      backgroundColor: type === 'SUCCESS' ? theme.colors.primary : type === 'INFO' ? theme.colors.onBackground : theme.colors.error,
    }),
    [theme.colors, type],
  );
  const snackbarWrapperStyle = useMemo<ViewStyle>(
    () => ({
      position: 'relative',
      top: 30,
    }),
    [],
  );

  // lifecycle
  useImperativeHandle(
    ref,
    () => ({
      show: (type, message) => {
        setType(type);
        setMessage(message);
        setVisible(true);
      },
      hide: () => {
        setVisible(false);
      },
    }),
    [],
  );

  return (
    visible && (
      <Animated.View pointerEvents={'box-none'} entering={FadeIn} exiting={FadeOut} style={StyleSheet.absoluteFillObject}>
        <PaperSnackbar
          style={snackbarStyle}
          wrapperStyle={snackbarWrapperStyle}
          visible={visible}
          duration={3000}
          onDismiss={() => {
            setVisible(false);
          }}>
          {message}
        </PaperSnackbar>
      </Animated.View>
    )
  );
};

const FadeSnackbar = React.forwardRef(Snackbar);
export default FadeSnackbar;
