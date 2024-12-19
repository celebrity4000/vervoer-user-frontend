import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import VehicleTypeSelector from '../../components/parking/VehicleTypeSelector';
import ParkingSpotCard from '../../components/parking/ParkingSpotCard';
import BottomButtons from '../../components/parking/BottomButtons';
import colors from '../../assets/color';

type VehicleType = 'car' | 'bike';

const ParkingSpot = () => {
  const navigation = useNavigation();
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>('car');
  const [selectedSpot, setSelectedSpot] = useState<'G' | 'L' | 'R' | null>(
    null,
  );

  const handleViewDetailsNavigation = () => {
    switch (selectedSpot) {
      case 'G':
        navigation.navigate('GarageScreen' as never);
        break;
      case 'L':
        navigation.navigate('LotScreen' as never);
        break;
      case 'R':
        navigation.navigate('ResidenceScreen' as never);
        break;
      default:
        break;
    }
  };

  const handleFindParkingNavigation = () => {
    switch (selectedSpot) {
      case 'G':
        navigation.navigate('ParkingSpace' as never);
        break;
      case 'L':
        navigation.navigate('ParkingSpace' as never);
        break;
      case 'R':
        navigation.navigate('ParkingSpace' as never);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconButton
            icon="arrow-left"
            size={30}
            iconColor={colors.primary}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Parking</Text>
      </View>

      {/* Map Placeholder */}
      <View style={styles.mapPlaceholder} />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        {/* Bottom Sheet */}
        <View style={styles.bottomSheet}>
          <VehicleTypeSelector
            selectedVehicle={selectedVehicle}
            onSelectVehicle={setSelectedVehicle}
          />

          {/* Parking Spots List */}
          <View style={styles.parkingList}>
            {selectedVehicle === 'car' && (
              <>
                <ParkingSpotCard
                  type="G"
                  title="Central Shopping Centre (Garage)"
                  address="123, Lincon Street, New York"
                  duration="5 min"
                  rating="4.2"
                  price="5.00"
                  selected={selectedSpot === 'G'}
                  onSelect={setSelectedSpot}
                />
                <ParkingSpotCard
                  type="L"
                  title="Central Shopping Centre (Lot)"
                  address="123, Lincon Street, New York"
                  duration="5 min"
                  rating="4.2"
                  price="5.00"
                  selected={selectedSpot === 'L'}
                  onSelect={setSelectedSpot}
                />
                <ParkingSpotCard
                  type="R"
                  title="Residence Parking (Driveway)"
                  address="123, Lincon Street, New York"
                  duration="5 min"
                  rating="4.2"
                  price="5.00"
                  selected={selectedSpot === 'R'}
                  onSelect={setSelectedSpot}
                />
              </>
            )}
          </View>
          <View style={styles.parkingList}>
            {selectedVehicle === 'bike' && (
              <>
                <ParkingSpotCard
                  type="L"
                  title="Central Shopping Centre (Lot)"
                  address="123, Lincon Street, New York"
                  duration="5 min"
                  rating="4.2"
                  price="5.00"
                  selected={selectedSpot === 'L'}
                  onSelect={setSelectedSpot}
                />
                <ParkingSpotCard
                  type="R"
                  title="Residence Parking (Driveway)"
                  address="123, Lincon Street, New York"
                  duration="5 min"
                  rating="4.2"
                  price="5.00"
                  selected={selectedSpot === 'R'}
                  onSelect={setSelectedSpot}
                />
              </>
            )}
          </View>

          {/* Bottom Buttons */}
          {selectedSpot && (
            <BottomButtons
              onViewDetails={handleViewDetailsNavigation}
              onFindParking={handleFindParkingNavigation}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    height: 60,
    marginTop: '20%',
    backgroundColor: '#F5F5F5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
  },
  mapPlaceholder: {
    height: 300,
    backgroundColor: '#F5F5F5',
  },
  bottomSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    minHeight: '60%',
  },
  parkingList: {
    flex: 1,
  },
});

export default ParkingSpot;
