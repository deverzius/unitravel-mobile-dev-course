import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SplashContainer } from '@/Screens/Splash';
import { MainNavigator } from './Main';
import { RootStacks } from '@/Screens';
import { RootStack, WelcomeStack, AuthStack, ScanStack, NotiStack } from './stacks';

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
        <RootStack.Screen name={RootStacks.SCAN} component={ScanStack} />
        <RootStack.Screen name={RootStacks.NOTI} component={NotiStack} />
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
