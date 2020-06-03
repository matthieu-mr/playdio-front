import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { Badge } from 'native-base';

export default function Radio(props) {

  // BADGES
  var badgeList = props.musicType.map((type,i) => {
    return (
      <Badge
        key={i}
        style={{ backgroundColor:'#00838F', padding:0, marginRight:3}}
      >
        <Text style={{color: "white", fontSize:10, marginLeft:3, marginRight:3, marginBottom:0, marginTop:5, padding:0}}>{type}</Text>
      </Badge>
    )
  })

  // CALLBACK & CARDS & Playlist 
  let urlLien = props.url[0]
  let conv = urlLien.toString() 
        console.log("mon url",urlLien); 

  return (
    <TouchableOpacity onPress={(urlLien) => props.navigation.navigate(props.url)      }>
        <View style={{flex:1, justifyContent:"center"}}>
          
            <Card 
                containerStyle={{width: 150, height: 150, marginLeft:20, marginRight:0, marginTop:8, marginBottom:0, borderRadius:3, elevation:8, shadowOffset: { width: 10, height: 10 }, shadowColor: "grey", shadowOpacity: 1, shadowRadius: 20}}
                image={props.img}
                imageProps={{ style: {width: 150, height: 100} }}
                >
                <Text style={{width:150, height:50, fontSize:15, color:"#383838"}}>{props.radioName}</Text>
            </Card>
        
          <View style={{flex:1, flexDirection:"row", justifyContent:"flex-start", marginTop:7, marginLeft:20, marginBottom:20}}>
            {badgeList}
          </View>
        </View>
    </TouchableOpacity>
  );
}
