// src/components/MenuGrid/MenuGrid.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MenuItem from './MenuItem';
import {RootStackParamList} from '../../../App';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const MenuGrid: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.menuGrid}>
      <MenuItem
        icon="car"
        label="Find Parking"
        onPress={() => navigation.navigate('FindParking')}
      />
      <MenuItem
        icon="qrcode"
        label="My QR code"
        onPress={() => navigation.navigate('QRCode')}
      />
      <MenuItem
        icon="clock"
        label="Live Session"
        onPress={() => navigation.navigate('LiveSession')}
      />
      <MenuItem
        icon="history"
        label="History"
        onPress={() => navigation.navigate('History')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 4,
    marginHorizontal: -4,
  },
});

export default MenuGrid;
