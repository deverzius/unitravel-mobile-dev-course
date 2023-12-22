import { i18n, LocalizationKey } from '@/Localization';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HStack, Spinner, Heading } from 'native-base';
import { User } from '@/Services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { textStyle } from '@/Theme/Variables';
import CusText from '@/Components/CusText';
import { Colors } from '@/Theme/Variables';
import { RootScreens } from '..';
import { BarCodeScanner } from 'expo-barcode-scanner';

export interface IQRProps {
  data: User | undefined;
  isLoading: boolean;
  navigation: any;
}

export const QR = (props: IQRProps) => {
  const { data, isLoading, navigation } = props;
  const [hasPermission, setHasPermission] = useState('not-granted');
  const [scanned, setScanned] = useState(false);
  const [qrData, setQrData] = useState('Not yet scanned');

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status);
    })();
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    setQrData(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === 'not-granted') {
    return <View style={styles.container}></View>;
  }

  if (hasPermission === 'denied') {
    navigation.goBack();
  }

  console.log(data);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isLoading ? (
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="md">
            {i18n.t(LocalizationKey.LOADING)}
          </Heading>
        </HStack>
      ) : (
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
          <View style={styles.scanBox}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ width: 400, height: 800 }}
            />
          </View>
        </>
      )}
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
  scanBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
  },
});
