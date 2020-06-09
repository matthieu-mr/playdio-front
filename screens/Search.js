import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Badge, Icon, withBadge,Card,List,ListItem, Image, Header } from 'react-native-elements'

export default function App() {
  return (
    <View>
    <Header
  centerComponent={{ text: 'Playdio', style: { color: '#00838F' } }}
  rightComponent={<Avatar
        rounded source={{uri: 'https://randomuser.me/api/portraits/men/41.jpg'}}
      />}
      containerStyle={{
    backgroundColor: 'white',
  }}
/>
      <Text>welcome search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});