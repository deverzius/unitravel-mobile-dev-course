import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeContainer } from '@/Screens/Home';
import { RoutingContainer } from '@/Screens/Routing';
import { ScanContainer } from '@/Screens/Scan';
import { NotiContainer } from '@/Screens/Noti';
import { ProfileContainer } from '@/Screens/Profile';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Colors } from '@/Theme/Variables';

const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
  const IconLine = () => {
    return (
      <View
        style={{
          ...styles.line,
          borderBottomColor: '#ffffff',
          borderBottomWidth: 2,
          borderBottomLeftRadius: 1,
          borderBottomRightRadius: 1,
          borderTopLeftRadius: 2,
          borderTopRightRadius: 1,
        }}
      />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.navBar,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ ...styles.tabScreen }}>
              <Image
                source={require('@/../assets/icon/home.png')}
                style={{
                  ...styles.iconHome,
                }}
              />
              {focused && IconLine()}
            </View>
          ),
          tabBarLabelPosition: 'below-icon',
        }}
      />
      <Tab.Screen
        name="Routing"
        component={RoutingContainer}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ ...styles.tabScreen }}>
              <Image
                source={require('@/../assets/icon/routing.png')}
                style={{
                  ...styles.icon,
                }}
              />
              {focused && IconLine()}
            </View>
          ),
          tabBarLabelPosition: 'below-icon',
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanContainer}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ ...styles.tabScreen, ...styles.scanBtn }}>
              <Image
                source={require('@/../assets/icon/qr.png')}
                style={{
                  ...styles.icon,
                }}
              />
            </View>
          ),
          tabBarLabelPosition: 'below-icon',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotiContainer}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ ...styles.tabScreen }}>
              <Image
                source={require('@/../assets/icon/notification.png')}
                style={{
                  ...styles.icon,
                }}
              />
              {focused && IconLine()}
            </View>
          ),
          tabBarLabelPosition: 'below-icon',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileContainer}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ ...styles.tabScreen }}>
              <Image
                source={require('@/../assets/icon/profile.png')}
                style={{
                  ...styles.iconHome,
                }}
              />
              {focused && IconLine()}
            </View>
          ),
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
  tabScreen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  iconHome: {
    width: 35,
    height: 35,
  },
  line: {
    width: 30,
    height: 10,
  },
  scanBtn: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    marginBottom: 15,
  },
});
