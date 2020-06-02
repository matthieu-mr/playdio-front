import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, Badge } from 'react-native-elements';

export default function Radio(props) {

  var typeList = ["ROCK", "FUNK"]
  var badgeList = typeList.map((type,i) => {
    return (
      <Badge
        key={i}
        containerStyle={{marginLeft:1, marginRight:1}}
        value={type}
        textStyle={{fontSize:10, marginLeft:3, marginRight:3}}
        status="primary">
      </Badge>
    )
  })

  return (
    <View style={{flex:1, justifyContent:"center"}}>
      <Card containerStyle={{width: 100, height: 100, borderRadius:3, shadowOpacity:1, padding: 0}}
          image={require('../../assets/radio_template.jpg')}
          imageProps={{ style: {width: 100, height: 65} }}
          >
          <Text style={{width:100, height:35, fontSize:13, color:"#383838"}}>{props.radioName}</Text>
      </Card>
      <View style={{flex:1, flexDirection:"row", justifyContent:"flex-start", marginTop:10, marginLeft:15}}>
        {badgeList}
      </View>
    </View>
  );
}
