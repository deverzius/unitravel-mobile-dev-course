import React from 'react';
import { Welcome1 } from './Welcome1';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation/stacks';

type Welcome1ScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList
>;

export const Welcome1Container = ({
  navigation,
}: Welcome1ScreenNavigatorProps) => {
  return <Welcome1 navigation={navigation} />;
};
