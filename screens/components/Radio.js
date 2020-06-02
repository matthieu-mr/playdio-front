import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, Badge } from 'react-native-elements';

export default function Radio() {
  return (
    <View style={{height:100, width:200}}>
        <Card 
            image={require('../../assets/radio_template.jpg')}>
            <Text>Radio Gaga</Text>
        </Card>
        <Badge 
            containerStyle={{flex:1, justifyContent:'flex-start', marginTop:10}}
            value={<Text style={{color:"white", marginLeft:15, marginRight:15, marginTop:10, marginBottom:10}}>rock</Text>}
            status="primary">
        </Badge>
    </View>
  );
}
