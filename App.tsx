import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
// import  { store } from './src/components/redux/store';
import Parking from './src/pages/Parking';
import QRCode from './src/pages/QRCode';
import LiveSessionScreen from './src/pages/LiveSessionScreen';
import HistoryScreen from './src/pages/HistoryScreen';
import FindParking from './src/pages/FindParking';
import ParkingSlot from './src/pages/ParkingSlot';
import ParkingSpot from './src/pages/ParkingSpot';
import GarageScreen from './src/pages/GarageScreen';
import ParkingSpace from './src/pages/ParkingSpace';
import Confirmation from './src/pages/Confirmation';
import Payment from './src/pages/Payment';
import LotScreen from './src/pages/LotScreen';
import ResidenceScreen from './src/pages/ResidenceScreen';
// Define the parameter list for navigation
export type RootStackParamList = {
  Parking: undefined;
  QRCode: undefined;
  History: undefined;
  LiveSession: undefined;
  FindParking: undefined;
  ParkingSlot: undefined;
  ParkingSpot: undefined;
  GarageScreen: undefined;
  ParkingSpace: undefined;
  Confirmation: undefined;
  Payment: undefined;
  LotScreen: undefined;
  ResidenceScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    // Wrap the entire app with Redux Provider for state management

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Parking" component={Parking} />
        <Stack.Screen name="QRCode" component={QRCode} />
        <Stack.Screen name="LiveSession" component={LiveSessionScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="FindParking" component={FindParking} />
        <Stack.Screen name="ParkingSlot" component={ParkingSlot} />
        <Stack.Screen name="ParkingSpot" component={ParkingSpot} />
        <Stack.Screen name="GarageScreen" component={GarageScreen} />
        <Stack.Screen name="LotScreen" component={LotScreen} />
        <Stack.Screen name="ResidenceScreen" component={ResidenceScreen} />
        <Stack.Screen name="ParkingSpace" component={ParkingSpace} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
