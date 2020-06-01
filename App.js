console.disableYellowBox = true; 
import React from 'react';
import { View, Button } from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// library icon
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Ajout des modules de navigation 
import {createBottomTabNavigator} from 'react-navigation-tabs';


import HomeScreen from './screens/HomeScreen'
import Playlist from './screens/Playlist'
import Search from './screens/Search'



var BottomNavigator = createBottomTabNavigator({ // Creation du menu bottom avec les liens
  Home: HomeScreen,
  Playlist: Playlist,
  Search:Search
  
  },
  {
  defaultNavigationOptions: ({ navigation }) => ({ // creation des icônes
  tabBarIcon: ({ tintColor }) => {
  var iconName;
    if (navigation.state.routeName == 'Home') {
      iconName = 'ios-information-circle';
      return <SimpleLineIcons name="home" size={25} color={tintColor} />;

      } else if (navigation.state.routeName == 'Playlist') {
      iconName = 'radio';
      return <MaterialCommunityIcons name="radio" size={24} color={tintColor} />

      }else if (navigation.state.routeName == 'Search') {
      iconName = 'ios-search';
      return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
   // return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
      tabBarOptions: {
          activeTintColor: '#FFFFFF',        
          inactiveTintColor: '#FFFFFF',
              style: {
                  backgroundColor: '#00838F',
  }
  },
  }
  );

  



export default Navigation = createAppContainer(BottomNavigator);

