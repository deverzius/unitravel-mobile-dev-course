import { i18n, LocalizationKey } from '@/Localization';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Heading } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { textStyle } from '@/Theme/Variables';
import CusText from '@/Components/CusText';
import { Colors } from '@/Theme/Variables';
import { RootScreens } from '..';
import { Loader } from '@/Components/Loader';

export interface IScanProps {
  navigation: any;
}

export const Scan = (props: IScanProps) => {
  const { navigation } = props;
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isLoading && <Loader />}
      <>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Image
            source={require('@/../assets/icon/arrow.png')}
            style={{
              ...styles.backIcon,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.scanHeader}>Quét mã QR</Text>
        <Image
          source={require('@/../assets/icon/scan-qr.png')}
          style={{
            ...styles.iconHome,
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.push(RootScreens.QR)}
          style={[styles.btn, styles.lgBtn]}
        >
          <CusText style={styles.btnText}>Quét</CusText>
        </TouchableOpacity>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  scanHeader: {
    ...textStyle(30, '#ffffff', 'montBold', 30),
    marginTop: 30,
    marginBottom: 40,
  },
  iconHome: {
    width: '90%',
    height: '50%',
    marginBottom: 40,
  },
  btnText: {
    ...textStyle(14, Colors.INDIGO5, 'montBold'),
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
    backgroundColor: Colors.INDIGO1,
  },
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 20,
    height: 15,
  },
});
