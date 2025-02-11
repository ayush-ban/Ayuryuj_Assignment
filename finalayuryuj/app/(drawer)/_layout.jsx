import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createRef } from 'react';

const navigationRef = createRef();

export function toggleDrawer() {
    if (navigationRef.current) {
      navigationRef.current.dispatch(DrawerActions.toggleDrawer());
    }
  }
export default function DrawerLayout() {
  return (
    <NavigationContainer ref={navigationRef}>
        <Drawer 
        screenOptions={{
            headerShown: false,
            drawerStyle: {
            backgroundColor: '#fff',
            width: 280,
            },
            drawerActiveTintColor: '#4a90e2',
            drawerInactiveTintColor: '#333',
        }}
        >
            <Drawer.Screen 
                name="index"
                options={{
                drawerLabel: "Home",
                drawerIcon: ({ color }) => (
                    <Ionicons name="home-outline" size={24} color={color} />
                ),
                }}
            />
            <Drawer.Screen 
                name="help"
                options={{
                drawerLabel: "Help & Support",
                drawerIcon: ({ color }) => (
                    <Ionicons name="help-circle-outline" size={24} color={color} />
                ),
                }}
            />
            <Drawer.Screen 
                name="logout"
                options={{
                drawerLabel: "Logout",
                drawerIcon: ({ color }) => (
                    <Ionicons name="log-out-outline" size={24} color={color} />
                ),
                }}
            />
        </Drawer>
    </NavigationContainer>
  );
}