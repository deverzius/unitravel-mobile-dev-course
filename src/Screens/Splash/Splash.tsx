import React, { useEffect } from 'react';
import { View } from 'react-native';
import { RootScreens } from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Splash = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  useEffect(() => {
    handleNavigate();
  });

  const handleNavigate = async () => {
    const token = await AsyncStorage.getItem('onboarding');
    if (token) {
      props.onNavigate(RootScreens.MAIN);
    } else {
      props.onNavigate(RootScreens.WELCOME);
    }
  };

  return <View></View>;
};
