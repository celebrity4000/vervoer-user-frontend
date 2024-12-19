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
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Dropdown } from 'react-native-element-dropdown';
import CarRentalSlider from '../../components/CarRentalSlider';
import colors from '../../assets/color';
import { images } from '../../assets/images/images';
import { RootStackParamList } from '../../../navigator/Routes';

export default function UserHome() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}>
            <StatusBar
                hidden={false}
                barStyle='dark-content'
                animated={true}
                backgroundColor="transparent"
            />

            <View style={{ flexDirection: 'row', alignItems: 'center', width: responsiveWidth(90), justifyContent: 'space-between' , marginTop: '25%'}}>
                <TouchableOpacity
                onPress={() => {
                    navigation.goBack()
                }}
                >
                    <Icon source="arrow-left" size={35} color={colors.brandColor} />
                </TouchableOpacity>
                <View style={{ width: responsiveWidth(60) }}>
                    <Text style={{ fontSize: responsiveFontSize(2.5), color: `${colors.black}` }}>
                        Users - Home
                    </Text>
                </View>
                <TouchableOpacity style={{ alignItems: 'center' }} 
                onPress={() => {
                    navigation.navigate('QRCode')
                }}
                >
                    <Image source={images.Scanner} style={{ width: responsiveWidth(8), height: responsiveHeight(4) }} />
                    <Text style={{ color: `${colors.text}` }}>Scan QBR</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: responsiveHeight(20) }}>
                <CarRentalSlider />
            </View>
            <View style={{ alignItems: 'center', marginTop: '2%', width: responsiveWidth(45), height: responsiveHeight(50), justifyContent: 'space-evenly' }}>
                <TouchableOpacity style={styles.button}>
                    <Image
                        source={images.Ride}
                        style={{ width: '55%', height: '35%' }}
                    />
                    <Text style={styles.buttonText}>Ride Share</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={() => {
                    navigation.navigate('Parking')
                }}
                >
                    <Image
                        source={images.Parking}
                        style={{ width: '50%', height: '35%' }}
                    />
                    <Text style={styles.buttonText}>Parking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image
                        source={images.Cleaning}
                        style={{ width: '35%', height: '35%' }}
                    />
                    <Text style={styles.buttonText}>Dry Cleaners</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    button: {
        backgroundColor: `${colors.white}`,
        width: '60%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,

    },
    buttonText: {
        marginTop: '5%',
        color: `${colors.black}`
    }
})