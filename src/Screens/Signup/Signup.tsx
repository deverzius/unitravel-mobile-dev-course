import { i18n, LocalizationKey } from '@/Localization';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '@/Theme/Variables';
import { textStyle } from '@/Theme/Variables';
import CusText from '@/Components/CusText';
import { RootScreens, RootStacks } from '..';
import { Loader } from '@/Components/Loader';
import { useSignupMutation } from '@/Services';
import Toast from '@/Components/Toast';

export interface ISignupProps {
  navigation: any;
}

export const Signup = (props: ISignupProps) => {
  const { navigation } = props;
  const [canRead, setCanRead] = useState(true);
  const [canReadAgain, setCanReadAgain] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [againPassword, setAgainPassword] = useState('');
  const [checkLogin, setCheckLogin] = useState(false);
  const [signup, { data, isSuccess, isLoading, error }] = useSignupMutation();

  const handleSubmit = async (e: any) => {
    if (password !== againPassword) {
      Toast.error('Mật khẩu không khớp!');
      return;
    }
    const userData = {
      email,
      password,
    };
    await signup(userData);
    setCheckLogin(!checkLogin);
  };

  useEffect(() => {
    console.log(1);
    if (isSuccess) {
      Toast.success('Tạo tài khoản thành công!');
      navigation.navigate(RootStacks.AUTH, {
        screen: RootScreens.LOGIN,
      });
    }
    else {
      if (error) {
        Toast.error(error.data.error.message);
      }
    }
  }, [checkLogin]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isLoading && <Loader />}
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
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={{ ...styles.logoCtn, ...styles.marginBottom }}>
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
          <View style={{ ...styles.logoCtn, ...styles.marginBottom }}>
            <Image
              source={require('@/../assets/icon/auth-icon-2.png')}
              style={{
                ...styles.icon,
              }}
            />
            <TouchableHighlight
              style={{ ...styles.icon1 }}
              onPress={() => setCanReadAgain(!canReadAgain)}
            >
              <Image
                source={
                  canReadAgain
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
              secureTextEntry={canReadAgain}
              placeholder="Nhập lại mật khẩu"
              placeholderTextColor={Colors.BLACK}
              value={againPassword}
              onChangeText={setAgainPassword}
            />
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.btn, styles.lgBtn]}
          >
            <CusText style={styles.login}>Đăng ký</CusText>
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
            Bạn đã có tài khoản?{' '}
            <Text
              style={{ ...styles.forgotPassword }}
              onPress={() => navigation.push(RootScreens.LOGIN)}
            >
              {' '}
              Đăng nhập tại đây{' '}
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
