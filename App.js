import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Marble from './Marble';

export default function App() {

  const [marble1, setMarble1] = useState("white");
  const [marble2, setMarble2] = useState("white");
  const [marble3, setMarble3] = useState("white");

  const calculateDiceColors = () => {
    let availableColors = ["blue", "blue", "red", "red", "yellow", "black", "black", "white", "white", "white"];

    let idx = Math.floor(Math.random() * availableColors.length);
    setMarble1(availableColors[idx]);
    availableColors = [...availableColors.slice(0, idx), ...availableColors.slice(idx+1)];

    idx = Math.floor(Math.random() * availableColors.length);
    setMarble2(availableColors[idx]);
    availableColors = [...availableColors.slice(0, idx), ...availableColors.slice(idx+1)];

    idx = Math.floor(Math.random() * availableColors.length);
    setMarble3(availableColors[idx]);
    availableColors = [...availableColors.slice(0, idx), ...availableColors.slice(idx+1)];
  };

  return (
    <TouchableWithoutFeedback onPress={() => calculateDiceColors()}>
      <View style={styles.container}>
          <Marble color={marble1}/>
          <Marble color={marble2}/>
          <Marble color={marble3}/>
          <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
