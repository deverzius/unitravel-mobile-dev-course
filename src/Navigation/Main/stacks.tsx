import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeContainer } from '@/Screens/Welcome';
import { Welcome1Container } from '@/Screens/Welcome1';
import { Welcome2Container } from '@/Screens/Welcome2';
import { ScanContainer } from '@/Screens/Scan';
import { QRContainer } from '@/Screens/QR';
import { LoginContainer } from '@/Screens/Login';
import { SignupContainer } from '@/Screens/Signup';
import { RootScreens, RootStacks } from '@/Screens';
import { SingleNotiContainer } from '@/Screens/Noti/SingleNotiContainer';

export type RootStackParamList = {
    [RootStacks.MAIN]: undefined;
    [RootStacks.ONBOARDING]: undefined;
    [RootStacks.AUTH]: undefined;
    [RootStacks.SPLASH]: undefined;
    [RootStacks.SCAN]: undefined;
  };

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export function WelcomeStack() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name={RootScreens.WELCOME}
        component={WelcomeContainer}
      />
      <RootStack.Screen
        name={RootScreens.WELCOME1}
        component={Welcome1Container}
      />
      <RootStack.Screen
        name={RootScreens.WELCOME2}
        component={Welcome2Container}
      />
    </RootStack.Navigator>
  );
}

export function AuthStack() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={RootScreens.LOGIN} component={LoginContainer} />
      <RootStack.Screen name={RootScreens.SIGNUP} component={SignupContainer} />
    </RootStack.Navigator>
  );
}

export function ScanStack() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={RootScreens.SCAN} component={ScanContainer} />
      <RootStack.Screen name={RootScreens.QR} component={QRContainer} />
    </RootStack.Navigator>
  );
}

// export function NotiStack() {
//   return (
//     <RootStack.Navigator screenOptions={{ headerShown: false }}>
//       <RootStack.Screen name={RootScreens.SINGLENOTI} component={SingleNotiContainer} />
//     </RootStack.Navigator>
//   );
// }