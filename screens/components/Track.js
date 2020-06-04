import React from 'react';
import { Avatar, Badge, Icon, withBadge,Card, ListItem, Image } from 'react-native-elements'
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: "#C8C8C8",
  },
  text: {
    color: '#4a4a4a',
    fontSize: 15,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#e4e4e4',
    marginLeft: 10,
  },
 
  actionText: {
    color: '#fff',
    fontWeight: '600',
    padding: 20,
  },
});

export const Separator = () => <View style={styles.separator} />;



const Track = ({id, text,name, url}) => (
    <View style={styles.container}>

      <ListItem

        leftElement={<Image
        style={{width: 40, height: 40}}
        source={{uri: 'https://img.cdandlp.com/2019/01/imgL/119431391.jpg'}}
      />}
      title='Stevie Wonder'
      subtitle='Superstition'
      rightIcon={{ type: 'font-awesome', name: 'play', color: 'black' }}
     
      />

    </View>
  
);

export default Track;