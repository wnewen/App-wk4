import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import Navigation from './src/navigation';

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store from './src/redux/store';
import ActionButton from './src/components/ActionButton';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        {/* <SafeAreaView style={{ flex: 1 }}> */}
          <NativeBaseProvider>
            <Navigation />
          </NativeBaseProvider>
        {/* </SafeAreaView> */}
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;