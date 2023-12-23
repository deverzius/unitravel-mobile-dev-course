import { Scan } from './Scan';
import React, { useState, useEffect } from 'react';
import { useLazyGetUserQuery } from '@/Services';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation/stacks';
import { RootScreens } from '..';

type ScanScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList
>;

export const ScanContainer = ({ navigation }: ScanScreenNavigatorProps) => {
  const [userId, setUserId] = useState('9');

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <Scan data={data} isLoading={isLoading} navigation={navigation} />;
};
