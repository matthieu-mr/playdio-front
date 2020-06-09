import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, TouchableHighlight } from 'react-native';
import { Avatar, Badge, Icon, withBadge, Card, List, ListItem, Image, Header } from 'react-native-elements'
import ListItemSwap, { Separator } from './components/userplaylist';
import  {TextField}  from 'react-native-material-textfield';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default function selectUser(props) {
/* const [listUser,setListUser]=useEffect() ;  */
/* const [firstName,setFirstName]=useState('') */
const [userPlaylist,setUserPlaylist]=useState([])


useEffect(()=>{
    checkUserPlaylist()
},[])
async function checkUserPlaylist(){
    var requestBDD = await fetch('http://192.168.1.43:3000/userListplaylist')
    var reponse = await requestBDD.json()
    setUserPlaylist(reponse.userList)

    }
var user = []

userPlaylist.foreach((elem,i)=>{
    let firstName = elem.userID.firstName
    let lastName = elem.userID.lastName
    let avatar = 'https://randomuser.me/api/portraits/men/41.jpg'
    let gradeType = elem.gradeType
console.log(firstName)
console.log(lastName)
console.log(gradeType)

    user.push({id:i,firstName:firstName,lastName:lastName,avatar:avatar,gradeType:gradeType})
})





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
            data={user}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <ListItemSwap style={styles.flatList}
                    {...item}
                    onSwipeFromRight={() => { alert('pressed right!'); setIdDel(item.id) }}

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

