import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Radio from './components/Radio';

export default function Home(props) {

  // DISCOVER
  var discoverRadio = [{name:"Radio Gaga", img:require("../assets/radio_template1.jpg"), musicType:["ROCK","POP"], url:"Playlist"}, {name:"Radio ZZ", img:require("../assets/radio_template2.jpg"), musicType:["R&B"], url:"Playlist"}, {name:"Radio F", img:require("../assets/radio_template3.jpg"), musicType:["FUNK"], url:"Playlist"}, {name:"Radio Xtreme", img:require("../assets/radio_template4.jpg"), musicType:["ELECTRO"], url:"Playlist"}];
  var discoverRadioList = discoverRadio.map(function(radio, i) {
    return <Radio key={i} radioName={radio.name} img={radio.img} musicType={radio.musicType} navigation={props.navigation} url={radio.url}/>;
  })

  // MY RADIOS
  var myRadio = [{name:"New radio", img:require("../assets/plus_image.png"), musicType:["addRadio"], url:'AddRadio2'}, {name:"Radio K", img:require("../assets/radio_template5.jpg"), musicType:["K-POP"], url:'Playlist'}, {name:"Radio Pop Attitude", img:require("../assets/radio_template6.jpg"), musicType:["POP","RAP"], url:"Playlist"}, {name:"Radio Fesnoz", img:require("../assets/radio_template7.jpg"), musicType:["ELECTRO"], url:"Playlist"}];
  var myRadioList = myRadio.map(function(radio, i) {
    return <Radio key={i} radioName={radio.name} img={radio.img} musicType={radio.musicType} navigation={props.navigation} url={radio.url}/>;
  })

  // RADIOS OF MY COMMUNITY
  var communityRadio = [{name:"Radio Xtreme", img:require("../assets/radio_template8.jpg"), musicType:["ELECTRO"], url:"Playlist"}, {name:"Radio FF", img:require("../assets/radio_template9.jpg"), musicType:["FUNK","POP"], url:"Playlist"}, {name:"Radio Japan", img:require("../assets/radio_template1.jpg"), musicType:["K-POP","POP"], url:"Playlist"}, {name:"Radio Jazz", img:require("../assets/radio_template2.jpg"), musicType:["JAZZ"], url:"Playlist"}, {name:"Radio Killer", img:require("../assets/radio_template3.jpg"), musicType:["ELECTRO"], url:"Playlist"}];
  var communityRadioList = communityRadio.map(function(radio, i) {
    return <Radio key={i} radioName={radio.name} img={radio.img} musicType={radio.musicType} navigation={props.navigation} url={radio.url}/>;
  })

  //CALLBACK
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"flex-start"}}>
      <ScrollView>

        <View style={{height:25}}></View>
        <View style={{flex:1, flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={{color:"#383838", fontSize:18, width:"73%", marginLeft:20}}>Discover</Text>
          <Text style={{color:"#00838F", fontSize:15, width:"27%", marginTop:8}}>See all</Text>
        </View>
        <ScrollView style={{margin:0}} horizontal={true}>
          {discoverRadioList}
        </ScrollView>

        <View style={{flex:1, flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={{color:"#383838", fontSize:18, width:"73%", marginLeft:20}}>My Radios</Text>
          <Text style={{color:"#00838F", fontSize:15, width:"27%", marginTop:8}}>See all</Text>
        </View>
        <ScrollView horizontal={true}>
          {myRadioList}
        </ScrollView>

        <View style={{flex:1, flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={{color:"#383838", fontSize:18, width:"73%", marginLeft:20}}>Radios of My Community</Text>
          <Text style={{color:"#00838F", fontSize:15, width:"27%", marginTop:8}}>See all</Text>
        </View>
        <ScrollView horizontal={true}>
          {communityRadioList}
        </ScrollView>

      </ScrollView>
    </View>
  );
}
