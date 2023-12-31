import { i18n, LocalizationKey } from '@/Localization';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Heading, Toast } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';
import { NotiItem } from './NotiItem';
import { TextStroke } from '@/Components/TextStroke';
import { Colors, FontSize } from '@/Theme/Variables';
import CusHeader from '@/Components/CusHeader';
import { useGetNotisMutation } from '@/Services';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface INotiProps {
  navigation: any;
  data: any;
}

export const Noti = (props: INotiProps) => {
  const { navigation } = props;
  // const [notis, setNotis] = React.useState([]);
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
    Promise.resolve(AsyncStorage.getItem('token'))
      .then(token => getNotis({ token }))
    // .then((notis: any) => setNotis(notis?.data?.data))
    // .catch(err => console.log('NotiError: ', err))
  }, [])


  return (
    <View style={styles.container} >
      <StatusBar style="auto" />
      {notisLoading ?
        <Loader /> :
        <>
          <CusHeader style={styles.heading}>
            {i18n.t(LocalizationKey.NOTI)}
          </CusHeader>

          <SafeAreaView style={styles.safeArea}>
            {notisSuccess && <FlatList
              data={notisData?.data}
              renderItem={({ item }) => <NotiItem navigation={navigation} data={item} />}
            />}
          </SafeAreaView>
          {/* {notis.map((item: any, index: any) => (
            <NotiItem navigation={navigation} data={item} key={index} />
          ))} */}
        </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  heading: {
    marginBottom: 0,
  },
  safeArea: {
  }
});
