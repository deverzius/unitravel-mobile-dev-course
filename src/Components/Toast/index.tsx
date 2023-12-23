import ToastLib from 'react-native-toast-message';

const Toast = {
  success: (text1: any) => {
    ToastLib.show({
      type: 'success',
      text1,
    });
  },
  error: (text1: any) => {
    ToastLib.show({
      type: 'error',
      text1,
    });
  },
};

export default Toast;
