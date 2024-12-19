import React, { useState } from 'react';
import { View, StatusBar, Text, TextInput, StyleSheet, TouchableOpacity, Animated, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../assets/color';
import Icon from 'react-native-paper/src/components/Icon';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigator/Routes';
const PersonalInfo = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('United States of America');
    const [state, setState] = useState('New York');
    const [zipCode, setZipCode] = useState('07030');

    const [formAnimation] = useState(new Animated.Value(0));
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const countries = [
        { label: 'United States of America', value: 'United States of America' },
        { label: 'Canada', value: 'Canada' },
        { label: 'Mexico', value: 'Mexico' },
    ];

    const states = [
        { label: 'New York', value: 'New York' },
        { label: 'California', value: 'California' },
        { label: 'Texas', value: 'Texas' },
    ];

    const handleSubmit = () => {
        // Validate form data and send OTP to email
        console.log('Form data:', { firstName, lastName, email, country, state, zipCode });
        navigation.navigate('EmailOTP');
    };

    const handleKeyboardShow = () => {
        Animated.timing(formAnimation, {
            toValue: -200,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const handleKeyboardHide = () => {
        Animated.timing(formAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    React.useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', handleKeyboardShow);
        const hideSubscription = Keyboard.addListener('keyboardDidHide', handleKeyboardHide);

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar
                hidden={false}
                barStyle='dark-content'
                animated={true}
                backgroundColor="transparent"
            />

            {/* Header */}

            <Animated.View style={[styles.form, { transform: [{ translateY: formAnimation }] }]}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon source="arrow-left" size={35} color={colors.brandColor} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Registration</Text>
                </View>
                <Text style={styles.title}>Enter your Personal info</Text>
                <View style={{ width: responsiveWidth(75), marginTop: '5%', alignSelf: 'center' }}>
                    <Text style={styles.subtitle}>Please enter the below details.We will send OTP to Email to verify</Text>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Your First Name"
                        placeholderTextColor="#000000"
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Your Last Name"
                        placeholderTextColor="#000000"
                        value={lastName}
                        onChangeText={setLastName}
                    />
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.label}>Email ID</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Your Email ID"
                        placeholderTextColor="#000000"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.label}>Country</Text>
                    <Dropdown
                        style={styles.dropdown}
                        data={countries}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Country"
                        value={country}
                        onChange={item => setCountry(item.value)}
                    />
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.label}>State</Text>
                    <Dropdown
                        style={styles.dropdown}
                        data={states}
                        labelField="label"
                        valueField="value"
                        placeholder="Select State"
                        value={state}
                        onChange={item => setState(item.value)}
                    />
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.label}>ZIP Code</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="ZIP Code"
                        placeholderTextColor="#000000"
                        value={zipCode}
                        onChangeText={setZipCode}
                        keyboardType="numeric"
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    form: {
        padding: 20,
    },
    title: {
        marginTop: '10%',
        fontSize: 24,
        color: `${colors.text}`,
        marginBottom: 10,
        alignSelf: 'center'
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: responsiveFontSize(1.5),
        fontFamily: 'Sen-regular',
        color: `${colors.gray}`,
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    formContainer: {
        marginBottom: 15,
        width: responsiveWidth(90),
        borderBottomWidth: 1,
        borderColor: `${colors.gray}`,
    },
    input: {
        height: responsiveHeight(5),
        fontSize: responsiveFontSize(2),
        color: '#000000'
    },
    dropdown: {
        height: responsiveHeight(5),
        justifyContent: 'center',
    },
    button: {
        height: responsiveHeight(6),
        marginTop: '10%',
        width: responsiveWidth(85),
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

export default PersonalInfo;
