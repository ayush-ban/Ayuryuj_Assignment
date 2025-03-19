import { View, Text } from 'react-native'
import React from 'react'

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';


export default function HomeLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Stack
      screenOptions={{
          headerShown:false
      }}
      >
        <Stack.Screen name="login"
        options={{ 
          headerShown: false 
        }}
        />

        {/* <Stack.Screen name='(tabs)' 
        options={{
          headerShown:false
        }}
        /> */}

        <Stack.Screen name="(drawer)"
        options={{ 
          headerShown: false 
        }} 
        />
      </Stack>
    </GestureHandlerRootView>

    
  )


    
}