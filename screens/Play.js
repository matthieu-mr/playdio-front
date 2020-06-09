import React, {useState, useEffect} from 'react'
import { StyleSheet, TouchableOpacity, View, Image, Text, FlatList, SafeAreaView } from 'react-native'
import { Tooltip, Slider, Header, Avatar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Audio } from 'expo-av';
import ListItemSwap, { Separator } from './components/Swype';

// ----------------------------------------
// PLAYLIST TEMPLATE EXAMPLE

const playlist = [
  {
    id: 1,
    title: 'Sorry',
    author: 'Comfort Fit',
    album: 'Not defined',
    source: 'Amazonaws',
    uri:
      'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
    imageSource: 'https://i.ytimg.com/vi/JLElBAJL_mk/maxresdefault.jpg'
  },
  {
    id: 2,
    title: 'Hamlet - Act II',
    author: 'William Shakespeare',
    album: 'Not defined',
    source: 'Librivox',
    uri:
      'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act2_shakespeare.mp3',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
  },
  {
    id: 3,
    title: 'Hamlet - Act III',
    author: 'William Shakespeare',
    album: 'Not defined',
    source: 'Librivox',
    uri: 'http://www.archive.org/download/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
  },
  {
    id: 4,
    title: 'Hamlet - Act IV',
    author: 'William Shakespeare',
    album: 'Not defined',
    source: 'Librivox',
    uri:
      'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act4_shakespeare.mp3',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
  },
  {
    id: 5,
    title: 'Hamlet - Act V',
    author: 'William Shakespeare',
    album: 'Not defined',
    source: 'Librivox',
    uri:
      'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act5_shakespeare.mp3',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
  }
]




// ----------------------------------------
// PLAY FUNCTION

// Get my Spotify ID from the store

export default function Play() {

  // INITIAL STATE

  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackInstance, setPlaybackInstance] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  // Whenever the state of the Audio instance changes, isBuffering gets an update
  const [isBuffering, setIsBuffering] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [shouldPlayAtEndOfSeek, setShouldPlayAtEndOfSeek] = useState(false);
  const [playbackInstancePosition, setPlaybackInstancePosition] = useState(null);
  const [playbackInstanceDuration, setPlaybackInstanceDuration] = useState(null);
    

  // CONFIGURATION OF THE AUDIO COMPONENT
 
  useEffect( () => {
    audioConfiguration = async () => {
      try {
        await Audio.setAudioModeAsync({ 
          allowsRecordingIOS: false,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentModeIOS: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
          shouldDuckAndroid: true,
          staysActiveInBackground: true,
          playThroughEarpieceAndroid: true
        })
        loadAudio()
      } catch (e) {
        console.log(e)
      }  
    }
    audioConfiguration();
  }, []);

  // CONVERSION OF THE PLAYLIST FORMAT

  const playlistTop = [];
  playlist.map((track,i)=>{ 
    if(i < currentIndex) {
      playlistTop.push({id: i, name: track.title, text: track.album, url: track.imageSource});
    }
  })

  const playlistBottom = [];
  playlist.map((track,i)=>{ 
    if(i > currentIndex) {
      playlistBottom.push({id: i, name: track.title, text: track.album, url: track.imageSource});
    }
  })  

  // LOADING OF AUDIO FILE

  loadAudio = async () => {
    try {
      const playbackInstance = new Audio.Sound()
      const source = {
        uri: playlist[currentIndex].uri
      }
      const status = {
        shouldPlay: isPlaying,
        volume: volume
      }
      playbackInstance.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)     
      await playbackInstance.loadAsync(source, status, false)
      setPlaybackInstance(playbackInstance)
    } catch (e) {
      console.log(e)
    }
  }
   
  onPlaybackStatusUpdate = status => {
    setIsBuffering(status.isBuffering)
  }

  // SEEK HANDLER

  onSeekSliderValueChange = value => {
    if (playbackInstance != null && !isSeeking) {
      setIsSeeking(true);
      setShouldPlayAtEndOfSeek(shouldPlay);
      playbackInstance.pauseAsync();
    }
  };

  onSeekSliderSlidingComplete = async value => {
    if (playbackInstance != null) {
      setIsSeeking(false);
      const seekPosition = value * playbackInstanceDuration;
      if (shouldPlayAtEndOfSeek) {
        playbackInstance.playFromPositionAsync(seekPosition);
      } else {
        playbackInstance.setPositionAsync(seekPosition);
      }
    }
  };

  getSeekSliderPosition = () => {
    if (
      playbackInstance != null &&
      playbackInstancePosition != null &&
      playbackInstanceDuration != null
    ) {
      return (
        playbackInstancePosition /
        playbackInstanceDuration
      );
    }
    return 0;
  }
  
  // TIMESTAMP

  getMMSSFromMillis = (millis) => {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = number => {
      const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
      return string;
    };
    return padWithZero(minutes) + ":" + padWithZero(seconds);
  }

  getTimestamp = () => {
    if (
      playbackInstance != null &&
      playbackInstancePosition != null &&
      playbackInstanceDuration != null
    ) {
      return `${getMMSSFromMillis(
        playbackInstancePosition
      )} / ${getMMSSFromMillis(playbackInstanceDuration)}`;
    }
    return "";
  }

  
  // CONTROL HANDLERS

  
  handlePlayPause = async () => {
    if (playbackInstance) { 
      isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()
      setIsPlaying(!isPlaying)
    }
  }
  
 
  handlePreviousTrack = async () => {
    if (playbackInstance) {
      await playbackInstance.unloadAsync()
      currentIndex > 0 ? (setCurrentIndex(currentIndex - 1)) : (setCurrentIndex(playlist.length - 1))
      loadAudio()
    }
  }
 
  handleNextTrack = async () => {
    if (playbackInstance) {
      await playbackInstance.unloadAsync()
      currentIndex < playlist.length - 1 ? (setCurrentIndex(currentIndex + 1)) : (setCurrentIndex(0))
      loadAudio()
    }
  }

  handleVolume = async ({value}) => {
    if (playbackInstance) {
      await playbackInstance.setVolumeAsync(value)
      setVolume(value)
    }
  }
  decimal = (x) => {
    return Number.parseFloat(x).toFixed(1);
  }

  // DISPLAY THE INFORMATION

  renderFileInfo = () => {
    return playbackInstance ? (
      <View style={styles.trackInfo}>
        <Text style={styles.artistName}>
          {playlist[currentIndex].author}
        </Text>
        <Text style={styles.trackName}>
          {playlist[currentIndex].title}
        </Text>
      </View>
    ) : null
  }

  // ----------------------------------------
  // CALLBACK

  return (
    <View style={styles.playView}>
    
      <View style={styles.header}>

      </View>
      <View style={styles.flatlistViewTop}>
        <FlatList 
          data={playlistTop}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ListItemSwap style={styles.flatList}
              {...item} 
              onSwipeFromLeft={() => {alert('swiped from left!');setIdAdd(item.id)}}
              onSwipeFromRight={() => {alert('pressed right!');setIdDel(item.id)}}
              
            />
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      </View>

      <View style={styles.player}>

        <Image
          style={styles.albumCover}
          source={{ uri: playlist[currentIndex].imageSource }}
        />

        {renderFileInfo()}

        <View style={styles.seekView}>
          
          <Text style={styles.seekTime}>{getTimestamp()}</Text>
          
          <Slider
            style={styles.seekSlider}
            value={200} //getSeekSliderPosition()
            onValueChange={() => onSeekSliderValueChange()}
            onSlidingComplete={() => onSeekSliderSlidingComplete()}
            thumbTintColor="#343434"
            thumbStyle={{width:wp('4%'), height:hp('2.5%')}}
          />
          
          <Text style={styles.seekTime}>3.30</Text>
        </View>

        <View style={styles.controls}>
          
          <TouchableOpacity style={styles.control} onPress={() => handlePreviousTrack()}>
            <Image source={require('../assets/icons/backward.png')} style={styles.icons}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.control} onPress={() => handlePlayPause()}>
            {isPlaying ? (<Image source={require('../assets/icons/hold.png')} style={styles.icons}/>) : (<Image source={require('../assets/icons/play.png')} style={styles.icons}/>)}
          </TouchableOpacity>
          <TouchableOpacity style={styles.control} onPress={() => handleNextTrack()}>
            <Image source={require('../assets/icons/forward.png')} style={styles.icons}/>
          </TouchableOpacity>
          <Tooltip width={wp('40%')} height={hp('15%')} backgroundColor='#E5E4E4' popover={<View><Slider value={volume} minimumValue={0} maximumValue={1} onValueChange={value => handleVolume({value})}/><Text>volume: {decimal(volume)*10}</Text></View>}>
            <Image source={require('../assets/icons/volume.png')} style={[styles.icons, styles.control]}/>
          </Tooltip>
          
        </View>

      </View>

      <View style={styles.flatlistViewBottom}>
        <FlatList 
          data={playlistBottom}
          keyExtractor={item => item.id}
          renderItem={({ item}) => (
            <ListItemSwap style={styles.flatList}
              {...item} 
              onSwipeFromLeft={() => {alert('swiped from left!');setIdAdd(item.id)}}
              onSwipeFromRight={() => {alert('pressed right!');setIdDel(item.id)}}
              
            />
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      </View>

    </View>
    
  )
  
}

// ----------------------------------------
// STYLES

const styles = StyleSheet.create({
  playView: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  header: {
    height:hp('14%')
  },
  player: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#E5E4E4',
    width:wp('100%'),
    height:hp('40%')
  },
  albumCover: {
    width:wp('80%'),
    height:hp('17%'),
    marginTop:hp('2%')
  },
  trackInfo: {
    width:wp('60%'),
    justifyContent:'flex-start',
    marginTop:hp('1%')
  },
  artistName: {
    flexWrap:'wrap',
    fontSize:hp('2%'),
    fontWeight:"bold",
    color: '#383838'
  },
  trackName: {
    flexWrap:'wrap',
    fontSize:hp('2%'),
    color: '#383838'
  },
  controls: {
    flexDirection:'row'
  },
  control: {
    marginTop:wp('4%'),
    marginBottom:wp('5%'),
    marginLeft:wp('6%'),
    marginRight:wp('6%'),
  },
  icons: {
    width:wp('9.1%'), 
    height:hp('5%')
  },
  seekView: {
    flexDirection:'row'
  },
  seekTime: {
    fontSize:hp('2%'),
    color:"#8F8F8F",
    marginLeft:wp('3%'),
    marginRight:wp('3%')
  },
  seekSlider: {
    width:wp('60%'), 
    height:hp('5%')
  },
  flatList: {
    marginHorizontal: 0,
    marginVertical: 0,
    paddingVertical: 0,
  },
  flatlistViewTop: {
    height:hp('10%'),
    width:wp('100%')
  },
  flatlistViewBottom: {
    width:wp('100%'),
    height:hp('33%')
  }

})