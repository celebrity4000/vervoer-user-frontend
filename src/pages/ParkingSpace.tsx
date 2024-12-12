import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import colors from '../assets/color';
import {images} from '../assets/images';
import {RootStackParamList} from '../../App';

type FloorType = '1st Floor' | '2nd Floor' | '3rd Floor';

const FloorSelector: React.FC<{
  selectedFloor: FloorType;
  onSelectFloor: (type: FloorType) => void;
}> = ({selectedFloor, onSelectFloor}) => (
  <View style={styles.floorSelectorContainer}>
    <View style={styles.floorTypeContainer}>
      <TouchableOpacity
        style={[
          styles.floorTypeButton,
          selectedFloor === '1st Floor' && styles.activeFloorType,
        ]}
        onPress={() => onSelectFloor('1st Floor')}>
        <Text
          style={
            selectedFloor === '1st Floor'
              ? styles.activeFloorTypeText
              : styles.floorTypeText
          }>
          1st Floor
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.floorTypeButton,
          selectedFloor === '2nd Floor' && styles.activeFloorType,
        ]}
        onPress={() => onSelectFloor('2nd Floor')}>
        <Text
          style={
            selectedFloor === '2nd Floor'
              ? styles.activeFloorTypeText
              : styles.floorTypeText
          }>
          2nd Floor
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.floorTypeButton,
          selectedFloor === '3rd Floor' && styles.activeFloorType,
        ]}
        onPress={() => onSelectFloor('3rd Floor')}>
        <Text
          style={
            selectedFloor === '3rd Floor'
              ? styles.activeFloorTypeText
              : styles.floorTypeText
          }>
          3rd Floor
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const ParkingSpace = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedFloor, setSelectedFloor] = useState<FloorType>('1st Floor');

  const getFloorImage = () => {
    switch (selectedFloor) {
      case '1st Floor':
        return images.floor1;
      case '2nd Floor':
        return images.floor2;
      case '3rd Floor':
        return images.floor3;
      default:
        return images.floor1;
    }
  };

  const renderContent = () => {
    return (
      <View style={styles.content}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          {/* Custom Header */}
          <View style={styles.customHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconButton
                icon="arrow-left"
                size={24}
                iconColor={colors.primary}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Available Parking Spaces</Text>
          </View>

          {/* Floor Selector */}
          <FloorSelector
            selectedFloor={selectedFloor}
            onSelectFloor={setSelectedFloor}
          />

          {/* Parking Area with Floor Image */}
          <View style={styles.parkingArea}>
            <Image
              source={getFloorImage()}
              style={styles.floorImage}
              resizeMode="contain"
            />

            {/* Overlay parking slots here */}
            <View style={styles.parkingOverlay}>
              {/* Add your parking slots overlay here */}
            </View>
          </View>
        </ScrollView>

        {/* Bottom Buttons */}
        <View style={styles.bottomButtons}>
          <TouchableOpacity
            style={styles.proceedButton}
            onPress={() => {
              navigation.navigate('Confirmation');
            }}>
            <Text style={styles.proceedButtonText}>Proceed With Spot</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        notificationCount={4}
        onNavigate={(screen: string) => {
          navigation.navigate(screen as never);
        }}
        renderContent={renderContent}
      />
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
  },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    height: 60,
    backgroundColor: 'transparent',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.primary,
  },
  floorSelectorContainer: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 30,
    padding: 8,
    marginVertical: 16,
    alignSelf: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  floorTypeContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  floorTypeButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeFloorType: {
    backgroundColor: '#FFF3E9',
  },
  floorTypeText: {
    color: '#666666',
    fontSize: 14,
    fontWeight: '500',
  },
  activeFloorTypeText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '500',
  },
  parkingArea: {
    flex: 1,
    height: 500,
    position: 'relative',
  },
  floorImage: {
    width: '100%',
    height: '100%',
  },
  parkingOverlay: {
    ...StyleSheet.absoluteFillObject,
    // Add styles for parking slots overlay
  },
  bottomButtons: {
    padding: 16,
    gap: 12,
  },
  proceedButton: {
    backgroundColor: colors.primary,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  backButton: {
    backgroundColor: '#666666',
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ParkingSpace;
