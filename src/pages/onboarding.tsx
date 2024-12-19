import React, { useEffect, useState } from 'react';
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
import { images } from '../assets/images/images';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../assets/color';
import CarouselComponent from '../components/CarouselComponent';
import { RootStackParamList } from '../../navigator/Routes';

export default function Onboarding() {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
useEffect(() => {
 setTimeout( () => {
  navigation.navigate('Login')
 }, 10000) 
}, [])

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} barStyle='dark-content' animated={true} backgroundColor="transparent" />
      {/* VLOGO */}
      <View style={{ width: responsiveWidth(50), alignSelf: 'flex-start', marginTop: "10%", height: responsiveHeight(20), marginLeft: '7%', }}>
        <Image
          source={images.Vlogo}
          style={{ width: '60%', height: '100%' }}
        />
      </View>
      {/* TEXT */}
      <View style={{ height: responsiveHeight(20), width: responsiveWidth(60), alignSelf: 'flex-start', marginLeft: '10%'}}>
        <CarouselComponent />
      </View>
      {/* Car.png */}
      <View style={{ height: responsiveHeight(35), width: responsiveWidth(100) }} >
        <Image
          source={images.Car}
          style={{ width: "100%", height: '100%' }}
        />
      </View>
      {/* Curve Design */}
      <View style={{ width: responsiveWidth(100), alignSelf: 'flex-end', height: responsiveHeight(30), position: 'absolute', bottom: -1, zIndex: 2 }}>
        <Image
          source={images.Curve}
          style={{ width: "100%", height: '100%', resizeMode: 'contain' }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login')
        }}
        style={{ flexDirection: 'row', zIndex: 3, marginTop: '27%', marginLeft: "65%", alignItems: 'center' }}>
        <View >
          <Text style={{ fontSize: responsiveFontSize(2), color: `${colors.white}` }}>Get Started</Text>
        </View>
        <Icon source="greater-than" size={20} color='#FFFFFF' />
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
  Text: {
    fontSize: responsiveFontSize(4.5),
    color: `${colors.text}`
  }

})