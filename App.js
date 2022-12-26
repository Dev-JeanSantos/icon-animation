import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Feather } from "react-native-vector-icons"
import LoteView from 'lottie-react-native'
import React from 'react';
import anime from "./assets/check.json";

export default function App() {

  let animation = React.createRef()

  function startAnimaton() {
    animation.current.play()
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startAnimaton}>
        <Feather name="play" size={60} color="red" />

      </TouchableOpacity>
      <LoteView
        source={anime}
        style={
          {
            width: 200,
            height: 200,
          }
        }
        loop={false}
        ref={animation}
      />
      <Button title='Start Animation' onPress={startAnimaton} />
      <StatusBar style="auto" />
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
