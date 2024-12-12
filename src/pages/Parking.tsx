// src/pages/Parking.tsx
import React, {useState} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import Header from '../components/Header';
import ParkingTitle from '../components/ParkingTitle';
import MenuGrid from '../components/MenuGrid/MenuGrid';
import {ParkingViewType} from '../components/types';

interface ParkingProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Parking'>;
}

const Parking: React.FC<ParkingProps> = ({navigation}) => {
  const [notificationCount] = useState(4);

  const handleNavigate = (screen: ParkingViewType) => {
    // Handle header navigation
    switch (screen) {
      case 'search':
      case 'wallet':
      case 'notifications':
        // These are handled within the Header component
        break;
      case 'qrCode':
        navigation.navigate('QRCode');
        break;
      case 'history':
        navigation.navigate('History');
        break;
      case 'liveSession':
        navigation.navigate('LiveSession');
        break;
      case 'findParking':
        navigation.navigate('FindParking');
        break;
      default:
        break;
    }
  };

  const renderContent = () => {
    return (
      <View style={styles.mainContent}>
        <ParkingTitle onBack={() => {}} />
        <MenuGrid />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Header
        notificationCount={notificationCount}
        onNavigate={handleNavigate}
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
  mainContent: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: -20,
    paddingTop: 36,
  },
});

export default Parking;
