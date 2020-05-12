/**
 * @format
 */
import React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from '@jouwal/core';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';

const WrappedApp = () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => WrappedApp);
