import { Scan } from './Scan';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation/stacks';

type ScanScreenNavigatorProps = NativeStackScreenProps<RootStackParamList>;

export const ScanContainer = ({ navigation }: ScanScreenNavigatorProps) => {
  return <Scan navigation={navigation} />;
};
