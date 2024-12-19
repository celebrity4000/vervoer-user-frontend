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
import { images } from '../../assets/images/images';
import colors from '../../assets/color';

import Header from '../../components/Header';
import { RootStackParamList } from '../../../navigator/Routes';

export default function HomePage() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    // const HomePageContent = () => {
    //     return (
    //         <View style={styles.content}>
             
    //         </View>
    //     );
    // };

    return (
        <View style={styles.container}>
            <StatusBar
                hidden={false}
                barStyle='dark-content'
                animated={true}
                backgroundColor="transparent"
            />
         <View style={{ height: responsiveHeight(20), marginTop: '20%' }}>
                    <CarRentalSlider />
                </View>
                <View style={{ alignItems: 'center', marginTop: '5%', width: responsiveWidth(90), height: responsiveHeight(55), justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            navigation.navigate('UserHome')
                        }}
                    >
                        <Image
                            source={images.User}
                            style={{ width: '20%', height: '70%' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image
                            source={images.Driver}
                            style={{ width: '17%', height: '30%' }}
                        />
                        <Text style={styles.buttonText}>Driver</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            navigation.navigate('MerchantHome')
                        }}>
                        <Image
                            source={images.Business}
                            style={{ width: '10%', height: '35%' }}
                        />
                        <Text style={styles.buttonText}>Merchant</Text>
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
    content: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        backgroundColor: `${colors.white}`,
        width: '100%',
        height: '30%',
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
        fontSize: responsiveFontSize(2.5),
        marginTop: '5%',
        color: `${colors.black}`
    }
})