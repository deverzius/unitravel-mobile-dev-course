import React from 'react';
import { Welcome2 } from './Welcome2';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation';

type Welcome2ScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList
>;

export const Welcome2Container = ({
  navigation,
}: Welcome2ScreenNavigatorProps) => {
  return <Welcome2 navigation={navigation} />;
};
