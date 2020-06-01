import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Radio from './components/Radio';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> welcome homescreen</Text>
      <Radio></Radio>
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