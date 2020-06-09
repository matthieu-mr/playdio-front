import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, TouchableHighlight,Swi } from 'react-native';
import { Avatar, Badge, Icon, withBadge, Card, List, ListItem, Image, Header } from 'react-native-elements'
import ListItemSwap, { Separator } from './components/userplaylist';
import  {TextField}  from 'react-native-material-textfield';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default function selectUser(props) {
const [firstName,setFirstName]=useState('')
const [userPlaylist,setUserPlaylist]=useState([])


/* modifier le fetch pour envoiye le nom de la playlist quan elle sera implementer dans l'appli */
useEffect(()=>{
    async function checkUserPlaylist(){
    var requestBDD = await fetch('http://192.168.1.43:3000/userListplaylist')
    var reponse = await requestBDD.json()
    var tableau = [...userPlaylist]
        for(var i= 0 ; i<reponse.userList.userInfo.length;i++){
        tableau.push({id:i,firstName:reponse.userList.userInfo[i].userID.firstName,lastName:reponse.userList.userInfo[i].userID.lastName,avatar:'https://randomuser.me/api/portraits/men/41.jpg',gradeType:reponse.userList.userInfo[i].gradeType,namePlaylist:reponse.userList.name,idUser:reponse.userList.userInfo[i].userID._id,idDelete:reponse.userList.userInfo[i]._id})
        }
        setUserPlaylist(tableau)
    }
    checkUserPlaylist()
},[])










async function userList(){
    var requestBDD = await fetch('http://192.168.1.43:3000/userList',{
        method:"GET",
        body:`firstName=${firstName}`
    })
    var reponse = await requestBDD.json()

}

/* console.log(userPlaylist) */




return (
    <View style={styles.container}>
        <Header
            rightComponent={<Avatar
                rounded source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
            />}
            containerStyle={{
                backgroundColor: '#FFFFFF',
                marginBottom: 0,
                paddingBottom: 0,
                paddingTop: 0

            }}
        />
        <Text> Radio ? users</Text>
        <TextField
        label={'firsname'}
        tintColor="#26a69a"
        onChangeText={(value)=>setFirstName(value)}
        />
        <FlatList
            data={userPlaylist}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <ListItemSwap style={styles.flatList}
                    {...item}
                    
                    
                />
            )}
            ItemSeparatorComponent={() => <Separator />}
        />
    </View>

);

}

const styles = StyleSheet.create({
container: {
    flex: hp('0.5%'),
    backgroundColor: '#fff',
    marginVertical: 0,
    marginBottom: 0,
    marginHorizontal: 0,
    paddingVertical: 0,
},
scrollView: {
    marginBottom: hp('1%'),
    marginHorizontal: hp('2%'),
    paddingVertical: 0,
    marginVertical: hp('6%'),
},

flatList: {
    marginHorizontal: 0,
    marginVertical: 0,
    paddingVertical: 0
},
scrollViewscrollViewMusic: {
    marginHorizontal: 0,
    width: hp('33%'),
    flex: hp('0,33%'), marginLeft: 0, marginRight: 0
},
avatar: {
    flex: hp('0,33%'),
    flexDirection: "row",
    padding: hp('3%'),
    marginRight: hp('3%'),
    marginVertical: 0,
    paddingVertical: 0,
    marginBottom: hp('6%'),
},

card: {
    flex: hp('0,33%'),
    flexDirection: "row",
    padding: hp('3%'),
    marginLeft: hp('3%'),
    marginRight: hp('3%'),

},

});

