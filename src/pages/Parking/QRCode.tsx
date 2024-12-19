// screens/QRCodeScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import QRCodeView from '../../components/QRCodeView';
import { ParkingViewType } from '../../components/types';

interface QRCodeScreenProps {
  navigation: StackNavigationProp<any>;
}

const QRCode: React.FC<QRCodeScreenProps> = ({ navigation }) => {
  const [notificationCount] = useState(4);

  const handleNavigate = (screen: ParkingViewType) => {
    // Handle navigation to other screens if needed
  };

  return (
    <View style={styles.container}>
      <QRCodeView onBack={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default QRCode;
