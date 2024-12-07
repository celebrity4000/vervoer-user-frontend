import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
// import  { store } from './src/components/redux/store'; 
import Onboarding from './src/onboarding';
// Define the parameter list for navigation
export type RootStackParamList = {
  Onboarding: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    // Wrap the entire app with Redux Provider for state management
    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
        
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}

export default App;
