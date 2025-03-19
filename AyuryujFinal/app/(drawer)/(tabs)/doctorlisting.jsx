import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView, StatusBar,Modal,Dimensions,FlatList } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../utils/Colors';

const { width, height } = Dimensions.get('window');

export default function DoctorAppointmentScreen() {
  const [searchText, setSearchText] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      id: 1,
      name: 'Dr.Sarvinder Gandhok',
      qualification: 'MBBS',
      specialization: 'Physician',
      experience: 19,
      languages: ['English', 'Telugu'],
      price: 349,
      hospital: 'mfine Healthcare',
      location: 'HSR Layout, Bengaluru',
      avatar: require('../../../assets/images/doctor.png'),
      about: 'The About Section of the doctor',
      education: 'MBBS from Andhra Medical College (2011)',
      specializations: ['General Medicine', 'Family Medicine', 'Preventive Healthcare'],
      availability: 'Mon-Sat, 10:00 AM - 6:00 PM'
    },
    {
      id: 2,
      name: 'Dr. Amit Baweja',
      qualification: 'MBBS, DEM',
      specialization: 'Physician',
      experience: 25,
      languages: ['Telugu', 'English'],
      price: 449,
      hospital: 'mfine Healthcare',
      location: 'HSR Layout, Bengaluru',
      avatar: require('../../../assets/images/doctor.png'),
      about: 'The about section of the doctor',
      education: 'MBBS from Osmania Medical College (2010), DEM from AIIMS (2012)',
      specializations: ['Emergency Medicine', 'General Medicine', 'Critical Care'],
      availability: 'Mon-Sun, 9:00 AM - 8:00 PM'
    }
  ];

  const openDoctorModal = (doctor) => {
    setSelectedDoctor(doctor);
    setModalVisible(true);
  };

  const DoctorInfoModal = () => {
    if (!selectedDoctor) return null;
    
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setModalVisible(false)}
            >
              <Ionicons name="close" size={24} color="#666" />
            </TouchableOpacity>
            
            <ScrollView>
              <View style={styles.modalHeader}>
                <Image source={selectedDoctor.avatar} style={styles.modalAvatar} />
                <View style={styles.modalDoctorInfo}>
                  <Text style={styles.modalDoctorName}>{selectedDoctor.name}</Text>
                  <Text style={styles.modalQualification}>{selectedDoctor.qualification}</Text>
                  <Text style={styles.modalSpecialization}>{selectedDoctor.specialization}</Text>
                </View>
              </View>
              
              <View style={styles.modalSection}>
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.sectionText}>{selectedDoctor.about}</Text>
              </View>
              
              <View style={styles.modalSection}>
                <Text style={styles.sectionTitle}>Education</Text>
                <Text style={styles.sectionText}>{selectedDoctor.education}</Text>
              </View>
              
              <View style={styles.modalSection}>
                <Text style={styles.sectionTitle}>Specializations</Text>
                <View style={styles.specialtiesContainer}>
                  {selectedDoctor.specializations.map((specialty, index) => (
                    <View key={index} style={styles.specialtyBadge}>
                      <Text style={styles.specialtyText}>{specialty}</Text>
                    </View>
                  ))}
                </View>
              </View>
          
              <View style={styles.modalSection}>
                <Text style={styles.sectionTitle}>Availability</Text>
                <Text style={styles.sectionText}>{selectedDoctor.availability}</Text>
              </View>
              
              <View style={styles.modalSection}>
                <Text style={styles.sectionTitle}>Hospital</Text>
                <View style={styles.hospitalDetailContainer}>
                  <Image 
                    source={require('../../../assets/images/logo.png')} 
                    style={styles.modalHospitalLogo} 
                  />
                  <View>
                    <Text style={styles.hospitalDetailName}>{selectedDoctor.hospital}</Text>
                    <Text style={styles.hospitalDetailLocation}>{selectedDoctor.location}</Text>
                  </View>
                </View>
              </View>
              
              <TouchableOpacity style={styles.bookAppointmentButton}>
                <Text style={styles.bookAppointmentText}>Book Appointment - ₹{selectedDoctor.price}</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  };

  const renderDoctorCard = (doctor) => (
    <View key={doctor.id} style={styles.doctorCard}>
      <View style={styles.cardTopSection}>
        <View style={styles.doctorAvatarContainer}>
          <Image source={doctor.avatar} style={styles.doctorAvatar} />
          <View style={styles.expContainer}>
            <Text style={styles.expText}>{doctor.experience} years exp</Text>
          </View>
        </View>
        
        <View style={styles.doctorInfoContainer}>
          <View style={styles.hospitalInfo}>
            <Image 
              source={require('../../../assets/images/logo.png')} 
              style={styles.hospitalLogo} 
            />
            <View>
              <Text style={styles.hospitalName}>{doctor.hospital}</Text>
              <Text style={styles.hospitalLocation} numberOfLines={1}>{doctor.location}</Text>
            </View>
          </View>
          
          <Text style={styles.doctorName}>{doctor.name}</Text>
          <Text style={styles.qualification}>{doctor.qualification}</Text>
          <Text style={styles.specialization}>{doctor.specialization}</Text>
          
          <View style={styles.languageContainer}>
            <Ionicons name="chatbubble-outline" size={16} color="#0096c7" />
            <Text style={styles.languageText}>
              {doctor.languages.join(', ')}
            </Text>
            <View style={styles.additionalLangContainer}>
              <Text style={styles.additionalLangText}>
                +{doctor.languages.length > 2 ? doctor.languages.length - 2 : doctor.languages.length}
              </Text>
            </View>
          </View>
          
          <Text style={styles.price}>₹{doctor.price}</Text>
        </View>
      </View>
      
      <View style={styles.cardBottomSection}>
        <TouchableOpacity 
          style={styles.knowMoreButton}
          onPress={() => openDoctorModal(doctor)}
        >
          <Ionicons name="play-circle-outline" size={18} color="#0096c7" />
          <Text style={styles.knowMoreText}>Know more</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.consultNowButton}>
          <Text style={styles.consultNowText}>Consult now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#0096c7" />
          <Text style={styles.searchLabel}>Search:</Text>
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.plusButton}>
            <Ionicons name="add-outline" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearButton}>
            <Ionicons name="close" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Cashback Offers */}
      <View style={styles.offersContainer}>
        <View style={styles.offerCard}>
          <Image source={require('../../../assets/images/mobikwik.png')} style={styles.offerLogo} />
          <View>
            <Text style={styles.offerAmount}>Upto Rs 250</Text>
            <Text style={styles.offerText}>cashback on MobiKwik wallet</Text>
          </View>
        </View>
        
        <View style={styles.offerCard}>
          <Image source={require('../../../assets/images/mobikwik.png')} style={styles.offerLogo} />
          <View>
            <Text style={styles.offerAmount}>Upto Rs 100</Text>
            <Text style={styles.offerText}>cashback on MobiKwik wallet</Text>
          </View>
        </View>
      </View>
      
      {/* Doctor List Title */}
      <Text style={styles.sectionTitle}>        Showing earliest available doctors</Text>
      
      {/* Doctor List */}
      <ScrollView style={styles.doctorsList}>
        {doctors.map(doctor => renderDoctorCard(doctor))}
      </ScrollView>
      
      {/* Doctor Details Modal */}
      <DoctorInfoModal />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  searchBarContainer: {
    padding: 16,
    backgroundColor: 'white',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchLabel: {
    color: '#0096c7',
    marginLeft: 8,
    fontWeight: '500',
  },
  searchInput: {
    flex: 1,
    padding: 8,
    color: Colors.BLACK,
  },
  plusButton: {
    padding: 4,
    marginRight: 8,
  },
  clearButton: {
    padding: 4,
  },
  offersContainer: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
  },
  offerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    width: '48%',
  },
  offerLogo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  offerAmount: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  offerText: {
    fontSize: 12,
    color: '#666',
  },
  sectionTitle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  doctorsList: {
    flex: 1,
  },
  doctorCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardTopSection: {
    flexDirection: 'row',
    padding: 16,
  },
  doctorAvatarContainer: {
    position: 'relative',
  },
  doctorAvatar: {
    width: 100,
    height: 120,
    borderRadius: 8,
  },
  expContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0096c7',
    padding: 4,
    borderRadius: 4,
  },
  expText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  doctorInfoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  hospitalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  hospitalLogo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  hospitalName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  hospitalLocation: {
    fontSize: 12,
    color: '#666',
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  qualification: {
    fontSize: 14,
    color: '#666',
  },
  specialization: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  languageText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  additionalLangContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#0096c7',
    borderRadius: 16,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 8,
  },
  additionalLangText: {
    color: '#0096c7',
    fontSize: 12,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardBottomSection: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  knowMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    flex: 1,
  },
  knowMoreText: {
    color: '#0096c7',
    marginLeft: 8,
    fontWeight: '500',
  },
  consultNowButton: {
    backgroundColor: '#ff7043',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderBottomRightRadius: 16,
  },
  consultNowText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
  
  //  Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: height * 0.85,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 4,
  },
  modalHeader: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  modalAvatar: {
    width: 100,
    height: 120,
    borderRadius: 8,
  },
  modalDoctorInfo: {
    flex: 1,
    marginLeft: 16,
  },
  modalDoctorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  modalQualification: {
    fontSize: 14,
    color: '#666',
  },
  modalSpecialization: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 8,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
  },
  consultationBadge: {
    backgroundColor: '#e6f7ff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  consultationText: {
    color: '#0096c7',
    fontSize: 12,
    fontWeight: '600',
  },
  modalSection: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  sectionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  specialtiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  specialtyBadge: {
    backgroundColor: '#f0f7ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  specialtyText: {
    color: '#0066cc',
    fontSize: 12,
    fontWeight: '500',
  },
  languageBadgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  languageBadge: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  languageBadgeText: {
    color: '#333',
    fontSize: 12,
    fontWeight: '500',
  },
  hospitalDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalHospitalLogo: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  hospitalDetailName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  hospitalDetailLocation: {
    fontSize: 12,
    color: '#666',
  },
  bookAppointmentButton: {
    backgroundColor: '#0096c7',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  bookAppointmentText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});