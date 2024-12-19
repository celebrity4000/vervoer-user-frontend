// src/pages/FindParkingScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {images} from '../../assets/images/images';
import color from '../../assets/color';
import { RootStackParamList } from '../../../navigator/Routes';
import colors from '../../assets/color';


const FindParking = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

 

  return (
    <View style={styles.container}>
     
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconButton
                icon="arrow-left"
                size={24}
                iconColor={colors.primary}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Book Parking</Text>
          </View>

          {/* Empty View replacing MapView */}
          <View style={styles.mapPlaceholder}>
            {/* This is where the map would be */}
          </View>

          {/* Bottom Sheet */}
          <View style={styles.bottomSheet}>
            <View style={styles.locationContainer}>
              <Text style={styles.locationLabel}>Location</Text>
              <View style={styles.locationContent}>
                <View style={styles.locationRow}>
                  <Image
                    source={images.location}
                    style={{width: 48, height: 48, marginLeft: 12}}
                    resizeMode="contain"
                  />
                  <TextInput
                    placeholder="Change Location"
                    placeholderTextColor="#808080"
                    style={styles.locationInput}
                    showSoftInputOnFocus={false}
                    onTouchStart={() => {
                      // Add any onPress handling here
                      console.log('Location input pressed');
                    }}
                  />
                </View>
                {/* Divider Line */}
                <View style={styles.divider} />
              </View>
            </View>

            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => navigation.navigate('ParkingSlot')}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    height: 60,
    marginTop: '20%',
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 20,
    height: '35%',
    justifyContent: 'space-between',
    elevation: 2,
  },
  locationContainer: {
    flex: 1,
  },
  locationLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    paddingLeft: 12,
    marginBottom: 30,
  },
  locationContent: {
    gap: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    margin: 0,
    marginLeft: 0,
  },
  locationInput: {
    fontSize: 16,
    marginLeft: 16,
    flex: 1,
    padding: 0,
    color: color.primary,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginLeft: 12,
    marginRight: 12,
  },
  applyButton: {
    backgroundColor: color.primary,
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default FindParking;
