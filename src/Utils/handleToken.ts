import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStacks } from '@/Screens';
import Toast from '@/Components/Toast';

export const handleExpiredToken = async (navigation: any, isLogout: boolean) => {
  try {
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('token');
  }
  catch (e) { }
  if (isLogout) {
    Toast.success('Đăng xuất thành công');
  } else {
    Toast.error('Đã hết phiên, vui lòng đăng nhập lại');
  }
  navigation.navigate(RootStacks.AUTH);
};
