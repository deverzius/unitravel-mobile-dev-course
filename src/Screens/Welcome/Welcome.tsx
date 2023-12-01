import React, { useState, useEffect } from 'react';
import { i18n, LocalizationKey } from '@/Localization';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'native-base';
import { RootScreens } from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Welcome = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  const [onboardingPage, setOnboardingPage] = useState<number>(1);

  useEffect(() => {
    handleNavigate();
  });

  const handleNavigate = async () => {
    const token = await AsyncStorage.getItem('onboarding');
    if(token) {
      props.onNavigate(RootScreens.MAIN);
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
            <Text style={styles.text}>Tiếp tục</Text>
            <Image
              style={styles.buttonLogo}
              source={require('@/../assets/right.png')}
            />
          </View>
        </TouchableHighlight>
      )}
      {onboardingPage === 1 && (
        <>
          <View style={styles.intro1}>
            <Image
              style={styles.logo}
              source={require('@/../assets/logo2.png')}
            />
            <Text style={styles.onboardingText1}>
              Khai phá những địa điểm thú vị trong trường đại học của bạn
            </Text>
          </View>
          <Image
            style={styles.thumbnail1}
            source={require('@/../assets/onboarding1.png')}
          />
        </>
      )}
      {onboardingPage === 2 && (
        <>
          <Image
            style={styles.logo1}
            source={require('@/../assets/logo1.png')}
          />
          <View style={styles.intro2}>
            <Image
              style={styles.text1}
              source={require('@/../assets/onb-text-1.png')}
            />
            <Text style={styles.onboardingText2}>
              Tìm kiếm trong trường đại học không còn là ác mộng
            </Text>
          </View>
          <Image
            style={styles.thumbnail2}
            source={require('@/../assets/onboarding2.png')}
          />
        </>
      )}
      {onboardingPage === 3 && (
        <>
          <Image
            style={styles.logo1}
            source={require('@/../assets/logo1.png')}
          />
          <View style={styles.intro2}>
            <Image
              style={styles.text2}
              source={require('@/../assets/onb-text-2.png')}
            />
            <Text style={styles.onboardingText2}>
              Cung cấp nguồn thông tin chính thống từ các trường đại học
            </Text>
          </View>
          <Image
            style={styles.thumbnail2}
            source={require('@/../assets/onboarding3.png')}
          />
          <View style={styles.btnCtn}>
            <TouchableOpacity
              onPress={() => props.onNavigate(RootScreens.MAIN)}
              style={[styles.btn, styles.lgBtn]}
            >
              <Text style={styles.whiteText}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.suBtn]}>
              <Text style={styles.purpleText}>Đăng ký</Text>
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
    color: '#fff',
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
    fontSize: 18,
    color: '#4B3987',
  },
  onboardingText2: {
    width: 280,
    fontSize: 16,
    color: '#4B3987',
    textAlign: 'center',
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
  },
  text2: {
    width: 300,
    height: 40,
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
    color: '#fff',
  },
  purpleText: {
    color: '#400081',
  },
  btnCtn: {
    position: 'absolute',
    bottom: 30,
  },
});
