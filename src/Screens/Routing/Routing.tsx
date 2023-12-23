import { i18n, LocalizationKey } from '@/Localization';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Heading } from 'native-base';
import { User } from '@/Services/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';

export interface IRoutingProps {
  data: User | undefined;
  isLoading: boolean;
}

export const Routing = (props: IRoutingProps) => {
  const { data, isLoading } = props;

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
