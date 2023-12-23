import { Signup } from './Signup';
import React, { useState, useEffect } from 'react';
import { useLazyGetUserQuery } from '@/Services';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation/stacks';

type AuthScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList
>;

export const SignupContainer = ({ navigation }: AuthScreenNavigatorProps) => {
  const [userId, setUserId] = useState('9');

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <Signup data={data} isLoading={isLoading} navigation={navigation} />;
};
