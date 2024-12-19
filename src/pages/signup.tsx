import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-paper/src/components/Icon';
import {
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
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
import { RootStackParamList } from '../../navigator/Routes';
// Country code dropdown data
const countryCodeData = [
    { label: '+1', value: '1' },
    { label: '+91', value: '2' },
    { label: '+11', value: '3' },
    { label: '+21', value: '4' },
    { label: '+0', value: '5' },
];

// Type definition for form inputs
interface SignupFormInputs {
    countryCode: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
}

export default function Signup() {
    // State for dropdown and password visibility
    const [countryCodeValue, setCountryCodeValue] = useState(null);
    const [isCountryCodeFocus, setIsCountryCodeFocus] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    // React Navigation
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // React Hook Form setup
    const { 
        control, 
        handleSubmit, 
        watch, 
        formState: { errors } 
    } = useForm<SignupFormInputs>({
        defaultValues: {
            countryCode: '',
            phoneNumber: '',
            password: '',
            confirmPassword: ''
        }
    });

    // Watch password to compare with confirm password
    const password = watch('password');

    // Form submission handler
    const onSubmit = (data: SignupFormInputs) => {
        // TODO: Implement actual signup logic
        console.log('Form Data:', data);
        navigation.navigate('OTP')
        // Example: navigation.navigate('Verification', { phoneNumber: data.phoneNumber });
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView 
                contentContainerStyle={styles.container}
                keyboardShouldPersistTaps="handled"
            >
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

                {/* Title and Subtitle */}
                <View style={styles.titleContainer}>
                    <Text style={styles.mainTitle}>Enter your Phone No.</Text>
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitleText}>
                        Please enter your Phone number. We will send OTP to verify
                    </Text>
                </View>

                {/* Phone Number Input */}
                <View style={[styles.formContainer, {marginTop: "12%"}]}>
                    <Text style={styles.inputLabel}>Phone Number</Text>
                    <View style={styles.inputContainer}>
                        {/* Country Code Dropdown */}
                        <Controller
                            control={control}
                            name="countryCode"
                            rules={{ required: 'Country code is required' }}
                            render={({ field: { onChange, value } }) => (
                                <Dropdown
                                    style={styles.dropdown}
                                    // placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={countryCodeData}
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    value={value}
                                    onFocus={() => setIsCountryCodeFocus(true)}
                                    onBlur={() => setIsCountryCodeFocus(false)}
                                    onChange={(item) => {
                                        onChange(item.value);
                                        // setCountryCodeValue(item.value);
                                        // setIsCountryCodeFocus(false);
                                    }}
                                />
                            )}
                        />
                        
                        {/* Phone Number Input */}
                        <Controller
                            control={control}
                            name="phoneNumber"
                            rules={{
                                required: 'Phone number is required',
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: 'Invalid phone number'
                                }
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput 
                                    placeholder='Enter Phone Number'
                                    placeholderTextColor="#000000"
                                    style={styles.phoneInput}
                                    keyboardType="phone-pad"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />
                    </View>
                
                </View>
                {errors.phoneNumber && (
                        <Text style={styles.errorText}>
                            {errors.phoneNumber.message}
                        </Text>
                    )}
                {/* Create Password */}
                <View style={styles.formContainer}>
                    <Text style={styles.inputLabel}>Create Password</Text>
                    <View style={styles.inputContainer2}>
                        <Controller
                            control={control}
                            name="password"
                            rules={{
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters'
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: 'Password must include uppercase, lowercase, number, and special character'
                                }
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    placeholder="Create Password"
                                    placeholderTextColor="#000000"
                                    style={styles.passwordInput}
                                    secureTextEntry={!isPasswordVisible}
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />
                        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                            <Icon 
                                source={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'} 
                                color="#808080" 
                                size={25} 
                            />
                        </TouchableOpacity>
                    </View>
                  
                </View>
                {errors.password && (
                        <Text style={styles.errorText}>
                            {errors.password.message}
                        </Text>
                    )}
                <View style={styles.hintContainer}>
                    <Text style={styles.hintText}>
                        Min. 8 characters
                    </Text>
                </View>

                {/* Confirm Password */}
                <View style={styles.formContainer}>
                    <Text style={styles.inputLabel}>Re-enter Password</Text>
                    <View style={styles.inputContainer2}>
                        <Controller
                            control={control}
                            name="confirmPassword"
                            rules={{
                                required: 'Please confirm your password',
                                validate: (value) => 
                                    value === password || 'Passwords do not match'
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    placeholder="Re-enter Password"
                                    placeholderTextColor="#000000"
                                    style={styles.passwordInput}
                                    secureTextEntry={!isConfirmPasswordVisible}
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />
                        <TouchableOpacity onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                            <Icon 
                                source={isConfirmPasswordVisible ? 'eye-off-outline' : 'eye-outline'} 
                                color="#808080" 
                                size={25} 
                            />
                        </TouchableOpacity>
                    </View>
                 
                </View>
                {errors.confirmPassword && (
                        <Text style={styles.errorText}>
                            {errors.confirmPassword.message}
                        </Text>
                    )}
                {/* Continue Button */}
                <TouchableOpacity
                    style={styles.continueButton}
                    onPress={handleSubmit(onSubmit)}
                >
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

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
        width: responsiveWidth(60),
        justifyContent: 'space-between', 
        marginTop: '5%'
    },
    headerTitle: {
        fontSize: responsiveFontSize(2.7), 
        color: colors.brandColor
    },
    titleContainer: {
        width: responsiveWidth(60), 
        marginTop: "15%"
    },
    mainTitle: {
        fontSize: responsiveFontSize(3), 
        color: colors.text
    },
    subtitleContainer: {
        width: responsiveWidth(90), 
        marginTop: "5%"
    },
    subtitleText: {
        fontSize: responsiveFontSize(2.2), 
        color: colors.gray, 
        textAlign: 'center'
    },
    formContainer: {
        marginTop: "7%",
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#808080',
        width: responsiveWidth(85),
    },
    inputLabel: {
        fontSize: responsiveFontSize(1.5), 
        fontFamily: 'Sen-regular', 
        color: colors.gray, 
        alignSelf: 'flex-start'
    },
    inputContainer: {
        justifyContent: 'flex-start',
        borderRadius: 10,
        width: responsiveWidth(87),
        height: responsiveHeight(7),
        flexDirection: "row",
        fontFamily: "Sen-Regular",
        alignItems: 'center'
    },
    dropdown: {
        width: responsiveWidth(25),
        height: 50,
        paddingHorizontal: 8,
        alignItems: 'flex-start',
    },
    phoneInput: {
        width: responsiveWidth(60), 
        justifyContent: 'flex-start', 
        color: '#000000', 
        fontSize: responsiveFontSize(2)
    },
    inputContainer2: {
        height: responsiveHeight(5),
        width: responsiveWidth(87),
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInput: {
        flex: 1,
        fontSize: responsiveFontSize(2),
        color: "#000000",
    },
    hintContainer: {
        width: responsiveWidth(85)
    },
    hintText: {
        color: colors.gray, 
        fontSize: responsiveFontSize(1.5)
    },
    continueButton: {
        height: responsiveHeight(6),
        width: "90%",
        marginTop: '60%',
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
    continueButtonText: {
        fontSize: responsiveFontSize(2),
        color: "#FFFFFF",
    },
    errorText: {
        color: 'red',
        fontSize: responsiveFontSize(1.5),
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    // Dropdown styles (kept from original component)
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});