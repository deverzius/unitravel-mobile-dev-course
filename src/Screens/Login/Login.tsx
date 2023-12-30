import { i18n, LocalizationKey } from '@/Localization';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '@/Theme/Variables';
import { textStyle } from '@/Theme/Variables';
import CusText from '@/Components/CusText';
import { RootScreens } from '..';
import { useLoginMutation, useGetUserMutation } from '@/Services';
import Toast from '@/Components/Toast';
import { Loader } from '@/Components/Loader';

export interface ILoginProps {
  navigation: any;
}

export const Login = (props: ILoginProps) => {
  const { navigation } = props;
  const [canRead, setCanRead] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkLogin, setCheckLogin] = useState(false);
  const [checkUserData, setCheckUserData] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [
    signin,
    {
      data: signinData,
      isSuccess: signinSuccess,
      isLoading: signinLoading,
      error: signinError,
    },
  ] = useLoginMutation();
  const [getUser, { data: getUserData, isSuccess: getUserSuccess }] =
    useGetUserMutation();

  const handleSubmit = async (e: any) => {
    const userData = {
      username,
      password,
    };
    await signin(userData).then(async res => {
      await AsyncStorage.setItem('token', res.data.data.session.access_token)
    });

    setCheckLogin(!checkLogin);
  };

  const handleSuccess = async () => {
    const userData = {
      username,
    };
    await getUser(userData);
    setCheckUserData(!checkUserData);
    
    await AsyncStorage.setItem('user', JSON.stringify(userData));
    navigation.navigate(RootScreens.MAIN);
  };

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    if (signinSuccess) {
      handleSuccess();
    } else {
      if (!isFirstRender) {
        Toast.error('Tài khoản hoặc mật khẩu không hợp lệ!');
      }
    }
  }, [checkLogin]);

  useEffect(() => {
    if (!getUserSuccess && !isFirstRender) {
      Toast.error('Lỗi tải dữ liệu!');
    }
  }, [checkUserData]);

  return (
    <View style={styles.container}>
      {signinLoading && <Loader />}
      <>
        <View style={{ ...styles.circle }}></View>
        <View style={{ ...styles.logoCtn, ...styles.marginTop }}>
          <Image
            source={require('@/../assets/logo/logo1.png')}
            style={{
              ...styles.logo,
            }}
          />
          <Text style={{ ...styles.logoDesc }}>
            Discover the hidden gems of your university
          </Text>
        </View>
        <View style={{ ...styles.logoCtn }}>
          <View style={{ ...styles.logoCtn, ...styles.marginBottom }}>
            <Image
              source={require('@/../assets/icon/auth-icon-1.png')}
              style={{
                ...styles.icon,
              }}
            />
            <TextInput
              style={[styles.btn]}
              placeholder="Email hoặc số điện thoại"
              placeholderTextColor={Colors.BLACK}
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={{ ...styles.logoCtn }}>
            <Image
              source={require('@/../assets/icon/auth-icon-2.png')}
              style={{
                ...styles.icon,
              }}
            />
            <TouchableHighlight
              style={{ ...styles.icon1 }}
              onPress={() => setCanRead(!canRead)}
            >
              <Image
                source={
                  canRead
                    ? require('@/../assets/icon/auth-icon-3.png')
                    : require('@/../assets/icon/auth-icon-4.png')
                }
                style={{
                  ...styles.icon2,
                }}
              />
            </TouchableHighlight>
            <TextInput
              style={[styles.btn]}
              secureTextEntry={canRead}
              placeholder="Mật khẩu"
              placeholderTextColor={Colors.BLACK}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <Text style={{ ...styles.forgotPassword }}> Quên mật khẩu </Text>
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.btn, styles.lgBtn]}
          >
            <CusText style={styles.login}>Đăng nhập</CusText>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.logoCtn }}>
          <Image
            source={require('@/../assets/image/sep.png')}
            style={{
              ...styles.sep,
            }}
          />
          <Image
            source={require('@/../assets/icon/social.png')}
            style={{
              ...styles.social,
            }}
          />
          <Text>
            {' '}
            Chưa có tài khoản?{' '}
            <Text
              style={{ ...styles.forgotPassword }}
              onPress={() => navigation.push(RootScreens.SIGNUP)}
            >
              {' '}
              Đăng ký tại đây{' '}
            </Text>
          </Text>
        </View>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  circle: {
    position: 'absolute',
    left: '-150%',
    bottom: '10%',
    width: 800,
    height: 800,
    borderRadius: 800,
    backgroundColor: Colors.INDIGO1,
  },
  logoCtn: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 90,
  },
  logoDesc: {
    ...textStyle(13, Colors.BLACK, 'montLight'),
  },
  btn: {
    width: 300,
    height: 55,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.BLACK,
    borderColor: Colors.INDIGO2,
    borderWidth: 2,
    color: Colors.BLACK,
    paddingLeft: 70,
  },
  icon: {
    position: 'absolute',
    left: 57,
    width: 25,
    height: 25,
    zIndex: 999,
  },
  icon1: {
    position: 'absolute',
    right: 57,
    width: 25,
    height: 25,
    zIndex: 999,
  },
  icon2: {
    width: 25,
    height: 25,
  },
  login: {
    ...textStyle(16, Colors.WHITE, 'montBold'),
  },
  lgBtn: {
    backgroundColor: '#400081',
    borderWidth: 0,
    paddingLeft: 0,
  },
  forgotPassword: {
    ...textStyle(14, Colors.INDIGO5, 'montBold'),
    marginLeft: '35%',
    marginBottom: 15,
    marginTop: 15,
  },
  marginBottom: {
    marginBottom: 20,
  },
  sep: {
    height: 10,
    width: '80%',
    marginBottom: 15,
  },
  social: {
    width: 150,
    height: 60,
    marginBottom: 5,
  },
  marginTop: {
    marginTop: 50,
  },
});
