import { i18n, LocalizationKey } from '@/Localization';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Heading } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';
import { Colors } from '@/Theme/Variables';
import { useLogoutMutation, useGetImageMutation } from '@/Services';
import { RootStacks } from '..';
import { textStyle } from '@/Theme/Variables';
import CusText from '@/Components/CusText';
import {handleExpiredToken} from '@/Utils';

export interface IProfileProps {
  navigation: any;
}

export const Profile = (props: IProfileProps) => {
  const { navigation } = props;
  const [checkLogout, setCheckLogout] = useState(false);
  const [userData, setUserData] = useState(null);
  const [imgUrl, setimgUrl] = useState(null);
  const [logout, { data, isSuccess, isLoading, error }] = useLogoutMutation();
  const [getImage, { data: imageData, isLoading: imageLoading }] =
    useGetImageMutation();

  const handleSubmit = async (e: any) => {
    const token = await AsyncStorage.getItem('token');
    await logout({ token });
    if(error?.status === 401) {
      handleExpiredToken(navigation, true);
      return;
    }
    setCheckLogout(!checkLogout);
  };

  const getUserData = async () => {
    const user = await AsyncStorage.getItem('user');
    setUserData(JSON.parse(user)[0]);
  };

  const handleGetImage = async () => {
    const token = await AsyncStorage.getItem('token');
    const imgData = {
      image_id: { image_id: userData?.image },
      token,
    };
    
    await getImage(imgData).then(async (res) => {
      if (res?.error) {
        // Toast.error('Lỗi tải ảnh đại diện!');
        return;
      }
      setimgUrl(res?.data?.data[0]?.url);
    });
  };

  useEffect(() => {
    if (isSuccess) {
      handleExpiredToken(navigation, true);
    }
  }, [checkLogout]);

  useEffect(() => {
    handleGetImage();
  }, [userData]);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      {(isLoading || imageLoading) && <Loader />}
      <StatusBar style="auto" />
      <View style={{ ...styles.circle }}></View>
      <Text style={{ ...styles.username }}>{userData?.name}</Text>
      <View style={{ ...styles.avatar }}>
        <Image
          source={{ uri: imgUrl }}
          style={{
            ...styles.avtImg,
          }}
        />
      </View>
      <View style={{ ...styles.infoCtn }}>
        <Text style={{ ...styles.info }}>
          {' '}
          Số điện thoại: {!userData && userData?.phone.slice(3)}{' '}
        </Text>
        <Text style={{ ...styles.info }}> Email: {userData?.email} </Text>
        <Text style={{ ...styles.info }}>
          {' '}
          Số CMND/CCCD: {userData?.citizen}{' '}
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleSubmit}
        style={[styles.btn, styles.lgBtn]}
      >
        <CusText style={styles.login}>Đăng xuất</CusText>
      </TouchableOpacity>
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
  circle: {
    position: 'absolute',
    left: '-60%',
    bottom: '70%',
    width: 800,
    height: 800,
    borderRadius: 800,
    backgroundColor: 'rgba(64, 0, 129, 0.64)',
  },
  username: {
    position: 'absolute',
    top: '13%',
    color: Colors.WHITE,
    ...textStyle(19, '#fff', 'montExtraBold'),
  },
  avatar: {
    position: 'absolute',
    top: '22%',
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    backgroundColor: Colors.WHITE,
    zIndex: 990,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avtImg: {
    width: '80%',
    height: '80%',
  },
  infoCtn: {
    marginTop: 80,
    marginBottom: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
  },
  info: {
    ...textStyle(14, '#000', 'montRegular'),
  },
  btn: {
    width: 200,
    height: 45,
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
  lgBtn: {
    backgroundColor: '#400081',
    borderWidth: 0,
    paddingLeft: 0,
  },
  login: {
    ...textStyle(14, Colors.WHITE, 'montBold'),
  },
});
