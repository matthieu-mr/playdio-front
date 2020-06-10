export default function(playlist =[],action){
    if(action.type== 'addName'){        
        return action.info

    }
    else if(action.type == 'addInfoPlaylistSpotify'){
        playlist.idSpotify=action.info
        return playlist
    }

    else if(action.type == 'addSong'){
     //   console.log("ajout son")
        
        playlist.listMusic.push(action.info)
        return playlist
    }
    else if(action.type == 'deleteSong'){
        //console.log("deleteredux",playlist)
       
         let newPlaylist=playlist

        newPlaylist.listMusic.splice(action.info,1)
       // console.log(newPlaylist)
        return playlist
    }

    else{
        return playlist
    }
}