import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, Alert, Image } from 'react-native';
import { IconButton } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/color';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { images } from '../assets/images/images';


interface QRCodeViewProps {
  onBack: () => void;
}

const QRCodeView: React.FC<QRCodeViewProps> = ({ onBack }) => {
  const [codeNumber, setCodeNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Generate the QR code number on mount
  useEffect(() => {
    const number = Math.floor(10000 + Math.random() * 90000).toString();
    setCodeNumber(`DC${number}`);
  }, []);

  // Trigger modal visibility after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const qrValue = `https://www.example.com/?code=${codeNumber}`;

  return (
    <View style={styles.container}>
      {/* Modal */}
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: '45%',
            }}
          >
          

            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              style={styles.modalView}
            >
              <View style={{width: "100%", alignItems: 'center', height: "30%", justifyContent: 'center'}}>
              <Image source={images.success}  style={{width: "38%", height: '92%'}}/>
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: responsiveFontSize(4),
                  fontWeight: '400',
                  color: `${colors.primary}`,
                  marginTop: '10%',
                }}
              >
                Done
              </Text>
              <Text style={styles.modalText}>
              We hope you enjoyed our Services.
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>GOT IT</Text>
              </Pressable>
            </LinearGradient>
          </View>
        </Modal>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          size={30}
          onPress={onBack}
          iconColor={colors.primary}
          accessibilityLabel="Go back"
        />
        <Text style={styles.title}>Parking QR</Text>
        <Text style={styles.codeNumber}>{`#${codeNumber}`}</Text>
      </View>

      {/* QR Code */}
      <View style={styles.qrContainer}>
        <QRCode value={qrValue} size={250} color="black" backgroundColor="white" />
      </View>

      {/* Done Button */}
      <TouchableOpacity
        style={styles.doneButton}
        onPress={onBack}
        accessible={true}
        accessibilityLabel="Done"
      >
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
    marginTop: '20%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    width: responsiveWidth(95),
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
  modalText: {
    marginTop: '15%',
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: responsiveFontSize(2),
    color: `${colors.black}`,
  },
  button1: {
    width: responsiveWidth(15),
    height: responsiveHeight(8),
    borderRadius: 50,
    padding: 10,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonClose1: {
    backgroundColor: '#FFBD69',
    position: 'absolute',
    zIndex: 2,
    right: 19,
    top: -6,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#FFBD69',
    borderRadius: 40,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: responsiveWidth(86),
    height: responsiveHeight(52),
  },
  button: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: '5%',
    height: responsiveHeight(8),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: `${colors.primary}`,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default QRCodeView;
