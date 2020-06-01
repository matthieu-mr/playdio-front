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
},
defaultNavigationOptions: ({ navigation }) => ({ // creation des icônes
    tabBarIcon: ({ tintColor }) => {
    var iconName;
    if (navigation.state.routeName == 'Home') {
    iconName = 'ios-information-circle';
    } else if (navigation.state.routeName == 'gallery') {
    iconName = 'ios-photos';
    }else if (navigation.state.routeName == 'snap') {
    iconName = 'ios-camera';
    }
    return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
    }),
        tabBarOptions: {
            activeTintColor: '#009788',        
            inactiveTintColor: '#FFFFFF',
                style: {
                    backgroundColor: '#111224',
    }
    },
    
  );



);

export default Navigation = createAppContainer(BottomNavigator);

