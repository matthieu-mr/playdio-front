console.disableYellowBox = true; 
import React from 'react';
import { View, Button } from 'react-native';
import {createAppContainer } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


// library icon
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Ajout des modules de navigation 
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';


import * as AuthSession from 'expo-auth-session';


import ConnectAPP from './screens/connect'
import SignUp from './screens/signUp'
import getTokens from './screens/components/getTokens'
import Home from './screens/Home';
import Playlist from './screens/Playlist';
import Search from './screens/Search';
import Play from './screens/Play';
import AddRadio1 from './screens/CreateRadioStep1'
import AddRadioGetSpotify from './screens/CreateRadioFromSpotify'
import AddRadioEmpty from './screens/CreateRadioEmpty'
import SearchResult from './screens/components/SearchResult'


import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import email from './reducers/email'
import PlaylistAdd from './reducers/playlist'

/* import { forNoAnimation } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/CardStyleInterpolators'; */
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { heightPercentageToDP } from 'react-native-responsive-screen';


//const store = createStore(combineReducers({wishList, token, selectedLang}))

const store = createStore(combineReducers({email,PlaylistAdd}))

var BottomNavigator = createBottomTabNavigator({ // Creation du menu bottom avec les liens
  Home: Home,
  Playlist: Playlist,
  Search: Search,
  'Play (Test)': Play
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

      } else if (navigation.state.routeName == 'Search') {
      iconName = 'ios-search';
      return <Ionicons name={iconName} size={25} color={tintColor} />;

      } else if (navigation.state.routeName == 'Play (Test)') {
      iconName = 'ios-play';
      return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
   // return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
      tabBarOptions: {
          activeTintColor: '#FFFFFF',        
          inactiveTintColor: '#FFFFFF',
          style: {
              backgroundColor: '#00838F'
  }
  },
  }
  );

  
StackNavigator = createStackNavigator({
  Connect:ConnectAPP,
  SignUp:SignUp,
  getTokens:getTokens,
  Playlist: Playlist,
  Play:Play,
 AddRadio : AddRadio1,
 AddRadioGetSpotify : AddRadioGetSpotify,
 AddRadioEmpty:AddRadioEmpty,
 SearchResult:SearchResult,
  BottomNavigator:BottomNavigator
}, 
{ 
  headerMode: 'none' 
})

const Navigation = createAppContainer(StackNavigator)


export default function App(){
  return(
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
} ;

