import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeContainer } from '@/Screens/Home';
import { RoutingContainer } from '@/Screens/Routing';
import { StyleSheet, Image } from 'react-native';
import { Colors } from '@/Theme/Variables';

const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          ...styles.navBar,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require('@/../assets/icon/home-active.png')
                    : require('@/../assets/icon/home.png')
                }
              />
            );
          },
          tabBarLabelPosition: 'below-icon',
        }}
      />
      <Tab.Screen
        name="Routing"
        component={RoutingContainer}
        options={{
          // tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'below-icon',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: Colors.INDIGO4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 90,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
