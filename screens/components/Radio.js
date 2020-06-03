import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { Badge } from 'native-base';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Radio(props) {

  // BADGES
  var badgeList = props.musicType.map((type,i) => {
    return (
      <Badge
        key={i}
        style={{ backgroundColor:'#00838F', padding:hp('0%'), marginRight:wp('1%')}}
      >
        <Text style={{color: "white", fontSize:hp('1.5%'), marginLeft:wp('1%'), marginRight:wp('1%'), marginBottom:hp('0%'), marginTop:hp('0.9%'), padding:hp('0%')}}>{type}</Text>
      </Badge>
    )
  })

  // CALLBACK & CARDS & Playlist 
  let urlLien = props.url[0]
  let conv = urlLien.toString() 
        console.log("mon url",urlLien); 

  return (
    <View style={{flex:1, justifyContent:"center"}}>
      <TouchableOpacity onPress={(urlLien) => props.navigation.navigate(props.url)      }>
        <Card 
            containerStyle={{width:wp('28%'), height:hp('15%'), marginLeft:wp('7%'), marginRight:wp('0%'), marginTop:hp('3%'), marginBottom:hp('0%'), borderRadius:hp('1%'), elevation:hp('3%'), shadowOffset: { width:wp('3%'), height:hp('3%') }, shadowColor: "grey", shadowOpacity: 1, shadowRadius:hp('7%')}}
            image={props.img}
            imageProps={{ style: {width:wp('28%'), height:hp('10%')} }}
            >
            <Text style={{width:wp('28%'), height:hp('5%'), fontSize:hp('2%'), color:"#383838"}}>{props.radioName}</Text>
        </Card>
      </TouchableOpacity>
      <View style={{flex:1, flexDirection:"row", justifyContent:"flex-start", marginTop:hp('1%'), marginLeft:wp('7%'), marginBottom:hp('7%')}}>
        {badgeList}
      </View>
    </View>
  );
}
