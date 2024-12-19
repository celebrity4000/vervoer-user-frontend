import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import all your screens
import Splashscreen from '../src/pages/splashscreen';
import Onboarding from '../src/pages/onboarding';
import Login from '../src/pages/login';
import Signup from '../src/pages/signup';
import OTP from '../src/pages/OTP';
import OTPSuccess from '../src/pages/OTPSuccess';
import PersonalInfo from '../src/pages/PersonalInfo';
import EmailOTP from '../src/pages/EmailOTP';
import EmailOTPSuccess from '../src/pages/EmailOTPSuccess';
import ForgotPassword from '../src/pages/ForgotPassword';
import ForgotSuccess from '../src/pages/ForgotSuccess';
import HomePage from '../src/pages/Home/HomePage';
import UserHome from '../src/pages/Home/UserHome';
import MerchantHome from '../src/pages/Home/MerchantHome';
import { View } from 'react-native';
import Header from '../src/components/Header';
import Parking from '../src/pages/Parking/Parking';
import FindParking from '../src/pages/Parking/FindParking';
import QRCode from '../src/pages/Parking/QRCode';
import LiveSessionScreen from '../src/pages/Parking/LiveSessionScreen';
import HistoryScreen from '../src/pages/Parking/HistoryScreen';
import ParkingSlot from '../src/pages/Parking/ParkingSlot';
import ParkingSpot from '../src/pages/Parking/ParkingSpot';
import ParkingSpace from '../src/pages/Parking/ParkingSpace';
import GarageScreen from '../src/pages/Parking/GarageScreen';
import Confirmation from '../src/pages/Parking/Confirmation';
import Payment from '../src/pages/Payment';

export type RootStackParamList = {
    Splash: undefined;
    Onboarding: undefined;
    Login: undefined;
    Signup: undefined;
    OTP: undefined;
    OTPSuccess: undefined;
    PersonalInfo: undefined;
    EmailOTP: undefined;
    EmailOTPSuccess: undefined;
    ForgotPassword: undefined;
    ForgotSuccess: undefined;
    HomePage: undefined;
    UserHome: undefined;
    MerchantHome: undefined;
    Parking: undefined;
    FindParking: undefined;
    QRCode: undefined;
    LiveSession: undefined;
    History: undefined;
    ParkingSlot: undefined;
    ParkingSpot: undefined;
    ParkingSpace: undefined;
    GarageScreen: undefined;
    Confirmation: undefined;
    Payment: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const PostVerificationStack = () => (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splashscreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="OTPSuccess" component={OTPSuccess} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen name="EmailOTP" component={EmailOTP} />
        <Stack.Screen name="EmailOTPSuccess" component={EmailOTPSuccess} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ForgotSuccess" component={ForgotSuccess} />
    </Stack.Navigator>
);

const PostAuthStack = () => (
    <View style={{ flex: 1}}> 
    <View>
        <Header />
        </View>
        <View style={{flex: 1}}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="UserHome" component={UserHome} />
                <Stack.Screen name="MerchantHome" component={MerchantHome} />
                <Stack.Screen name="Parking" component={Parking} />
                <Stack.Screen name="FindParking" component={FindParking} />
                <Stack.Screen name="ParkingSlot" component={ParkingSlot} />
                <Stack.Screen name="ParkingSpot" component={ParkingSpot} />
                <Stack.Screen name="ParkingSpace" component={ParkingSpace} />
                <Stack.Screen name="GarageScreen" component={GarageScreen} />
                <Stack.Screen name="QRCode" component={QRCode} />
                <Stack.Screen name="LiveSession" component={LiveSessionScreen} />
                <Stack.Screen name="Confirmation" component={Confirmation} />
                <Stack.Screen name="History" component={HistoryScreen} />
                <Stack.Screen name="Payment" component={Payment} />
            </Stack.Navigator>
        </View>
    </View>
);

const Routes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true); // Example state for demo purposes.

    return (
        <NavigationContainer>
            {isAuthenticated ? <PostAuthStack /> : <PostVerificationStack />}
        </NavigationContainer>
    );
};

export default Routes;
