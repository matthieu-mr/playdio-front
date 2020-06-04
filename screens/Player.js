import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableHighlight, TouchableOpacity, Dimensions } from 'react-native';
// var Slider = require('react-native-slider');
// import Video from 'react-native-video';


// TRACK EXAMPLES

const tracks = [
  {
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    audioUrl: "http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3",
  },
  {
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
    audioUrl: 'http://oranslectio.files.wordpress.com/2013/12/39-15-mozart_-adagio-fugue-in-c-minor-k-546.mp3',
  },
  {
    title: 'Hotline Bling',
    artist: 'Drake',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    audioUrl: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
  },
];

// ALBUM ART 

const AlbumArt = ({
  url,
  onPress
}) => (
  <View style={styles.containerAlbumArt}>
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.imageAlbumArt}
        source={{uri: url}}
      />
    </TouchableOpacity>
  </View>
);

// TRACK DETAILS

const TrackDetails = ({
  title,
  artist,
  onAddPress,
  onMorePress,
  onTitlePress,
  onArtistPress,
}) => (
  <View style={styles.containerTrackDetails}>
    <TouchableOpacity onPress={onAddPress}>
      <Image style={styles.buttonTrackDetails}
        source={require('../assets/icons/add.png')} />
    </TouchableOpacity>
    <View style={styles.detailsWrapperTrackDetails}>
      <Text style={styles.titleTrackDetails} onPress={onTitlePress}>{title}</Text>
      <Text style={styles.artistTrackDetails} onPress={onArtistPress}>{artist}</Text>
    </View>
    <TouchableOpacity onPress={onMorePress}>
      <View style={styles.moreButtonTrackDetails}>
        <Image style={styles.moreButtonIconTrackDetails}
          source={require('../assets/icons/add.png')} />
      </View>
    </TouchableOpacity>
  </View>
);

// SEEKBAR

function pad(n, width, z=0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position) => ([
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
]);

const SeekBar = ({
  trackLength,
  currentPosition,
  onSeek,
  onSlidingStart,
}) => {
  const elapsed = minutesAndSeconds(currentPosition);
  const remaining = minutesAndSeconds(trackLength - currentPosition);
  return (
    <View style={styles.containerSeekBar}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textSeekBar}>
          {elapsed[0] + ":" + elapsed[1]}
        </Text>
        <View style={{flex: 1}} />
        <Text style={[styles.textSeekBar, {width: 40}]}>
          {trackLength > 1 && "-" + remaining[0] + ":" + remaining[1]}
        </Text>
      </View>
      {/* <Slider
        maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeek}
        value={currentPosition}
        style={styles.sliderSeekBar}
        minimumTrackTintColor='#fff'
        maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
        thumbStyle={styles.thumbSeekBar}
        trackStyle={styles.trackSeekBar}/> */}
    </View>
  );
};

// CONTROLS

const Controls = ({
  paused,
  shuffleOn,
  repeatOn,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  forwardDisabled,
}) => (
  <View style={styles.containerControls}>
    <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
      <Image style={[styles.secondaryControls, shuffleOn ? [] : styles.off]}
        source={require('../assets/icons/shuffle.png')}/>
    </TouchableOpacity>
    <View style={{width: 40}} />
    <TouchableOpacity onPress={onBack}>
      <Image source={require('../assets/icons/backward.png')}/>
    </TouchableOpacity>
    <View style={{width: 20}} />
    {!paused ?
      <TouchableOpacity onPress={onPressPause}>
        <View style={styles.playButtonControls}>
          <Image source={require('../assets/icons/hold.png')}/>
        </View>
      </TouchableOpacity> :
      <TouchableOpacity onPress={onPressPlay}>
        <View style={styles.playButtonControls}>
          <Image source={require('../assets/icons/play.png')}/>
        </View>
      </TouchableOpacity>
    }
    <View style={{width: 20}} />
    <TouchableOpacity onPress={onForward}
      disabled={forwardDisabled}>
      <Image style={[forwardDisabled && {opacity: 0.3}]}
        source={require('../assets/icons/forward.png')}/>
    </TouchableOpacity>
    <View style={{width: 40}} />
    <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
      <Image style={[styles.secondaryControls, repeatOn ? [] : styles.offControls]}
        source={require('../assets/icons/add.png')}/>
    </TouchableOpacity>
  </View>
);


// CLASS PLAYER

export default class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: true,
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: 0,
      repeatOn: false,
      shuffleOn: false,
    };
  }

  setDuration(data) {
    // console.log(totalLength);
    this.setState({totalLength: Math.floor(data.duration)});
  }

  setTime(data) {
    //console.log(data);
    this.setState({currentPosition: Math.floor(data.currentTime)});
  }

  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time,
      paused: false,
    });
  }

  onBack() {
    if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        paused: false,
        totalLength: 1,
        isChanging: false,
        selectedTrack: this.state.selectedTrack - 1,
      }), 0);
    } else {
      this.refs.audioElement.seek(0);
      this.setState({
        currentPosition: 0,
      });
    }
  }

  onForward() {
    if (this.state.selectedTrack < tracks.length - 1) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        totalLength: 1,
        paused: false,
        isChanging: false,
        selectedTrack: this.state.selectedTrack + 1,
      }), 0);
    }
  }



  render() {
    const track = tracks[this.state.selectedTrack];
    {/* 
    const video = this.state.isChanging ? null : (
      <Video source={{uri: track.audioUrl}} // Can be a URL or a local file.
        ref="audioElement"
        paused={this.state.paused}               // Pauses playback entirely.
        resizeMode="cover"           // Fill the whole screen at aspect ratio.
        repeat={true}                // Repeat forever.
        onLoadStart={this.loadStart} // Callback when video starts to load
        onLoad={this.setDuration.bind(this)}    // Callback when video loads
        onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
        onEnd={this.onEnd}           // Callback when playback finishes
        onError={this.videoError}    // Callback when video cannot be loaded
        style={styles.audioElement} />
    ); */}

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <AlbumArt url={track.albumArtUrl} />
        <TrackDetails title={track.title} artist={track.artist} />
        <SeekBar
          onSeek={this.seek.bind(this)}
          trackLength={this.state.totalLength}
          onSlidingStart={() => this.setState({paused: true})}
          currentPosition={this.state.currentPosition} />
        <Controls
          onPressRepeat={() => this.setState({repeatOn : !this.state.repeatOn})}
          repeatOn={this.state.repeatOn}
          shuffleOn={this.state.shuffleOn}
          forwardDisabled={this.state.selectedTrack === tracks.length - 1}
          onPressShuffle={() => this.setState({shuffleOn: !this.state.shuffleOn})}
          onPressPlay={() => this.setState({paused: false})}
          onPressPause={() => this.setState({paused: true})}
          onBack={this.onBack.bind(this)}
          onForward={this.onForward.bind(this)}
          paused={this.state.paused}/>
        {/*{video}*/}
      </View>
    );
  }
}

// STYLES 

const { width, height } = Dimensions.get('window');
const imageSize = width - 48;

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
  audioElement: {
    height: 0,
    width: 0,
  },
  containerAlbumArt: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  imageAlbumArt: {
    width: imageSize,
    height: imageSize,
  },
  containerTrackDetails: {
    paddingTop: 24,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
  },
  detailsWrapperTrackDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  titleTrackDetails: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  artistTrackDetails: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    marginTop: 4,
  },
  buttonTrackDetails: {
    opacity: 0.72,
  },
  moreButtonTrackDetails: {
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 2,
    opacity: 0.72,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreButtonIconTrackDetails: {
    height: 17,
    width: 17,
  },
  sliderSeekBar: {
    marginTop: -12,
  },
  containerSeekBar: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  trackSeekBar: {
    height: 2,
    borderRadius: 1,
  },
  thumbSeekBar: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  textSeekBar: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    textAlign:'center',
  },
  containerControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  playButtonControls: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControls: {
    height: 18,
    width: 18,
  },
  offControls: {
    opacity: 0.30,
  }
};
