import React from 'react';
import { Welcome } from './Welcome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation';

type WelcomeScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList
>;

export const WelcomeContainer = ({
  navigation,
}: WelcomeScreenNavigatorProps) => {
  return <Welcome navigation={navigation} />;
};
