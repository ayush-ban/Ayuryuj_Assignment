import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import logo from './../../assets/images/logo.png';
import { useRouter } from 'expo-router';


export default function LoginScreen() {
    const router = useRouter();
  return (
    <LinearGradient
      colors={['#009ACF', '#005B76']} // Gradient background
      style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 40, alignItems: 'center', paddingHorizontal: 20 }}
    >
      {/* Logo at the top */}
      <View style={{ position: 'absolute', top: 100, alignItems: 'center' }}>
        <Image
          source={logo} // Update path if needed
          style={{ width: 120, height: 120, resizeMode: 'contain' }}
        />
      </View>

      <Text style={{ color: 'white', fontSize: 16, marginBottom: 20 }}>
        Enter phone number to continue
      </Text>

      {/* Phone Number Input */}
      <View style={{ backgroundColor: 'white', borderRadius: 8, width: '100%', marginBottom: 10 }}>
        <TextInput
          placeholder="9999999999"
          keyboardType="numeric"
          style={{
            backgroundColor: 'white',
            paddingVertical: 12,
            paddingHorizontal: 15,
            borderRadius: 8,
            fontSize: 16,
            textAlign: 'left',
            fontWeight: 'bold'
          }}
        />
      </View>

      {/* OTP Input */}
      <View style={{ backgroundColor: 'white', borderRadius: 8, width: '100%', marginBottom: 20 }}>
        <TextInput
          placeholder="Enter OTP"
          keyboardType="numeric"
          style={{
            backgroundColor: 'white',
            paddingVertical: 12,
            paddingHorizontal: 15,
            borderRadius: 8,
            fontSize: 16,
            textAlign: 'left',
            fontWeight: 'bold'
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => router.replace('/(tabs)')} 
        style={{
          backgroundColor: 'white',
          paddingVertical: 12,
          paddingHorizontal: 40,
          borderRadius: 8,
          marginTop: 10
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#009ACF' }}>
          Continue
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}



