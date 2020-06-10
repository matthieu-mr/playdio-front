import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, TouchableHighlight,Swi } from 'react-native';
import { Avatar,ButtonGroup, Badge, Icon, withBadge, Card, List, ListItem, Image, Header } from 'react-native-elements'
import ListItemSwap, { Separator } from './components/userplaylist';
import  {TextField}  from 'react-native-material-textfield';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ip from '../variables';


export default function selectUser(props) {
const [firstName,setFirstName]=useState('')
const [userPlaylist,setUserPlaylist]=useState([])
const[search,setSearch]=useState("")
const [searchJSON,setSearchJson]=useState()

/* modifier le fetch pour envoiye le nom de la playlist quan elle sera implementer dans l'appli */
useEffect(()=>{
    async function checkUserPlaylist(){
    var requestBDD = await fetch(`${ip}/userListplaylist`)
    var reponse = await requestBDD.json()
    var tableau = [...userPlaylist]
        for(var i= 0 ; i<reponse.userList.userInfo.length;i++){
        tableau.push({id:i,firstName:reponse.userList.userInfo[i].userID.firstName,lastName:reponse.userList.userInfo[i].userID.lastName,avatar:'https://randomuser.me/api/portraits/men/41.jpg',gradeType:reponse.userList.userInfo[i].gradeType,namePlaylist:reponse.userList.name,idUser:reponse.userList.userInfo[i].userID._id,idDelete:reponse.userList.userInfo[i]._id})
        }
        setUserPlaylist(tableau)
    }
    checkUserPlaylist()
},[])
useEffect(()=>{
 
    let searchText = search
     
     /* async function recupDonnée(){
       var requestBDD = await fetch(`${ip}/user-search`,{
         method:"POST",
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
         body:`search_term=${searchText}`
       })
       var reponse = await requestBDD.json()
        setSearchJson(reponse)
      
     }
     recupDonnée() */
   },[search])









async function userList(){
    var requestBDD = await fetch(`${ip}/userList`,{
        method:"GET",
        body:`firstName=${firstName}`
    })
    var reponse = await requestBDD.json()

}

/* console.log(userPlaylist) */

const buttons = ['My Playlist', 'Search on Spotify']
const [indexButton,setIndex]=useState(0)
 /* Affichage dynamique via button en fonction de l'ecran*/


 const [listToSearch,SetListToSearch] =useState();
    useEffect(() => {
      console.log("debut")
      if(indexButton==0 || indexButton==3 ){
         // console.log("redux1",props.playlistUser.listMusic)
          SetListToSearch(props.playlistUser.listMusic)
          setIndex(0)
      }

      else{
        console.log("search")
        SetListToSearch(arrayResult)
      }
    });


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
{/*         <TextField
        label={'firsname'}
        tintColor="#26a69a"
        onChangeText={(value)=>setFirstName(value)}
        onSubmitEditing={()=>{props.navigation.navigate('SearchtUser')}}
        /> */}
                    <TextField
                        label={'Search a song'}
                        tintColor="#26a69a"
                        onChangeText={ (value) => setSearch(value) }
                       
                        />
                        
                    <View>
                          <ButtonGroup
                            onPress={(e) => {setIndex(e) }}
                            selectedIndex={indexButton}
                            buttons={buttons}
                            containerStyle={{height: 40}}
                            selectedButtonStyle ={{
                            backgroundColor:"#00838F",
                              }}
                            />

                      </View>
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

