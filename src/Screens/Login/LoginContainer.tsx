import { Login } from './Login';
import React, { useState, useEffect } from 'react';
import { useLazyGetUserQuery } from '@/Services';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStacks } from '..';

type AuthScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList
>;

export const LoginContainer = ({ navigation }: AuthScreenNavigatorProps) => {
  const [userId, setUserId] = useState('9');

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  useEffect(() => {
    handleNavigate();
  });

  const handleNavigate = async () => {
    const token = await AsyncStorage.getItem('user');
    if (token) {
      navigation.navigate(RootStacks.MAIN);
    }
  };

  return <Login data={data} isLoading={isLoading} navigation={navigation} />;
};
