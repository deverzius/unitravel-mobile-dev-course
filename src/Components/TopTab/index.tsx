import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SwiperComponent } from '../Swiper';
import { Colors } from '@/Theme/Variables';

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Location"
      screenOptions={{
        swipeEnabled: false,
        tabBarPressColor: Colors.INDIGO3,
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: Colors.INDIGO6,
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
        tabBarStyle: { backgroundColor: 'white' },
      }}
    >
      <Tab.Screen
        name="Tất cả"
        component={SwiperComponent}
        options={{ tabBarLabel: 'Tất cả' }}
      />
      <Tab.Screen
        name="Nổi bật"
        component={SwiperComponent}
        options={{ tabBarLabel: 'Nổi bật' }}
      />
      <Tab.Screen
        name="Gần đây"
        component={SwiperComponent}
        options={{ tabBarLabel: 'Gần đây' }}
      />
      <Tab.Screen
        name="Đề xuất"
        component={SwiperComponent}
        options={{ tabBarLabel: 'Đề xuất' }}
      />
    </Tab.Navigator>
  );
}