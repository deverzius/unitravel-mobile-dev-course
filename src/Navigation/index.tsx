import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { WelcomeContainer } from "@/Screens/Welcome";
import { SplashContainer } from "@/Screens/Splash";
import { MainNavigator } from "./Main";
import { RootScreens } from "@/Screens";

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
  [RootScreens.SPLASH]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={RootScreens.SPLASH}
          component={SplashContainer}
        />
        <RootStack.Screen
          name={RootScreens.WELCOME}
          component={WelcomeContainer}
        />
        <RootStack.Screen
          name={RootScreens.MAIN}
          component={MainNavigator}
          options={{}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
