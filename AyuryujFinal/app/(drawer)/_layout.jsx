import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';

const DrawerNav = () => {
  return (
        <Drawer 
        screenOptions={{
            headerTitle:"Home",
            headerShown: true,
            drawerStyle: {
            backgroundColor: '#fff',
            width: 280,
            },
            drawerActiveTintColor: '#4a90e2',
            drawerInactiveTintColor: '#333',
        }}
        >
            <Drawer.Screen 
                name="(tabs)"
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
                headerShown:false,
                drawerLabel: "Help & Support",
                drawerIcon: ({ color }) => (
                    <Ionicons name="help-circle-outline" size={24} color={color} />
                ),
                }}
            />
            <Drawer.Screen 
                name="logout"
                options={{
                headerShown:false,
                drawerLabel: "Logout",
                drawerIcon: ({ color }) => (
                    <Ionicons name="log-out-outline" size={24} color={color} />
                ),
                }}
            />
        </Drawer>
  );
};

export default DrawerNav;