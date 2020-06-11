export default function(play = {}, action) {
    if(action.type === 'play') {
      var playCopy = {...play};
      playCopy.songId = action.songId;
      playCopy.radioId = action.radioId;
      return playCopy;
    } else {
      return play;
    }
  }