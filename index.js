/** @format */

import React, {Component} from 'react';
import {AppRegistry, Navigator, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import App from './App';
import HelloWorld from './components/HelloWorld';
import Splash from './components/Splash';
import TextInputDemo from './components/TextInputDemo'
import TouchScreen from './components/TouchScreen'
import TouchScreenDemo2 from './components/TouchScreenDemo2';
import ScrollViewVertical from './components/ScrollViewVertical';
import ViewPagerAndroidDemo from './components/ViewPagerAndroidDemo';
import FlatListDemo from './components/FlatListDemo';
import {name as appName} from './app.json';


// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Splash);
AppRegistry.registerComponent(appName, () => FlatListDemo);
