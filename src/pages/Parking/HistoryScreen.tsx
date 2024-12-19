// src/pages/HistoryScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import History from '../../components/History';
import { ParkingViewType } from '../../components/types';
import { RootStackParamList } from '../../../navigator/Routes';

interface HistoryScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'History'>;
}

const HistoryScreen: React.FC<HistoryScreenProps> = ({ navigation }) => {
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
        // Already on History screen
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



  return (
    <View style={styles.container}>
      <History onBack={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default HistoryScreen;
