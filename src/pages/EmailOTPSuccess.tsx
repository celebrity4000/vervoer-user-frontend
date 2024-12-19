import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-paper/src/components/Icon';
import {
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    Image,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Dropdown } from 'react-native-element-dropdown';
import colors from '../assets/color';
import { images } from '../assets/images/images';

export default function EmailOTPSuccess() {
    const navigation = useNavigation();
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
            <View style={{ marginTop: '10%', width: responsiveWidth(60), height: responsiveHeight(25), alignItems: 'center' }}>
                <Image
                    source={images.EmailSuccess}
                    style={{ width: '80%', height: '90%' }}
                />
            </View>
            <Text style={styles.title}>Success</Text>
      <View style={{ width: responsiveWidth(60), marginTop: '5%' }}>
        <Text style={styles.subtitle}>Your Email ID is verified Successfully.</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
    //   Home page Navigation
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        width: responsiveWidth(62),
        marginLeft: "5%",
        justifyContent: 'space-between',
        marginTop: '5%'
    },
    headerTitle: {
        fontSize: responsiveFontSize(3),
        color: colors.brandColor
    },
    title: {
        color: `${colors.text}`,
        fontSize: 24,
        marginBottom: 8,
        marginTop: '5%'
      },
      subtitle: {
        textAlign: 'center',
        fontSize: responsiveFontSize(2),
        marginBottom: 20,
      },
      button: {
        height: responsiveHeight(6),
        width: responsiveWidth(85),
        marginTop: '5%',
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
  buttonText: {
    fontSize: responsiveFontSize(2),
    color: "#FFFFFF",
  },
})