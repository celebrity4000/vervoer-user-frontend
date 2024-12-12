// screens/QRCodeScreen.tsx
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Header from '../components/Header';
import QRCodeView from '../components/QRCodeView';
import {ParkingViewType} from '../components/types';

interface QRCodeScreenProps {
  navigation: StackNavigationProp<any>;
}

const QRCode: React.FC<QRCodeScreenProps> = ({navigation}) => {
  const [notificationCount] = useState(4);

  const handleNavigate = (screen: ParkingViewType) => {
    // Handle navigation to other screens if needed
  };

  const renderQRContent = () => {
    return <QRCodeView onBack={() => navigation.goBack()} />;
  };

  return (
    <View style={styles.container}>
      <Header
        notificationCount={notificationCount}
        onNavigate={handleNavigate}
        renderContent={renderQRContent}
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

export default QRCode;
