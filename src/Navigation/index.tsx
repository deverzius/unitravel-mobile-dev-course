import React from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { WelcomeContainer } from '@/Screens/Welcome';
import { SplashContainer } from '@/Screens/Splash';
import { ScanContainer } from '@/Screens/Scan';
import { LoginContainer } from '@/Screens/Login';
import { SignupContainer } from '@/Screens/Signup';
import { MainNavigator } from './Main';
import { RootScreens, RootStacks } from '@/Screens';

export type RootStackParamList = {
  [RootStacks.MAIN]: undefined;
  [RootStacks.ONBOARDING]: undefined;
  [RootStacks.AUTH]: undefined;
  [RootStacks.SPLASH]: undefined;
  [RootStacks.SCAN]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function WelcomeStack() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name={RootScreens.WELCOME}
        component={WelcomeContainer}
      />
    </RootStack.Navigator>
  );
}

function AuthStack() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={RootScreens.LOGIN} component={LoginContainer} />
      <RootStack.Screen name={RootScreens.SIGNUP} component={SignupContainer} />
    </RootStack.Navigator>
  );
}

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={RootStacks.SPLASH}
          component={SplashContainer}
        />
        <RootStack.Screen
          name={RootStacks.ONBOARDING}
          component={WelcomeStack}
        />
        <RootStack.Screen name={RootStacks.AUTH} component={AuthStack} />
        <RootStack.Screen name={RootStacks.SCAN} component={ScanContainer} />
        <RootStack.Screen
          name={RootStacks.MAIN}
          component={MainNavigator}
          options={{}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
