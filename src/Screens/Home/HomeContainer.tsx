import { Home } from "./Home";
import React, { useState, useEffect } from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation/stacks';

type HomeScreenNavigatorProps = NativeStackScreenProps<RootStackParamList>;

export const HomeContainer = ({ navigation }: HomeScreenNavigatorProps) => {
  return <Home navigation={navigation} />;
};
