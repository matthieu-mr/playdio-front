import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { Badge } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Radio(props) {

  // BADGES
  var badgeList = props.musicType.map((type,i) => {
    return (
      <Badge
        key={i}
        style={styles.badge}
      >
        <Text style={styles.badgeText}>{type}</Text>
      </Badge>
    )
  })

  // CALLBACK & CARDS
  return (
    <View style={{flex:1, justifyContent:"center"}}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Playlist')}>
        <Card 
            containerStyle={styles.cardContainer}
            image={props.img}
            imageProps={{style: styles.cardImage}}
            >
            <Text style={styles.cardText}>{props.radioName}</Text>
        </Card>
      </TouchableOpacity>
      <View style={styles.badgeContainer}>
        {badgeList}
      </View>
    </View>
  );
}

// STYLES
const styles = StyleSheet.create({
  badge: {
    backgroundColor:'#00838F',
    padding:hp('0%'),
    marginRight:wp('1%')
  },
  badgeText: {
    color:"white", 
    fontSize:hp('1.5%'), 
    marginLeft:wp('1%'), 
    marginRight:wp('1%'), 
    marginBottom:hp('0%'), 
    marginTop:hp('0%'), 
    padding:hp('0%')
  },
  cardContainer: {
    width:wp('28%'), 
    height:hp('15%'), 
    marginLeft:wp('7%'), 
    marginRight:wp('0%'), 
    marginTop:hp('3%'), 
    marginBottom:hp('0%'), 
    borderRadius:hp('1%'), 
    elevation:hp('3%'), 
    shadowOffset:{
      width:wp('3%'), 
      height:hp('3%') 
    }, 
    shadowColor: "grey", 
    shadowOpacity: 1, 
    shadowRadius:hp('7%')
  },
  cardImage: {
    width:wp('28%'), 
    height:hp('10%')
  }, 
  cardText: {
    width:wp('28%'), 
    height:hp('5%'), 
    fontSize:hp('2%'),
    color:"#383838"
  }, 
  badgeContainer: {
    flex:1, 
    flexDirection:"row", 
    justifyContent:"flex-start", 
    marginTop:hp('1%'), 
    marginLeft:wp('7%'), 
    marginBottom:hp('7%')
  }
})