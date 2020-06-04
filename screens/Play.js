import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image, Text, FlatList } from 'react-native'
import { Tooltip, Slider } from 'react-native-elements';
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

const playlistTracks = [];
playlist.map((track,i)=>{ 
  playlistTracks.push({id: track.id, name: track.title, text: track.album, url: track.imageSource});
})  


// ----------------------------------------
// PLAY FUNCTION

export default class Play extends React.Component {


  // INITIAL STATE
  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 0.5,
    // Whenever the state of the Audio instance changes, isBuffering gets an update
    isBuffering: false,
    isSeeking: false,
  }

  

  // CONFIGURATION OF THE AUDIO COMPONENT
  async componentDidMount() {
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
      this.loadAudio()
    } catch (e) {
      console.log(e)
    }
  }

  // LOADING OF AUDIO FILE
  async loadAudio() {
    const {currentIndex, isPlaying, volume} = this.state
    try {
      const playbackInstance = new Audio.Sound()
      const source = {
        uri: playlist[currentIndex].uri
      }
      const status = {
        shouldPlay: isPlaying,
        volume: volume
      }
      playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)     
      await playbackInstance.loadAsync(source, status, false)
      this.setState({playbackInstance})
      } catch (e) {
        console.log(e)
      }
  }
   
  onPlaybackStatusUpdate = status => {
    this.setState({
      isBuffering: status.isBuffering
    })
  }

  // CONTROL HANDLERS
  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state
    isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()
    this.setState({
      isPlaying: !isPlaying
    })
  }
 
  handlePreviousTrack = async () => {
    let { playbackInstance, currentIndex } = this.state
    if (playbackInstance) {
      await playbackInstance.unloadAsync()
      currentIndex > 0 ? (currentIndex -= 1) : (currentIndex = playlist.length - 1)
      this.setState({
        currentIndex
      })
      this.loadAudio()
    }
  }
 
  handleNextTrack = async () => {
    let { playbackInstance, currentIndex } = this.state
    if (playbackInstance) {
      await playbackInstance.unloadAsync()
      currentIndex < playlist.length - 1 ? (currentIndex += 1) : (currentIndex = 0)
      this.setState({
        currentIndex
      })
      this.loadAudio()
    }
  }

  handleVolume = async ({value}) => {
    let { playbackInstance, volume } = this.state
    if (playbackInstance) {
      await playbackInstance.setVolumeAsync(value)
      this.setState({
        volume: value
      })
    }
  }
  decimal = (x) => {
    return Number.parseFloat(x).toFixed(1);
  }

  // DISPLAY THE INFORMATION
  renderFileInfo() {
    const { playbackInstance, currentIndex } = this.state
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

 

  // CALLBACK
  render() {
    return (
      <View style={styles.playView}>
        <View style={styles.player}>

          <Image
            style={styles.albumCover}
            source={{ uri: playlist[this.state.currentIndex].imageSource }}
          />

          {this.renderFileInfo()}

          <View style={styles.seekView}>
            <Text style={styles.seekTime}>2.30</Text>
            <Slider style={styles.seekSlider} value={this.state.volume} minimumValue={0} maximumValue={0.9} onValueChange={value => this.handleVolume({value})}/>
            <Text style={styles.seekTime}>3.30</Text>
          </View>

          <View style={styles.controls}>
            <TouchableOpacity style={styles.control} onPress={this.handlePreviousTrack}>
              <Image source={require('../assets/icons/backward.png')} style={styles.icons}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
              {this.state.isPlaying ? (<Image source={require('../assets/icons/hold.png')} style={styles.icons}/>) : (<Image source={require('../assets/icons/play.png')} style={styles.icons}/>)}
            </TouchableOpacity>
            <TouchableOpacity style={styles.control} onPress={this.handleNextTrack}>
              <Image source={require('../assets/icons/forward.png')} style={styles.icons}/>
            </TouchableOpacity>
            <Tooltip width={wp('40%')} height={hp('15%')} backgroundColor='#E5E4E4' popover={<View><Slider value={this.state.volume} minimumValue={0} maximumValue={1} onValueChange={value => this.handleVolume({value})}/><Text>volume: {this.decimal(this.state.volume)*10}</Text></View>}>
              <Image source={require('../assets/icons/volume.png')} style={[styles.icons, styles.control]}/>
            </Tooltip>
          </View>

        </View>

        <FlatList 
          data={playlistTracks}
          keyExtractor={item => item.id}
          renderItem={({ item}) => (
            <ListItemSwap style={styles.flatList}
              {...item} 
              onSwipeFromLeft={() => {alert('swiped from left!')}}
              onSwipeFromRight={() => {alert('pressed right!')}}
              
            />
          )}
          ItemSeparatorComponent={() => <Separator />}
        />

      </View>
    )
  }
}

// ----------------------------------------
// STYLES

const styles = StyleSheet.create({
  playView: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  player: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#E5E4E4',
    width:wp('100%'),
    height:hp('45%')
  },
  albumCover: {
    width:wp('80%'),
    height:hp('20%'),
    marginTop:hp('2%')
  },
  trackInfo: {
    width:wp('60%'),
    justifyContent:'flex-start',
    marginTop:hp('2%')
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

})