import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Radio from './components/Radio';

export default function App() {

  var radioNameList = ["Radio Gaga", "Radio ZZ", "Radio F"];
  var radioList = radioNameList.map(function(name, i) {
    return <Radio radioName={name} key={i}/>;
  })   

  return (
    <View style={styles.container}>
      <Text> welcome homescreen</Text>
      <ScrollView horizontal={true}>
        {radioList}
      </ScrollView>
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