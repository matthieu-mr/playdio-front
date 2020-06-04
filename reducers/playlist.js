export default function(playlist =[],action){
    if(action.type== 'addName'){
        console.log("reduxxxxx",action.info)
        
        return action.info
    }else{
        return playlist
    }
}