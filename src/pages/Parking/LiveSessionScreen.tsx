// src/pages/LiveSessionScreen.tsx
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LiveSession from '../../components/LiveSession';
import {ParkingViewType} from '../../components/types';
import { RootStackParamList } from '../../../navigator/Routes';

interface LiveSessionScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LiveSession'>;
}

const LiveSessionScreen: React.FC<LiveSessionScreenProps> = ({navigation}) => {
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
        // Already on LiveSession screen
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
  <LiveSession
        onBack={() => navigation.goBack()}
        onNavigate={screen => {
          if (screen === 'qrCode') {
            navigation.navigate('QRCode');
          }
        }}
        qrCode={`DC${58223}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default LiveSessionScreen;
