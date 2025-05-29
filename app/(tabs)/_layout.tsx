import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: '#32cd32',
        tabBarInactiveTintColor: '#000000',
        headerShown: false,
        tabBarStyle: {
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderColor: '#000000',
        },
    }}
    >
      <Tabs.Screen
        name="ScannerPage"
        options={{
          title: 'Scan',
          tabBarIcon: ({ color }) => (
            <Ionicons name='scan-outline' color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
