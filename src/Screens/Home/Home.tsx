import { i18n, LocalizationKey } from '@/Localization';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { User } from '@/Services/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';
import { Heading } from 'native-base';

export interface IHomeProps {
  data: User | undefined;
  isLoading: boolean;
}

export const Home = (props: IHomeProps) => {
  const { data, isLoading } = props;

  const tmp = AsyncStorage.setItem('user', 'token');
  const tmp1 = AsyncStorage.setItem('onboarding', 'true');
  AsyncStorage.removeItem('user');
  AsyncStorage.removeItem('onboarding');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isLoading && <Loader />}
      <>
        <Text>{i18n.t(LocalizationKey.HOME)}</Text>
        <Heading color="primary.500" fontSize="md">
          {data?.username}
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
