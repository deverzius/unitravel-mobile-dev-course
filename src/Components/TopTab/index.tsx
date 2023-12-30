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
        name="All"
        component={SwiperComponent}
        options={{ tabBarLabel: 'Tất cả' }}
      />
      <Tab.Screen
        name="Highlight"
        component={SwiperComponent}
        options={{ tabBarLabel: 'Nổi bật' }}
      />
      <Tab.Screen
        name="Recent"
        component={SwiperComponent}
        options={{ tabBarLabel: 'Gần đây' }}
      />
      <Tab.Screen
        name="Recommend"
        component={SwiperComponent}
        options={{ tabBarLabel: 'Đề xuất' }}
      />
    </Tab.Navigator>
  );
}