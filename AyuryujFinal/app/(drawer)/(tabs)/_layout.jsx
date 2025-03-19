import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../../../utils/Colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor:Colors.BLACK,
        headerShown:false
    }}
    >
        <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: () => <FontAwesome size={28} name="home" color="black" />,
        }}
      />
        <Tabs.Screen
        name="doctorlisting"
        options={{
          title: 'Doctorlisting',
          tabBarIcon: () => <FontAwesome6 name="user-doctor" size={24} color="black" />,
        }}
      />
        <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: () => <FontAwesome size={28} name="user" color="black" />,
        }}
      />
    </Tabs>
  )
}