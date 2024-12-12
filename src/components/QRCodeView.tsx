// src/components/QRCodeView.tsx
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import colors from '../assets/color';

interface QRCodeViewProps {
  onBack: () => void;
}

const QRCodeView: React.FC<QRCodeViewProps> = ({onBack}) => {
  const [codeNumber, setCodeNumber] = useState('');

  useEffect(() => {
    const number = Math.floor(10000 + Math.random() * 90000).toString();
    setCodeNumber(`DC${number}`);
  }, []);

  // Static QR code data - you can modify this as needed
  const qrValue = 'https://www.example.com/';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <IconButton icon="arrow-left" size={24} iconColor={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>Parking QR</Text>
        <Text style={styles.codeNumber}>{`#${codeNumber}`}</Text>
      </View>

      <View style={styles.qrContainer}>
        <QRCode
          value={qrValue}
          size={250}
          color="black"
          backgroundColor="white"
        />
      </View>

      <TouchableOpacity style={styles.doneButton} onPress={onBack}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
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
    paddingHorizontal: 16,
    height: 60,
  },
  backButton: {
    marginRight: 8,
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: '400',
    color: '#000',
  },
  codeNumber: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.primary,
  },
  qrContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  doneButton: {
    position: 'absolute',
    bottom: 32,
    left: 32,
    right: 32,
    backgroundColor: colors.primary,
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default QRCodeView;
