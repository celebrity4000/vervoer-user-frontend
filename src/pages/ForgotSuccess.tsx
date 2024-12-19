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
import colors from '../assets/color';
import { images } from '../assets/images/images';
import { RootStackParamList } from '../../navigator/Routes';

export default function ForgotSuccess() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
                <Text style={styles.headerTitle}>Forgot Password</Text>
            </View>
            <View style={{ marginTop: '10%', width: responsiveWidth(60), height: responsiveHeight(25), alignItems: 'center' }}>
                <Image
                    source={images.Forgot}
                    style={{ width: '80%', height: '90%' }}
                />
            </View>
            <Text style={styles.title}>Sent</Text>
            <View style={{ width: responsiveWidth(70), marginTop: '5%' }}>
                <Text style={styles.subtitle}>Reset Password link is sent to Your Email ID</Text>
            </View>
            
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('Login')
                }}
            >
                <Text style={styles.buttonText}>Back to Login</Text>
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
        width: responsiveWidth(70),
        marginLeft: "5%",
        justifyContent: 'space-between',
        marginTop: '5%'
    },
    headerTitle: {
        fontSize: responsiveFontSize(2.5),
        color: colors.brandColor
    },
    title: {
        color: `${colors.text}`,
        fontSize: 24,
        marginBottom: 8,
        marginTop: '10%'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: responsiveFontSize(2),
        marginBottom: 20,
    },
    button: {
        height: responsiveHeight(6),
        width: responsiveWidth(85),
        marginTop: '10%',
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
    formContainer: {
        marginBottom: 15,
        width: responsiveWidth(90),
        borderBottomWidth: 1,
        marginTop: '10%',
        borderColor: `${colors.gray}`,
    },
    input: {
        height: responsiveHeight(5),
        fontSize: responsiveFontSize(2),
        color: '#000000'
    },
})