import React, { useEffect } from 'react';
import { View } from 'react-native';
import { RootStacks } from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Splash = (props: {
  onNavigate: (string: RootStacks) => void;
}) => {
  useEffect(() => {
    handleNavigate();
  });

  const handleNavigate = async () => {
    const token = await AsyncStorage.getItem('onboarding');
    if (token) {
      props.onNavigate(RootStacks.AUTH);
    } else {
      props.onNavigate(RootStacks.ONBOARDING);
    }
  };

  return <View></View>;
};
