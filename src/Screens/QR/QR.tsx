import { i18n, LocalizationKey } from '@/Localization';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';import { BarCodeScanner } from 'expo-barcode-scanner';
import { Loader } from '@/Components/Loader';
import { RootStacks } from '@/Screens/index';

export interface IQRProps {
  navigation: any;
}

export const QR = (props: IQRProps) => {
  const { navigation } = props;
  const [hasPermission, setHasPermission] = useState('not-granted');
  const [scanned, setScanned] = useState(false);
  const [qrData, setQrData] = useState('Not yet scanned');
  const [isLoading, setIsLoading] = useState(false);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status);
    })();
  };

  const handleNavigate = () => {
    if (qrData !== 'Not yet scanned') {
      navigation.navigate(RootStacks.DETAIL, {
        id: qrData,
      });
    }
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  useEffect(() => {
    handleNavigate();
  }, [qrData]);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    setQrData(data);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === 'not-granted') {
    return <View style={styles.container}></View>;
  }

  if (hasPermission === 'denied') {
    navigation.goBack();
  }

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
        <View style={styles.scanBox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ width: 400, height: 800 }}
          />
        </View>
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
