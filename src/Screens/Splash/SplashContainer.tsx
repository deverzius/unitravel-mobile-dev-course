import React from "react";
import { Splash } from "./Splash";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

type SplashScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList
>;

export const SplashContainer = ({
  navigation,
}: SplashScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <Splash onNavigate={onNavigate} />;
};
