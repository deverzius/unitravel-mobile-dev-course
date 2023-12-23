import { QR } from './QR';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation/stacks';

type QRScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList
>;

export const QRContainer = ({ navigation }: QRScreenNavigatorProps) => {
  return <QR navigation={navigation} />;
};
