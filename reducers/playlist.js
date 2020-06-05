export default function(playlist =[],action){
    if(action.type== 'addName'){        
        return action.info

    }else if(action.type == 'addInfoPlaylistSpotify'){
        playlist.idSpotify=action.info
        console.log("add from spotify",playlist)
   
        return playlist
    }
    else{
        return playlist
    }
}