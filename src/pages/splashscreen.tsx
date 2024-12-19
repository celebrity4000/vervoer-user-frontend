import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/Routes';
import {
    StyleSheet,
    StatusBar,
    Image,
    View,
} from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { images } from '../assets/images/images';

type SplashscreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

export default function Splashscreen() {
    const navigation = useNavigation<SplashscreenNavigationProp>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Onboarding'); // Replace Splashscreen with Login after 2 seconds
        }, 2000); // 2000 milliseconds = 2 seconds

        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar
                hidden={false}
                barStyle='dark-content'
                animated={true}
                translucent backgroundColor="transparent"
            />
            <View style={{ height: responsiveHeight(60), justifyContent: 'center', width: responsiveWidth(90), alignItems: 'center', marginTop: "12%", zIndex: 2 }}>
                <Image
                    source={images.Logo} // Make sure the logo path is correct
                    style={styles.Logo}
                />
            </View>
            <View style={{ position: 'absolute', right: 0, top: 200, zIndex: 1 }}>
                <Image source={images.Path1}
                    style={{ width: responsiveWidth(50), height: responsiveHeight(29) }}
                />
            </View>
            <View style={{ position: 'absolute', right: 0, top: 400, zIndex: 1 }}>
                <Image source={images.Path2}
                    style={{ width: responsiveWidth(30), height: responsiveHeight(25) }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF', // Orange background color
    },
    Logo: {
        width: '90%',
        height: '15%',
        justifyContent: 'center',

    },
});
