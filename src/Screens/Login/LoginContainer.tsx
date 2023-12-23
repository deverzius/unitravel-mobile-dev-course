import { Login } from './Login';
import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation/stacks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStacks } from '..';

type AuthScreenNavigatorProps = NativeStackScreenProps<RootStackParamList>;

export const LoginContainer = ({ navigation }: AuthScreenNavigatorProps) => {

  useEffect(() => {
    handleNavigate();
  });

  const handleNavigate = async () => {
    const token = await AsyncStorage.getItem('user');
    if (token) {
      navigation.navigate(RootStacks.MAIN);
    }
  };

  return <Login navigation={navigation} />;
};
