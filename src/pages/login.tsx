import React, { useState } from 'react';
import Icon from 'react-native-paper/src/components/Icon';
import {
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { images } from '../assets/images/images';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../assets/color';
import { RootStackParamList } from '../../navigator/Routes';


export default function Login() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [secureEntry, setSecureEntry] = useState(true);

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: {
            emailOrPhone: '',
            password: '',
        },
        mode: 'onChange',
    });

    const onSubmit = (data: any) => {
        console.log('Form Submitted', data);
        navigation.navigate('HomePage');
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={false} barStyle='dark-content' animated={true} backgroundColor="transparent" />
            <TouchableOpacity 
            onPress={() => {
                navigation.goBack()
            }}
            style={{ width: responsiveWidth(95), marginTop: "5%" }}>
                <Icon source="arrow-left" size={35} color={colors.brandColor} />
            </TouchableOpacity>
            <View style={{ width: responsiveWidth(80), height: responsiveHeight(10), alignItems: 'center', justifyContent: 'center', marginTop: "15%" }}>
                <Image source={images.Logo} style={{ width: "80%", height: "70%" }} />
            </View>

            {/* Email/Phone Input */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>Email</Text>
                <Controller
                    control={control}
                    name="emailOrPhone"
                    rules={{ required: 'Email or phone is required' }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Enter Mobile Number or Email ID"
                            placeholderTextColor="#000000"
                            style={styles.input}
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            keyboardType="email-address"
                        />
                    )}
                />
                {errors.emailOrPhone && <Text style={styles.error}>{errors.emailOrPhone.message}</Text>}
            </View>

            {/* Password Input */}
            <View style={styles.formContainer2}>
                <Text style={styles.label}>Password</Text>
                <Controller
                    control={control}
                    name="password"
                    rules={{ required: 'Password is required' }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer2}>
                            <TextInput
                                placeholder="Enter Password"
                                placeholderTextColor="#000000"
                                style={styles.passwordInput}
                                secureTextEntry={secureEntry}
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange}
                            />
                            <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
                                <Icon source={secureEntry ? 'eye-outline' : 'eye-off-outline'} color="#808080" size={25} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
                {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
            </View>
            <TouchableOpacity style={{ width: responsiveWidth(85), marginTop: "5%" }}
            onPress={ () => {
                navigation.navigate('ForgotPassword')
            }}
            >
                <Text style={{ color: `${colors.brandColor}`, fontSize: responsiveFontSize(2) }}>Forgot Password ?</Text>
            </TouchableOpacity>
            {/* Login Button */}
            <TouchableOpacity
                style={[styles.textWrapper, { backgroundColor: isValid ? "#FF9401" : "#FF9401" }]}
                disabled={!isValid}
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={styles.logButton}>Login</Text>
            </TouchableOpacity>

            {/* Curve Design */}
            <View style={styles.curveDesign}>
                <Image source={images.Curve} style={styles.curveImage} />
            </View>
            <View style={{ marginTop: "7%" }}>
                <Text style={{ color: `${colors.gray}`, fontSize: responsiveFontSize(1.7) }}>Or Login with</Text>
            </View>
            <View style={{ flexDirection: 'row', width: responsiveWidth(60), height: responsiveHeight(6), justifyContent: 'space-evenly', marginTop: "5%" }}>
                <TouchableOpacity style={{ width: "25%" }}>
                    <Image
                        source={images.Google}
                        style={{ width: "85%", height: "100%" }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "25%" }}>
                    <Image
                        source={images.Facebook}
                        style={{ width: "85%", height: "100%" }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "25%" }}>
                    <Image
                        source={images.Apple}
                        style={{ width: "85%", height: "100%" }}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Signup')}
                style={styles.getStarted}
            >
                <Text style={styles.getStartedText}>Sign Up</Text>
                <Icon source="greater-than" size={20} color="#FFFFFF" />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    label: {
        fontSize: responsiveFontSize(1.5),
        fontFamily: 'Sen-regular',
        color: colors.gray,
        alignSelf: 'flex-start',
    },
    formContainer: {
        marginTop: "20%",
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#808080',
        width: responsiveWidth(85),
    },
    input: {
        fontSize: responsiveFontSize(2),
        width: responsiveWidth(87),
    },
    formContainer2: {
        marginTop: "7%",
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#808080',
        width: responsiveWidth(85),
    },
    inputContainer2: {
        height: responsiveHeight(7),
        width: responsiveWidth(87),
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInput: {
        flex: 1,
        fontSize: responsiveFontSize(2),
        color: "#000000",
    },
    textWrapper: {
        height: responsiveHeight(6),
        width: "85%",
        marginTop: '10%',
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
    logButton: {
        fontSize: responsiveFontSize(2),
        color: "#FFFFFF",
    },
    error: {
        color: 'red',
        fontSize: responsiveFontSize(1.5),
        alignSelf: 'flex-start',
    },
    curveDesign: {
        width: responsiveWidth(100),
        alignSelf: 'flex-end',
        height: responsiveHeight(30),
        position: 'absolute',
        bottom: -1,
        zIndex: 0,
    },
    curveImage: {
        width: "100%",
        height: '100%',
        resizeMode: 'contain',
    },
    getStarted: {
        flexDirection: 'row',
        zIndex: 3,
        marginTop: '20%',
        marginLeft: "65%",
        alignItems: 'center',
    },
    getStartedText: {
        fontSize: responsiveFontSize(2),
        color: colors.white,
    },
});
