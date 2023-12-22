import React, { useState, useEffect } from 'react';
import { i18n, LocalizationKey } from '@/Localization';
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import CusText from '@/Components/CusText';
import { StatusBar } from 'expo-status-bar';
import { RootStacks, RootScreens } from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { textStyle } from '@/Theme/Variables';
import { Colors } from '@/Theme/Variables';

export const Welcome = (props: any) => {
  const [onboardingPage, setOnboardingPage] = useState<number>(1);
  const { navigation } = props;

  useEffect(() => {
    handleNavigate();
  });

  const handleNavigate = async () => {
    const token = await AsyncStorage.getItem('onboarding');
    if (token) {
      props.onNavigate(RootStacks.MAIN);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {onboardingPage !== 3 && (
        <TouchableHighlight
          onPress={() => setOnboardingPage(onboardingPage + 1)}
          style={styles.button}
        >
          <View style={styles.buttonCtn}>
            <CusText style={styles.text}>Tiếp tục</CusText>
            <Image
              style={styles.buttonLogo}
              source={require('@/../assets/icon/right.png')}
            />
          </View>
        </TouchableHighlight>
      )}
      {onboardingPage === 1 && (
        <>
          <View style={styles.intro1}>
            <Image
              style={styles.logo}
              source={require('@/../assets/logo/logo2.png')}
            />
            <CusText style={styles.onboardingText1}>
              Khai phá những địa điểm thú vị trong trường đại học của bạn
            </CusText>
          </View>
          <Image
            style={styles.thumbnail1}
            source={require('@/../assets/image/onboarding1.png')}
          />
        </>
      )}
      {onboardingPage === 2 && (
        <>
          <Image
            style={styles.logo1}
            source={require('@/../assets/logo/logo1.png')}
          />
          <View style={styles.intro2}>
            <Image
              style={styles.text1}
              source={require('@/../assets/image/onb-text-1.png')}
            />
            <CusText style={styles.onboardingText2}>
              Tìm kiếm trong trường đại học không còn là ác mộng
            </CusText>
          </View>
          <Image
            style={styles.thumbnail2}
            source={require('@/../assets/image/onboarding2.png')}
          />
        </>
      )}
      {onboardingPage === 3 && (
        <>
          <Image
            style={styles.logo1}
            source={require('@/../assets/logo/logo1.png')}
          />
          <View style={styles.intro2}>
            <Image
              style={styles.text2}
              source={require('@/../assets/image/onb-text-2.png')}
            />
            <CusText style={styles.onboardingText2}>
              Cung cấp nguồn thông tin chính thống từ các trường đại học
            </CusText>
          </View>
          <Image
            style={styles.thumbnail2}
            source={require('@/../assets/image/onboarding3.png')}
          />
          <View style={styles.btnCtn}>
            <TouchableOpacity
              onPress={() => navigation.navigate(RootStacks.AUTH)}
              style={[styles.btn, styles.lgBtn]}
            >
              <CusText style={styles.whiteText}>Đăng nhập</CusText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(RootStacks.AUTH, { screen: RootScreens.SIGNUP })}
              style={[styles.btn, styles.suBtn]}
            >
              <CusText style={styles.purpleText}>Đăng ký</CusText>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 60,
    marginLeft: -10,
    marginBottom: 10,
  },
  logo1: {
    width: 350,
    height: 60,
    marginBottom: 120,
  },
  buttonLogo: {
    width: 10,
    height: 10,
  },
  button: {
    width: 145,
    height: 41,
    borderRadius: 20,
    position: 'absolute',
    right: -21,
    bottom: 100,
    backgroundColor: '#400081',
  },
  text: {
    ...textStyle(14, '#fff', 'montRegular'),
  },
  buttonCtn: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  onboardingText1: {
    width: 280,
    ...textStyle(16, '#4B3987', 'montRegular'),
  },
  onboardingText2: {
    width: 280,
    textAlign: 'center',
    ...textStyle(14, '#4B3987', 'montRegular'),
  },
  intro1: {
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    position: 'absolute',
    left: 21,
    top: 100,
  },
  intro2: {
    marginBottom: 20,
    marginTop: -50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail1: {
    width: 350,
    height: 230,
    marginBottom: -30,
  },
  thumbnail2: {
    width: 150,
    height: 200,
    marginBottom: 90,
  },
  text1: {
    width: 300,
    height: 40,
    marginBottom: 12,
  },
  text2: {
    width: 300,
    height: 40,
    marginBottom: 12,
  },
  btn: {
    width: 300,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lgBtn: {
    backgroundColor: '#400081',
  },
  suBtn: {
    backgroundColor: '#AAB1E5',
    marginTop: 15,
  },
  whiteText: {
    ...textStyle(14, Colors.WHITE, 'montRegular'),
  },
  purpleText: {
    ...textStyle(14, Colors.INDIGO5, 'montRegular'),
  },
  btnCtn: {
    position: 'absolute',
    bottom: 30,
  },
});
