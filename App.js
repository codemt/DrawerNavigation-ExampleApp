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
import ThirdScreen from './app/ThirdScreen';
import VideoLessons from './app/VideoLessons';

const DrawerExample = DrawerNavigator(
    {
        Home : {

              path: '/',
              screen : FirstScreen,
        },
        Piano : {

              path:'/sent',
              screen : SecondScreen,

        },
        Guitar : {

          path:'/sent',
          screen : ThirdScreen,

    },
    KuchtohHai_Piano : {

      path:'/sent',
      screen : VideoLessons,

},


    },
    {
          initialRouteName : 'Home',
          drawerPosition : 'left'

    }

);
export default DrawerExample;


