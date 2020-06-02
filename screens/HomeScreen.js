import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Radio from './components/Radio';

export default function App() {

  var discoverRadio = [{name:"Radio Gaga", musicType:["ROCK","POP"]}, {name:"Radio ZZ", musicType:["R&B"]}, {name:"Radio F", musicType:["FUNK"]}, {name:"Radio Xtreme", musicType:["ELECTRO"]}];
  var discoverRadioList = discoverRadio.map(function(radio, i) {
    return <Radio radioName={radio.name} musicType={radio.musicType} key={i}/>;
  })

  var myRadio = [{name:"", musicType:[]}, {name:"Radio K", musicType:["K-POP"]}, {name:"Radio Jazz", musicType:["JAZZ"]}, {name:"Radio Xtreme", musicType:["ELECTRO"]}];
  var myRadioList = myRadio.map(function(radio, i) {
    return <Radio radioName={radio.name} musicType={radio.musicType} key={i}/>;
  })

  var communityRadio = [{name:"Radio Xtreme", musicType:["ELECTRO"]}, {name:"Radio F", musicType:["FUNK"]}, {name:"Radio K", musicType:["K-POP"]}, {name:"Radio Jazz", musicType:["JAZZ"]}, {name:"Radio Xtreme", musicType:["ELECTRO"]}];
  var communityRadioList = communityRadio.map(function(radio, i) {
    return <Radio radioName={radio.name} musicType={radio.musicType} key={i}/>;
  })

  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"flex-start"}}>
      <Text style={{textAlign:"left", width:"100%", marginLeft:30}}> </Text>
      <Text style={{textAlign:"left", width:"100%", marginLeft:30}}>Discover</Text>
      <ScrollView style={{margin:0}} horizontal={true}>
        {discoverRadioList}
      </ScrollView>
      <Text style={{textAlign:"left", width:"100%", marginLeft:30}}>My Radios</Text>
      <ScrollView horizontal={true}>
        {myRadioList}
      </ScrollView>
      <Text style={{textAlign:"left", width:"100%", marginLeft:30}}>Radios of my Community</Text>
      <ScrollView horizontal={true}>
        {communityRadioList}
      </ScrollView>
    </View>
  );
}
