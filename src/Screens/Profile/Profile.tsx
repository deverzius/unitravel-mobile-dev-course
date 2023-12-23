import { i18n, LocalizationKey } from '@/Localization';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Heading } from 'native-base';
import { User } from '@/Services/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from '@/Components/Loader';
import { Colors } from '@/Theme/Variables';
import { useLogoutMutation } from '@/Services';
import { RootStacks } from '..';

export interface IProfileProps {
  navigation: any;
}

export const Profile = (props: IProfileProps) => {
  const { navigation } = props;
  const [checkLogout, setCheckLogout] = useState(false);
  const [logout, { data, isSuccess, isLoading, error }] = useLogoutMutation();

  const handleSubmit = async (e: any) => {
    await logout();
    setCheckLogout(!checkLogout);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    navigation.navigate(RootStacks.AUTH);
  };

  useEffect(() => {
    if (isSuccess) {
      handleLogout();
    }
  }, [checkLogout]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isLoading && <Loader />}
      <>
        <Text>{i18n.t(LocalizationKey.PROFILE)}</Text>
        <Heading color="primary.500" fontSize="md">
          {data?.username}
        </Heading>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleSubmit}>
          <Text style={{ color: Colors.WHITE }}>Logout</Text>
        </TouchableOpacity>
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
  logoutBtn: {
    marginTop: 20,
    padding: 20,
    backgroundColor: Colors.BLACK,
    borderRadius: 5,
  },
});
