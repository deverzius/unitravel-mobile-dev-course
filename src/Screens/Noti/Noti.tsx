import { i18n, LocalizationKey } from '@/Localization';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Heading } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';
import { NotiItem } from './NotiItem';
import { TextStroke } from '@/Components/TextStroke';
import { Colors, FontSize } from '@/Theme/Variables';
import CusHeader from '@/Components/CusHeader';

export interface INotiProps {
  navigation: any;
}

export const Noti = (props: INotiProps) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* {isLoading && <Loader />} */}
      <>
        <CusHeader>
          {i18n.t(LocalizationKey.NOTI)}
        </CusHeader>
        <NotiItem navigation={navigation} />
        <NotiItem navigation={navigation} />
        <NotiItem navigation={navigation} />
      </>
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
