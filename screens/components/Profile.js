import React from 'react';
import { Avatar, Badge, Icon, withBadge,Card, ListItem, Image } from 'react-native-elements'
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: hp('20%'),
    paddingVertical: hp('0.03%'),
    borderWidth: hp('0.01%'),
    borderColor: "#C8C8C8",
  },
  text: {
    color: '#4a4a4a',
    fontSize: hp('5%'),
  },
  separator: {
    flex: hp('0,3%'),
    height: hp('0,3%'),
    backgroundColor: '#e4e4e4',
    marginLeft: hp('3%'),
  },
 
  actionText: {
    color: '#fff',
    fontWeight: '600',
    padding: hp('6,5%'),
  },
  listItem: {
    height:hp('10%'),
    paddingTop:hp('0%'),
    paddingBottom:hp('0%'),
    paddingHorizontal: hp('0%'),
    paddingVertical: hp('2%'),
    marginLeft: hp('35%'),
    marginTop: hp('2%'),
  },
  title: {
    fontSize:hp('2.2%'),
    fontWeight: "bold",
    color:"#3a3a3a"
  },
  subtitle: {
    fontSize:hp('2%'),
    color:"#3a3a3a"
  }

});

export const Separator = () => <View style={styles.separator} />;

const Profile = ({id, text,name, url}) => (
    <View style={styles.container}>

      <ListItem
        containerStyle={styles.listItem}
        rightAvatar={<Avatar
        style={{width: 40, height: 40}}
        rounded source={{uri: 'https://randomuser.me/api/portraits/men/41.jpg'}}
      />}
     
      />

    </View>
  
);

export default Profile;