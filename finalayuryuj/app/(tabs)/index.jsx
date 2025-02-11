import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';
import logo from '../../assets/images/logo.png';
import { useNavigation, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import labTests from '../../assets/images/labTests.png';
import xrays from '../../assets/images/xrays.png';
import skincare from '../../assets/images/skincare.png';
import medicines from '../../assets/images/medicines.png';
import bodyCheckup from '../../assets/images/bodyCheckup.png';
import consultations from '../../assets/images/consultations.png';
import { DrawerActions } from '@react-navigation/native';
import {toggleDrawer} from '../(drawer)/_layout';


export default function Dashboard() {
  const navigation = useNavigation();
  const router = useRouter();
  
    // Data for images and navigation paths
    const items = [labTests, xrays, skincare, medicines, bodyCheckup, consultations];

  return (
    <View>
      {/* Drawer implemention */}
      <View style={{ flex: 1 }}>
        <View style={styles.headerDrawer}>
          <TouchableOpacity 
            onPress={toggleDrawer}
            style={styles.menuButtonDrawer}
          >
            <Ionicons name="menu" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Drawer implemention finished */}
    <View style={styles.logoContainer}>
      <Image source={logo}
        style={styles.logo}
      />
    </View>
      <View style={styles.containerImage}>
        {items.map((image, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.cardImage} 
            // onPress={() => router.push(item.route)}
          >
            <Image source={image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView>
        <View style={styles.container}>
          {/* <Text style={styles.header}>mfine</Text> */}

          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>Book a Test</Text>
            <Text style={styles.cardDescription}>Schedule lab tests at your convenience.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>Online Consultations</Text>
            <Text style={styles.cardDescription}>Consult with doctors anytime, anywhere.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: Colors.WHITE,
    elevation: 5
  },
  container: {
    flex: 1, 
    padding: 20, 
    backgroundColor: Colors.WHITE,
  },
  header: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20,
    
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    // paddingHorizontal: 19,
    borderRadius: 40,
    marginBottom: 15,
    shadowColor: '#000',
    elevation: 120,
    
  },
  cardTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 5 
  },
  cardDescription: { 
    fontSize: 14, 
    color: Colors.GRAY
  },
  logoContainer: {
    alignItems: 'center'
  },
  logo:{
    width: 100, 
    height: 50, 
    resizeMode: 'contain', 
    marginTop: 5
  },
  containerImage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 2
  },
  cardImage: {
    width: '30%', 
    aspectRatio: 1, 
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', 
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  headerDrawer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: Colors.WHITE,
    height: 60,
  },
  menuButtonDrawer: {
    padding: 8,
  },
  logoContainerDrawer: {
    flex: 1,
    alignItems: 'center',
    marginRight: 40, // To offset the menu button width
  },
});
