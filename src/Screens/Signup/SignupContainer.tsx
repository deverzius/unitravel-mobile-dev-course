import { Signup } from './Signup';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation/stacks';

type AuthScreenNavigatorProps = NativeStackScreenProps<RootStackParamList>;

export const SignupContainer = ({ navigation }: AuthScreenNavigatorProps) => {
  return <Signup navigation={navigation} />;
};
