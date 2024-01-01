import { i18n, LocalizationKey } from '@/Localization';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';
import { Header } from '@/Components/Header';
import { Heading } from 'native-base';
import { Colors, textStyle } from '@/Theme/Variables';
import { MyTabs } from '@/Components/TopTab';
import { SwiperComponent } from '@/Components/Swiper';

export interface IHomeProps {
  navigation: any;
}

export const Home = (props: IHomeProps) => {
  const { navigation } = props;

  return (<View style={{backgroundColor: "#fff", flexGrow: 1}}>
    <View style={styles.header}>
      <Header navigation={navigation}/>
    </View>
    <StatusBar style="auto" />
    {/* {isLoading && <Loader />} */}
    <View style={styles.introText}>
      <Heading style={styles.intro1}>
        Chào bạn!
      </Heading>
      <Heading style={styles.intro2}>
        Cùng khám phá làng đại học nào!
      </Heading>
    </View>
    <MyTabs/>
    {/* <Text >{i18n.t(LocalizationKey.HOME)}</Text>
    <View style={styles.footer}>
      <Text>Hello footer</Text>
    </View> */}
    
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
  },
  introText: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#D2D2D2',
    fontFamily: 'montRegular',
  },
  intro1: {
    fontSize: 28,
    color: Colors.INDIGO4,
    fontWeight: '800',
  },
  intro2: {
    fontSize: 20,
    lineHeight: 20,
    color: Colors.INDIGO3,
    fontWeight: '600',
  },
  footer: {
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
});
