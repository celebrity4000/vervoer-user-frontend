import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Routes from './navigator/Routes';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Routes />
    </GestureHandlerRootView>
  );
}

export default App;
