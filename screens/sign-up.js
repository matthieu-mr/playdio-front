console.disableYellowBox = true; 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Button} from 'react-native-elements'


export default function connect() {
  const [visible, setVisible] = useState(false);
async function signUp(){
  var userCreate = await fetch('http://192.168.1.43:3000/sign-up',{
  method:"POST",
  body:data
})
}







  return (
    <View style={{flex: 1}}>

      <Button
      title="Sign up with email"
      type="solid"
      onPress={()=>signUp()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
