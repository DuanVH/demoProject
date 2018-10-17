/** @format */

import React, {Component} from 'react';
import {AppRegistry, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation';

import App from './App';
import HelloWorld from './components/HelloWorld';
import Splash from './components/Splash';
import TextInputDemo from './components/TextInputDemo'
import TouchScreen from './components/TouchScreen'
import TouchScreenDemo2 from './components/TouchScreenDemo2';
import ScrollViewVertical from './components/ScrollViewVertical';
import ViewPagerAndroidDemo from './components/ViewPagerAndroidDemo';
import FlatListDemo from './components/FlatListDemo';
import FlatListHorizontal from './components/FlatListHorizontal';
import SectionListDemo from './components/SectionListDemo';
import LifeCycleComponent from './components/LifeCycleComponent';
import GetRequestAPI from './components/GetRequestAPI';
import MainComponent from './stacknavigation/MainComponent';
import DetailComponent from './stacknavigation/DetailComponent';
import ThirdScreenComponent from './stacknavigation/ThirdScreenComponent';
import {MainScreen, DetailScreen, ThirdScreen} from "./stacknavigation/screenNames";

const appDemo = createStackNavigator({
    MainScreen: {
        screen: MainComponent,
        // Tu custom
        // navigationOptions: {
        //     headerTitle: "Main",
        // },
    },
    DetailScreen: {
        screen: DetailComponent,
        // navigationOptions: {
        //     headerTitle: 'Detail',
        // },
    },
    ThirdScreen: {
        screen: ThirdScreenComponent,
        // navigationOptions: {
        //     headerTitle: "Third",
        // },
    },
});

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => appDemo);
