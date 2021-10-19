import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import rocket from './rocket.json';
import Lottie from 'lottie-react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Rocket</Text>
      <Lottie source={rocket} autoPlay loop style={styles.image} resizeMode="contain" autoSize />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 500,
    height: 500
  },
  text: {
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: '600',
    color: '#2E384D',
    textShadowColor: '#2E384D',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1
  }
});
