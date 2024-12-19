import React from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import Swiper from 'react-native-swiper';
import colors from '../assets/color';

const { width: screenWidth } = Dimensions.get('window');

const SwiperComponent = () => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      loop={true}
      autoplay={true}
      autoplayTimeout={3}
      activeDotColor='#F99026'
    >
      <View style={styles.slide}>
        <Text style={styles.text}>Rides, Parking,</Text>
        <Text style={styles.text}>Dry Cleaning</Text>
        <Text style={styles.text}>in an Instant!</Text>
      </View>
      <View style={styles.slide}>
      <Text style={styles.text}>Car, Parking</Text>
      </View>
      <View style={styles.slide}>
      <Text style={styles.text}>User, Parking</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {

  },
  slide: {
    flex: 1,
    width: responsiveWidth(70),
    alignItems: 'flex-start',
    backgroundColor: `${colors.white}`, // Add a background color or image if needed
  },
  text: {
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
    color: `${colors.text}`
  },
});

export default SwiperComponent;
