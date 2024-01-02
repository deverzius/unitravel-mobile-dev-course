import { i18n, LocalizationKey } from '@/Localization';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';
import { NotiItem } from './NotiItem';
import CusHeader from '@/Components/CusHeader';
import { useGetNotisMutation } from '@/Services';
import { SafeAreaView } from 'react-native-safe-area-context';
import { handleExpiredToken } from '@/Utils';

export interface INotiProps {
  navigation: any;
  data: any;
}

export const Noti = (props: INotiProps) => {
  const { navigation } = props;
  const [refreshing, setRefreshing] = React.useState(false);

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
      .then((res: any) => {
        if (res.error) {
          handleExpiredToken(navigation, false)
        }
      })
      .catch(err => handleExpiredToken(navigation, false))
  }, [])

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    await Promise.resolve(AsyncStorage.getItem('token'))
      .then(token => getNotis({ token }))

    setRefreshing(false)
  }, [refreshing]);

  return (
    <>
      <View style={styles.container} >
        <StatusBar style="auto" />
        {notisLoading ?
          <Loader /> :
          <>
            <CusHeader style={styles.heading}>
              {i18n.t(LocalizationKey.NOTI)}
            </CusHeader>

            <SafeAreaView style={styles.safeArea}>
              <FlatList
                data={notisData?.data}
                renderItem={({ item }) => <NotiItem navigation={navigation} data={item} />}
                refreshControl={
                  <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
              />
            </SafeAreaView>
          </>
        }
      </View>
    </>
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
