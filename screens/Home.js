import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Radio from './components/Radio';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Home(props) {

  // DISCOVER
  var discoverRadio = [{name:"Radio Gaga", img:require("../assets/radio_template1.jpg"), musicType:["ROCK","POP"]}, {name:"Radio ZZ", img:require("../assets/radio_template2.jpg"), musicType:["R&B"]}, {name:"Radio F", img:require("../assets/radio_template3.jpg"), musicType:["FUNK"]}, {name:"Radio Xtreme", img:require("../assets/radio_template4.jpg"), musicType:["ELECTRO"]}];
  var discoverRadioList = discoverRadio.map(function(radio, i) {
    return <Radio key={i} radioName={radio.name} img={radio.img} musicType={radio.musicType} navigation={props.navigation}/>;
  })

  // MY RADIOS
  var myRadio = [{name:"New radio", img:require("../assets/plus_image.png"), musicType:[]}, {name:"Radio K", img:require("../assets/radio_template5.jpg"), musicType:["K-POP"]}, {name:"Radio Pop Attitude", img:require("../assets/radio_template6.jpg"), musicType:["POP","RAP"]}, {name:"Radio Fesnoz", img:require("../assets/radio_template7.jpg"), musicType:["ELECTRO"]}];
  var myRadioList = myRadio.map(function(radio, i) {
    return <Radio key={i} radioName={radio.name} img={radio.img} musicType={radio.musicType} navigation={props.navigation}/>;
  })

  // RADIOS OF MY COMMUNITY
  var communityRadio = [{name:"Radio Xtreme", img:require("../assets/radio_template8.jpg"), musicType:["ELECTRO"]}, {name:"Radio FF", img:require("../assets/radio_template9.jpg"), musicType:["FUNK","POP"]}, {name:"Radio Japan", img:require("../assets/radio_template1.jpg"), musicType:["K-POP","POP"]}, {name:"Radio Jazz", img:require("../assets/radio_template2.jpg"), musicType:["JAZZ"]}, {name:"Radio Killer", img:require("../assets/radio_template3.jpg"), musicType:["ELECTRO"]}];
  var communityRadioList = communityRadio.map(function(radio, i) {
    return <Radio key={i} radioName={radio.name} img={radio.img} musicType={radio.musicType} navigation={props.navigation}/>;
  })

  //CALLBACK
  return (
    <View style={styles.homeView}>
      <ScrollView>

        <View style={styles.header}></View>
        <View style={styles.categories}>
          <Text style={styles.categoryTitle}>Discover</Text>
          <Text style={styles.categoryLink}>See all</Text>
        </View>
        <ScrollView horizontal={true}>
          {discoverRadioList}
        </ScrollView>

        <View style={styles.categories}>
          <Text style={styles.categoryTitle}>My radios</Text>
          <Text style={styles.categoryLink}>See all</Text>
        </View>
        <ScrollView horizontal={true}>
          {myRadioList}
        </ScrollView>

        <View style={styles.categories}>
          <Text style={styles.categoryTitle}>Radios of my community</Text>
          <Text style={styles.categoryLink}>See all</Text>
        </View>
        <ScrollView horizontal={true}>
          {communityRadioList}
        </ScrollView>

      </ScrollView>
    </View>
  );
}

// STYLES
const styles = StyleSheet.create({
  homeView: {
    flex:1, 
    alignItems:"center", 
    justifyContent:"flex-start"
  },
  header: {
    height:hp('6%')
  },
  categories: {
    flex:1, 
    flexDirection:"row", 
    justifyContent:"space-between"
  },
  categoryTitle: {
    color:"#383838", 
    fontSize:hp('3%'), 
    width:wp('75%'), 
    marginLeft:wp('7%')
  },
  categoryLink: {
    color:"#00838F", 
    fontSize:hp('2%'), 
    width:wp('25%'), 
    marginTop:hp('1.5%')
  }
})