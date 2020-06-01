console.disableYellowBox = true; 
import React from 'react';
import { View, Button } from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Ajout des modules de navigation 
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './screens/HomeScreen'
import Playlist from './screens/Playlist'
import Search from './screens/Search'


var BottomNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Playlist: Playlist,
  Search:Search
});

export default Navigation = createAppContainer(BottomNavigator);

