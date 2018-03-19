/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import FirstScreen from './app/FirstScreen';
import SecondScreen from './app/SecondScreen';

const DrawerExample = DrawerNavigator(
    {
        First : {

              path: '/',
              screen : FirstScreen,
        },
        Second : {

              path:'/sent',
              screen : SecondScreen,

        },


    },
    {
          initialRouteName : 'First',
          drawerPosition : 'left'

    }

);
export default DrawerExample;


