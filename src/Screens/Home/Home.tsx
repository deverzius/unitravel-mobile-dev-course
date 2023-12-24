import { i18n, LocalizationKey } from '@/Localization';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';
import { Heading } from 'native-base';
import { useGetImageMutation } from '@/Services';

export interface IHomeProps {
  navigation: any;
}

export const Home = (props: IHomeProps) => {
  const { navigation } = props;

  const [fetchOne, { data, isSuccess, isLoading, error }] =
    useGetImageMutation();

  useEffect(() => {
    fetchOne({
      id: '4950b31e-2450-4135-9de2-fbf717a9b946',
    });
  }, []);

  console.log(data);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* {isLoading && <Loader />} */}
      <>
        <Text>{i18n.t(LocalizationKey.HOME)}</Text>
        <Heading color="primary.500" fontSize="md">
          Hello World!
        </Heading>
      </>
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
});
