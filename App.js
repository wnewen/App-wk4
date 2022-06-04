import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import Navigation from './src/navigation';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from "@reduxjs/toolkit";

const App = () => {
  return (
    //<Provider store={store}>
      <SafeAreaProvider>
        {/* <SafeAreaView style={{ flex: 1 }}> */}
          <NativeBaseProvider>
            <Navigation />
          </NativeBaseProvider>
        {/* </SafeAreaView> */}
      </SafeAreaProvider>
    //</Provider>
  );
}

export default App;