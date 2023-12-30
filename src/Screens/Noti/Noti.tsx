import { i18n, LocalizationKey } from '@/Localization';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Heading, Toast } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';
import { NotiItem } from './NotiItem';
import { TextStroke } from '@/Components/TextStroke';
import { Colors, FontSize } from '@/Theme/Variables';
import CusHeader from '@/Components/CusHeader';
import { useGetNotisMutation } from '@/Services';

export interface INotiProps {
  navigation: any;
  data: any;
}

export const Noti = (props: INotiProps) => {
  const { navigation } = props;
  const [notis, setNotis] = React.useState([]);
  const [
    getNotis,
    {
      data: notisData,
      isSuccess: notisSuccess,
      isLoading: notisLoading,
      error: notisError,
    }
  ] = useGetNotisMutation();

  useEffect(() => {
    new Promise(resolve => {
      resolve(AsyncStorage.getItem('token'));
    }).then(token => {
      getNotis({ token });
    });
  }, [])

  useEffect(() => {
    if (notisSuccess) {
      // console.log('Notis: ', notisData)
      setNotis(notisData?.data);
    }
    if (notisError) {
      console.log('NotisError: ', notisError)
    }
  }, [notisSuccess, notisError, notisData])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {notisLoading ?
        <Loader /> :
        <>
          <CusHeader>
            {i18n.t(LocalizationKey.NOTI)}
          </CusHeader>
          {/* <NotiItem navigation={navigation} />
        <NotiItem navigation={navigation} />
        <NotiItem navigation={navigation} /> */}

          {notisSuccess && notis.map((item: any, index: any) => (
            <NotiItem navigation={navigation} data={item} key={index} />
          ))}
        </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
