import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NotiContainer } from '@/Screens/Noti';
import { Colors } from '@/Theme/Variables';


const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Location"
      screenOptions={{
        tabBarPressColor: Colors.INDIGO3,
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: Colors.INDIGO6,
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
        tabBarStyle: { backgroundColor: 'white' },
      }}
    >
      <Tab.Screen
        name="All"
        component={NotiContainer}
        options={{ tabBarLabel: 'Tất cả' }}
      />
      <Tab.Screen
        name="Highlight"
        component={NotiContainer}
        options={{ tabBarLabel: 'Nổi bật' }}
      />
      <Tab.Screen
        name="Recent"
        component={NotiContainer}
        options={{ tabBarLabel: 'Gần đây' }}
      />
      <Tab.Screen
        name="Recommend"
        component={NotiContainer}
        options={{ tabBarLabel: 'Đề xuất' }}
      />
    </Tab.Navigator>
  );
}