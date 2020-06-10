import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, ScrollView ,Switch,FlatList} from 'react-native';
import { ListItem,Button,ButtonGroup,Header,Avatar } from 'react-native-elements'
import {connect} from 'react-redux';
import SearchComponent, { Separator } from './components/SearchResult';
import ip from '../variables';

import police from '../screens/components/font';

import  {TextField,  FilledTextField, OutlinedTextField,}  from 'react-native-material-textfield';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function CreateRadioEmpty(props) {

const [radioName, setRadioName] = useState("hi")
const [isPrivate, setIsPrivate] = useState(false) ; 
const [isPlayingOnly, setIsPlayingOnly] = useState(false) ; 
const [send, setSender] = useState(false);

 /*  ------------------------------- Recuperation playlist   ------------------------------- */   

const[listMusicFromBack,setListSongFromBack]=useState()

const [refresh,setRefresh]=useState(false)
    // requete BDD
    
    useEffect(()=>{
      console.log("envoi requete ----- L26")
      //Playlist courte
      let idplaylistSpotify ="75T4RvRPamAz41Kebiq2HZ"

      // playlistLongue
     // let idplaylistSpotify ="1Ts6GeiD5o29GYaYyFZZ4q"

      async function recupDonnée(){
        var requestBDD = await fetch(`${ip}/playlist-item`,{
          method:"POST",
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body:`idPlayslistSpotifyFromFront=${idplaylistSpotify}`
        })
        var reponse = await requestBDD.json()
       // console.log("reponse",reponse)
        setListSongFromBack(reponse)
       
      }

      recupDonnée()
     
    },[])

const [listResultSpotify,setResultSpotify]=useState();


useEffect(()=>{
  let infoListSong = listMusicFromBack // check si présente 
     
  if(infoListSong){
    let recupInfo = listMusicFromBack.response.items
        let mapArrayMusic = recupInfo.map((item,i)=>{
                    
          let nameTitle = item.track.name
          let artist = item.track.artists[0].name
          let idSpotify =item.track.id
          let type = item.track.type
          let img =item.track.album.images[0].url
          let isrc = item.track.external_ids.isrc
          let from = "playlistUser"
          
          props.addSong({id:i,name:nameTitle,text:artist,url:img,spotifyId:idSpotify,type:type,isrc:isrc,from:from})
        })
    }else {console.log("recup ko")}
  },[listMusicFromBack])    


 /*  ------------------------------- Recuperation Recherche   ------------------------------- */   
//  Resquest


// setter recherche
const[search,setSearch]=useState("")
const [searchJSON,setSearchJson]=useState()

useEffect(()=>{
 
 let searchText = search
  
  async function recupDonnée(){
    var requestBDD = await fetch(`${ip}/user-search`,{
      method:"POST",
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:`search_term=${searchText}`
    })
    var reponse = await requestBDD.json()
     setSearchJson(reponse)
   
  }
  recupDonnée()
},[search])

/*  add list music result from spotify to array  */

let listOfResult=[]
const [arrayResult,setArrayResult] =useState()

useEffect(()=>{
  let info = searchJSON
  
  if(info){ // attente de la reception du JSON
    
     let infoResultArray = searchJSON.response.tracks.items
                /* recuperation des info json */
            /* recuperation des info json */
            let mapArrayResult = infoResultArray.map((item,i)=>{
              let nameTitle = item.name
              let artist = item.artists[0].name
              let idSpotify =item.id
              let type = 'track'
              let img =item.album.images[0].url
              let isrc = item.external_ids.isrc
              let from = "search"

      listOfResult.push({id:i,name:nameTitle,text:artist,url:img,spotifyId:idSpotify,type:type,isrc:isrc,from:from})
      
      setArrayResult(listOfResult)
             
      })
  }else {
      console.log("----------------> ko")
  }
},[searchJSON])

// Setter boutton
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

/* let des fonctions  */


let touch =()=>{
  
}

const [arrayResultTest,setArrayResultTest] =useState(false)



let swypeValue =(item)=>{
  //console.log("swype du numéro",item)
  //  props.deleteSong(item)
console.log("front item",item)
  setIndex(3)


}


const [searchJSONResultSend,setSearchJSONResultSend]=useState()

let validPlaylist =async ()=>{

  //props.playlistUser

 let result = JSON.stringify(props.playlistUser);
console.log(result)

let resultEncoded = encodeURIComponent(result)



  var requestBDD = await fetch('http://192.168.1.8:3000/radio-create',{
    method:'post',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:`resultat=${resultEncoded}`
  })


  var reponse = await requestBDD.json()
  console.log("response du back", reponse)
  setSearchJSONResultSend(reponse)

}


  return (

<View style={styles.container}>

    <View style={styles.form}>
                {/*  "#c2185b" */}
                    <View style={styles.input}> 
                    <Text> Create Your New Radio</Text>
                    <Header
                          leftComponent={{ icon: 'menu', color: '#fff' }}
                          centerComponent={{ text: 'Playdio', style: { color: '#00838F' } }}
                          rightComponent={<Avatar
                                rounded source={{uri: 'https://randomuser.me/api/portraits/men/41.jpg'}}
                              />}
                              containerStyle={{
                            backgroundColor: 'white',
                          }}
                        />
                       <Text style={styles.categoryTitle}> Add your favorite song</Text>
                    
                    <TextField
                        label={'Search a song'}
                        tintColor="#26a69a"
                        onChangeText={ (value) => setSearch(value) }
                       
                        />

                    </View>


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
                   {/* liste des musiques */}
              
    {/* liste des musiques */}
            <FlatList
              //  data={props.playlistUser.listMusic}
                data={listToSearch}
              // keyExtractor={item => item.id}
              keyExtractor = { (item, index) => index.toString() } 
              renderItem={({ item}) => (
                <SearchComponent
                    {...item}

                   // onSwipeFromRight={() => {swypeValue(item.id);alert('swiped from left!')}}
                   onSwipeFromRight={() => {swypeValue(item.index)}}
                    onPress={touch()} 

                    navigation={props.navigation}
                  action = {"addtrack"}
                />
              )}
              ItemSeparatorComponent={() => <Separator />}
              />    

                        <View style={styles.button}>

                        <Button 
                            title="Valider la playlist"
                            onPress={()=>validPlaylist()}
                            buttonStyle={{
                                backgroundColor:"#00838F",
                            }}
                        />
                        </View>
  
             

    </View>
   </View>
  );

}

const styles = StyleSheet.create({
    container: {
    display:"flex",
    flex:1,
    backgroundColor: '#fff',   
      },

    form:{
     display:"flex",
     flex:1,
   
     justifyContent:'flex-end',
      marginBottom:wp("5%"),
    },

  input:{
    marginRight:wp('10%'),
    marginLeft:wp('10%'),
    marginBottom:wp('10%'),
    },  


  paramPlaylist:{  
    backgroundColor: "#26a69a",
    marginRight:wp('7%'),
    marginLeft:wp('7%'),
    marginBottom:wp('70%'),
  },


  button:{
   marginRight:wp('10%'),
   marginLeft:wp('10%'),
},
categoryTitle: {
  color:"#383838", 
  fontSize:hp('3%'), 
  width:wp('75%'), 
  marginLeft:wp('7%'),
  fontFamily: 'PermanentMarker'
},



  
});


function mapDispatchToProps(dispatch) {
  return {
    addSong: function(info) { 
      dispatch( {type: 'addSong',info }) 
    },
    deleteSong: function(info) { 
      dispatch( {type: 'deleteSong',info }) 
    },
    
  }
}

function mapStateToProps(state) {
  return { playlistUser: state.PlaylistAdd }
}
  


export default connect(
  mapStateToProps, 
    mapDispatchToProps
  )(CreateRadioEmpty);

// export default CreateRadio1
