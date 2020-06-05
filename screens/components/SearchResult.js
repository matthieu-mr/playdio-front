import React from 'react';
import { Avatar, Badge, Icon, withBadge,Card, ListItem } from 'react-native-elements'
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
// import Swipeable from 'react-native-gesture-handler/Swipeable';
// import { GestureHandler } from 'expo';
// const { Swipeable } = GestureHandler;
import {connect} from 'react-redux';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: hp('1%'),
    paddingVertical: hp('0.0001%'),
  },
  text: {
    color: '#4a4a4a',
    fontSize: hp('5%'),
  },
  separator: {
    flex: hp('0.3%'),
    height: hp('0.1%'),
    backgroundColor: '#e4e4e4',
    marginLeft: hp('3%'),
  },
  leftAction: {
    backgroundColor: '#388e3c',
    justifyContent: 'center',
    flex: hp('0.3%'),
    
  },
  rightAction: {
    backgroundColor: '#dd2c00',
    justifyContent: 'center',
    flex: hp('0.3%'),
    alignItems: 'flex-end',
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
    padding: hp('7%'),
  },
});

function SearchResultComponent(props) {

  let validPlaylist = (idPlaylistItem)=>{  
    props.addplaylist(idPlaylistItem)
    props.navigation.navigate('AddRadioEmpty')

}

  return (
   
      <View style={styles.container}>
        <ListItem
          leftAvatar={{ source: { uri:props.url } }}
          title={props.name}
          subtitle={props.text}
          onPress={()=>{validPlaylist(props.spotifyId)}} 
        />
      </View>

  )
}


export const Separator = (props) => <View style={styles.separator} />;





function mapDispatchToProps(dispatch) {
  return {
    addplaylist: function(info) { 
      dispatch( {type: 'addInfoPlaylistSpotify',info }) 
    }
  }
}

export default connect(
    null, 
    mapDispatchToProps
)(SearchResultComponent);


//export default SearchResultComponent;