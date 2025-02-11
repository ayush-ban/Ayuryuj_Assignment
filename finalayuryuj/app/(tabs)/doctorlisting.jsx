import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import doctor from '../../assets/images/doctor.png';
import Colors from '../../utils/Colors';


export default function DoctorListing() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarvinder Gandhok',
      speciality: 'Cardiologist',
      image: doctor,
      experience: '15 years',
    //   education: 'MBBS, MD - Cardiology',
    //   languages: 'English, Spanish',
      availability: 'Mon-Fri: 9AM-5PM'
    },
    {
      id: 2,
      name: 'Dr. Ram',
      speciality: 'Dentist',
      image: doctor,
      experience: '10 years',
    //   education: 'MBBS, MD - Pediatrics',
    //   languages: 'English, Chinese',
      availability: 'Mon-Sat: 10AM-6PM'
    },
    {
      id: 3,
      name: 'Dr. Lorem Ipsum',
      speciality: 'Dermatologist',
      image: doctor,
      experience: '12 years',
    //   education: 'MBBS, MD - Dermatology',
    //   languages: 'English, French',
      availability: 'Tue-Sat: 9AM-4PM'
    },
  ];

  const handleDoctorPress = (doctor) => {
    setSelectedDoctor(doctor);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {doctors.map((doctor) => (
          <TouchableOpacity 
            key={doctor.id} 
            style={styles.card}
            onPress={() => handleDoctorPress(doctor)}
          >
            <View style={styles.imageContainer}>
              <Image source={doctor.image} style={styles.doctorImage} />
            </View>
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.speciality}>{doctor.speciality}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedDoctor && (
              <>
                <View style={styles.modalHeader}>
                  <Image source={selectedDoctor.image} style={styles.modalImage} />
                  <TouchableOpacity 
                    style={styles.closeButton}
                    onPress={() => setModalVisible(false)}
                  >
                    <Ionicons name="close" size={24} color="#333" />
                  </TouchableOpacity>
                </View>

                <View style={styles.modalInfo}>
                  <Text style={styles.modalName}>{selectedDoctor.name}</Text>
                  <Text style={styles.modalSpeciality}>{selectedDoctor.speciality}</Text>
                  
                  <View style={styles.detailItem}>
                    <Ionicons name="time-outline" size={20} color="#666" />
                    <Text style={styles.detailText}>Experience: {selectedDoctor.experience}</Text>
                  </View>
                  
                  {/* <View style={styles.detailItem}>
                    <Ionicons name="school-outline" size={20} color="#666" />
                    <Text style={styles.detailText}>Education: {selectedDoctor.education}</Text>
                  </View> */}
                  
                  {/* <View style={styles.detailItem}>
                    <Ionicons name="language-outline" size={20} color="#666" />
                    <Text style={styles.detailText}>Languages: {selectedDoctor.languages}</Text>
                  </View> */}
                  
                  <View style={styles.detailItem}>
                    <Ionicons name="calendar-outline" size={20} color="#666" />
                    <Text style={styles.detailText}>Available: {selectedDoctor.availability}</Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.bookButton}>
                  <Text style={styles.bookButtonText}>Book Appointment</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3
  },
  imageContainer: {
    marginRight: 16,
  },
  doctorImage: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.BLACK
  },
  speciality: {
    fontSize: 14,
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: '70%',
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  modalImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 5,
  },
  modalInfo: {
    marginBottom: 20,
  },
  modalName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  modalSpeciality: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  detailText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  bookButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  bookButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});