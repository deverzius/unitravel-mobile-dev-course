import { Login } from './Login';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation/stacks';

type AuthScreenNavigatorProps = NativeStackScreenProps<RootStackParamList>;

export const LoginContainer = ({ navigation }: AuthScreenNavigatorProps) => {
  return <Login navigation={navigation} />;
};
