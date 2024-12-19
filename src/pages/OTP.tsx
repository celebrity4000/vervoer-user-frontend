import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-paper/src/components/Icon';
import colors from '../assets/color';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import OTPInput from '../components/OTPInput';
import { images } from '../assets/images/images';
const OTP: React.FC = () => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const [isOTPValid, setIsOTPValid] = useState(false);
  const [resendOTPAnimation] = useState(new Animated.Value(0));
  const navigation = useNavigation();
  const handleOTPChange = (index: number, value: string) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = value;
    setOTP(updatedOTP);

    if (updatedOTP.every((digit) => digit.trim() !== '')) {
      setIsOTPValid(true);
    } else {
      setIsOTPValid(false);
    }
  };

  const handleResendOTP = () => {
    Animated.timing(resendOTPAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(resendOTPAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });

    // Implement your logic to resend the OTP
    console.log('Resending OTP...');
  };

  const handleVerifyOTP = () => {
    // Implement your logic to verify the OTP
    console.log('Verifying OTP...');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        barStyle='dark-content'
        animated={true}
        backgroundColor="transparent"
      />

      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon source="arrow-left" size={35} color={colors.brandColor} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Registration</Text>
      </View>
      <View style={{marginTop: '10%' , width: responsiveWidth(60), height: responsiveHeight(25), alignItems: 'center'}}>
        <Image
          source={images.VerifyOTP}
          style={{width: '80%', height: '90%'}}
        />
      </View>
      <Text style={styles.title}>Verify OTP</Text>
      <View style={{ width: responsiveWidth(70), marginTop: '5%' }}>
        <Text style={styles.subtitle}>Enter the Verification Code sent to your Phone number</Text>
      </View>
      <OTPInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    color: `${colors.text}`,
    fontSize: 24,
    marginBottom: 8,
    marginTop: '5%'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: '10%',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 50,
    width: 50,
    height: 50,
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 8,
  },
  firstOTPInput: {
    marginLeft: 0,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendText: {
    fontSize: 16,
    color: `${colors.brandColor}`,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: responsiveWidth(62),
    justifyContent: 'space-between',
    marginTop: '5%'
  },
  headerTitle: {
    fontSize: responsiveFontSize(3),
    color: colors.brandColor
  },
});

export default OTP;