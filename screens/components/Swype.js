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

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: hp('1%'),
    paddingVertical: hp('0.2%'),
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

export const Separator = () => <View style={styles.separator} />;

const LeftActions = (progress, dragX, onPress) => {

  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return (
    <View style={styles.leftAction}>
      <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
      Add
      </Animated.Text>
    </View>
  );
};

const RightActions = (progress, dragX, onPress) => {

  const scale = dragX.interpolate({
    inputRange: [-100,0],
    outputRange: [1,0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.rightAction}>
      <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
      Delete
      </Animated.Text>
    </View>
  );
};




const ListItemSwap = ({id, text,name, url, onSwipeFromLeft, onSwipeFromRight}) => (
  <Swipeable
    renderLeftActions={LeftActions}
    onSwipeableLeftOpen={onSwipeFromLeft,id}
  
     renderRightActions={RightActions}
    onSwipeableRightOpen={onSwipeFromRight} 

  >
    <View style={styles.container}>

      <ListItem

      leftAvatar={{ source: { uri:url } }}
      title={name}
      subtitle={text}
      rightElement={<Icon type="entypo" color="#C8C8C8" name="dots-three-vertical" />}
      rightIcon={{ type: 'font-awesome', name: 'heart', color: 'red' }}
     
      />

    </View>
  </Swipeable>
  
);

export default ListItemSwap;