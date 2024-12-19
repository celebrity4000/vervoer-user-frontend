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
import CarRentalSlider from '../../components/CarRentalSlider';
import colors from '../../assets/color';
import { images } from '../../assets/images/images';

export default function MerchantHome() {
    const navigation = useNavigation();
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
                        Merchants - Home
                    </Text>
                </View>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Image source={images.Scanner} style={{ width: responsiveWidth(8), height: responsiveHeight(4) }} />
                    <Text style={{ color: `${colors.text}` }}>Scan QBR</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: responsiveHeight(20) }}>
                <CarRentalSlider />
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
})