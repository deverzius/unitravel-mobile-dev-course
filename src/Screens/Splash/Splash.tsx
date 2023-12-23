import React, { useEffect } from 'react';
import { View } from 'react-native';
import { RootStacks } from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Splash = (props: { onNavigate: (string: RootStacks) => void }) => {
  useEffect(() => {
    handleNavigate();
  });

  const handleNavigate = async () => {
    const onboarding = await AsyncStorage.getItem('onboarding');
    if (onboarding) {
      const user_info = await AsyncStorage.getItem('user');
      if (user_info) {
        props.onNavigate(RootStacks.MAIN);
      } else {
        props.onNavigate(RootStacks.AUTH);
      }
    } else {
      props.onNavigate(RootStacks.ONBOARDING);
    }
  };

  return <View></View>;
};
