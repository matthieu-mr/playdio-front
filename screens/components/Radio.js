import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, Badge } from 'react-native-elements';

export default function Radio(props) {

  // BADGES
  var badgeList = props.musicType.map((type,i) => {
    return (
      <Badge
        key={i}
        containerStyle={{marginLeft:1, marginRight:1}}
        value={type}
        textStyle={{fontSize:7, marginLeft:3, marginRight:3}}
        status="primary">
      </Badge>
    )
  })

  // CALLBACK & CARDS
  return (
    <View style={{flex:1, justifyContent:"center"}}>
      <Card 
          containerStyle={{width: 75, height: 75, marginLeft:15, marginRight:0, marginTop:8, marginBottom:0, borderRadius:3, elevation:8, shadowOffset: { width: 10, height: 10 }, shadowColor: "grey", shadowOpacity: 1, shadowRadius: 20}}
          image={require('../../assets/radio_template.jpg')}
          imageProps={{ style: {width: 75, height: 50} }}
          >
          <Text style={{width:75, height:25, fontSize:8, color:"#383838"}}>{props.radioName}</Text>
      </Card>
      <View style={{flex:1, flexDirection:"row", justifyContent:"flex-start", marginTop:5, marginLeft:15, marginBottom:0}}>
        {badgeList}
      </View>
    </View>
  );
}
