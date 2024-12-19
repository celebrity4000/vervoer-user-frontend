import React, { useRef, useState } from "react";
import { View, TextInput, TouchableOpacity, Animated, StyleSheet, Text } from "react-native";
import colors from "../assets/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigator/Routes";


const EmailOTPInput = () => {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const inputs = useRef<TextInput[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  // Checks if OTP is valid (all fields are filled)
  const isOTPValid = otp.every((digit) => digit.trim() !== "");

  const handleOTPChange = (index: number, value: string) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to the next input field if a value is entered
    if (value && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleVerifyOTP = () => {
    console.log("OTP Verified:", otp.join(""));
        navigation.navigate('EmailOTPSuccess')
    // Add OTP verification logic here
  };

  const handleResendOTP = () => {
    console.log("Resend OTP");
    // Add resend OTP logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputs.current[index] = el!)} // Store refs in the array
            style={[styles.otpInput, index === 0 && styles.firstOTPInput]}
            maxLength={1}
            keyboardType="number-pad"
            value={digit}
            onChangeText={(value) => handleOTPChange(index, value)}
          />
        ))}
      </View>
      <View>
        <Text style={{color: `${colors.gray}`, fontSize: responsiveFontSize(2)}}>Didn't received OTP?</Text>
      </View>
      <TouchableOpacity onPress={handleResendOTP}>
        <Animated.Text style={styles.resendText}>Resend OTP</Animated.Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, isOTPValid ? styles.activeButton : styles.disabledButton]}
        disabled={!isOTPValid}
        onPress={handleVerifyOTP}
      >
        <Text style={styles.buttonText}>Verify Email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 20,
    width: responsiveWidth(70)
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 50,
    margin: 5,
    width: 50,
    height: 50,
    textAlign: "center",
    fontSize: 18,
  },
  firstOTPInput: {
    borderColor: `${colors.black}`,
  },
  resendText: {
    fontSize: 16,
    color: `${colors.brandColor}`,
    marginVertical: 10,
  },
  button: {
        height: responsiveHeight(6),
        width: responsiveWidth(85),
        marginTop: '30%',
        backgroundColor: colors.brandColor,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
  },
  activeButton: {
    backgroundColor: `${colors.brandColor}`,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    fontSize: responsiveFontSize(2),
    color: "#FFFFFF",
  },
});

export default EmailOTPInput;
