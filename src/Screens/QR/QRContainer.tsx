import { QR } from './QR';
import React, { useState, useEffect } from 'react';
import { useLazyGetUserQuery } from '@/Services';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation';

type QRScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList
>;

export const QRContainer = ({ navigation }: QRScreenNavigatorProps) => {
  const [userId, setUserId] = useState('9');

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <QR data={data} isLoading={isLoading} navigation={navigation} />;
};
