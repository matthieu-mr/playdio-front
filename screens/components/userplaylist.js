import React,{useState,useRef} from 'react';
import { Avatar, Badge, Icon, withBadge, Card, ListItem } from 'react-native-elements'
import {
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableOpacity,
    Switch
} from 'react-native';
// import Swipeable from 'react-native-gesture-handler/Swipeable';
// import { GestureHandler } from 'expo';
// const { Swipeable } = GestureHandler;

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: hp('1%'),
        paddingVertical: hp('1%'),
    },
    separator: {
        flex: hp('0.3%'),
        height: hp('0.1%'),
        backgroundColor: '#e4e4e4',
        marginLeft: hp('3%'),
    },
    rightAction: {
        backgroundColor: '#dd2c00',
        justifyContent: 'center',
        flex: hp('0.3%'),
        alignItems: 'flex-end',
    },
    actionText: {
        color: '#fff',
        fontWeight: '600',
        padding: hp('7%'),
    },
    listItem: {
        height: hp('8%'),
        paddingTop: hp('0%'),
        paddingBottom: hp('0%')
    },
    title: {
        fontSize: hp('2.2%'),
        fontWeight: "bold",
        color: "#3a3a3a"
    },
    subtitle: {
        fontSize: hp('2%'),
        color: "#3a3a3a"
    }
});


const RightActions = (progress, dragX, onPress) => {

    const scale = dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    return (
        <View style={styles.rightAction}>
            <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
                Delete
    </Animated.Text>
        </View>
    );
};






const ListItemSwap = ({ id, text,firstName, lastName, avatar,gradeType,namePlaylist,idUser,idDelete },props) =>{
    
    const [colorIcon,setColorIcon]=useState('#C0C0C0')
    const [idDel, setIdDel] = useState();
    async function changeGrade(idUser,namePlaylist){

        if(colorIcon==='#796221'){
            var requestBDD = await fetch('http://192.168.1.43:3000/userAdmin',{
            method:"POST",
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body:`idUser=${idUser}&namePlaylist=${namePlaylist}&gradeType=admin`
        })
        setColorIcon('#C0C0C0')
        }else if(colorIcon==='#C0C0C0'){
                var requestBDD = await fetch('http://192.168.1.43:3000/userAdmin',{
                method:"POST",
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body:`idUser=${idUser}&namePlaylist=${namePlaylist}&gradeType=public`
            })
            setColorIcon('#796221')
        }
    }
    const swipeableRef = useRef(null);

    const deleteUser =async (item,idDelete,namePlaylist) => {
        console.log(idDelete,namePlaylist)
        var requestBDD = await fetch('http://192.168.1.43:3000/deleteUser',{
                method:"POST",
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body:`idDelete=${idDelete}&namePlaylist=${namePlaylist}`
            })
        console.log("evenement", item)
        props.deleteSong(item)

    swipeableRef.current.close();
}
        
    
    return(
        <Swipeable     
            ref={swipeableRef}
            renderRightActions={RightActions}
         // onSwipeableRightOpen={props.onSwipeFromRight} 
            onSwipeableRightOpen={() => {deleteUser(id,idDelete,namePlaylist),setIdDel(id)}} 
            >


        <View style={styles.container}>

            <ListItem
                containerStyle={styles.listItem}
                titleStyle={styles.title}
                subtitleStyle={styles.subtitle}
                leftAvatar={{ source: { uri: avatar } }}
                title={firstName+' '+lastName}
                subtitle={text}
                rightIcon={
                <Icon
                    name="ios-disc"
                    size={40}
                    color={colorIcon}
                    type='ionicon'
                    onPress={()=>{changeGrade(idUser,namePlaylist)}}
                    />
                    }
            />
        </View>
    </Swipeable>

);} 


export default ListItemSwap;