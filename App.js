import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import Marble from "./Marble";
import { Audio } from "expo-av";
import { ShakeEventExpo } from "./ShakeDevice";

export default function App() {
  const [sound, setSound] = useState();
  const [marble1, setMarble1] = useState("white");
  const [marble2, setMarble2] = useState("white");
  const [marble3, setMarble3] = useState("white");

  useEffect(() => {
    async function shake() {
      ShakeEventExpo.addListener(() => {
        calculateDiceColors();
      });
    }
    shake();
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const calculateDiceColors = () => {
    playSound();
    let availableColors = [
      "blue",
      "blue",
      "red",
      "red",
      "yellow",
      "black",
      "black",
      "white",
      "white",
      "white",
    ];

    let idx = Math.floor(Math.random() * availableColors.length);
    setMarble1(availableColors[idx]);
    availableColors = [
      ...availableColors.slice(0, idx),
      ...availableColors.slice(idx + 1),
    ];

    idx = Math.floor(Math.random() * availableColors.length);
    setMarble2(availableColors[idx]);
    availableColors = [
      ...availableColors.slice(0, idx),
      ...availableColors.slice(idx + 1),
    ];

    idx = Math.floor(Math.random() * availableColors.length);
    setMarble3(availableColors[idx]);
    availableColors = [
      ...availableColors.slice(0, idx),
      ...availableColors.slice(idx + 1),
    ];
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/dice.mp3")
    );
    setSound(sound);

    await sound.playAsync();
  };

  return (
    <TouchableWithoutFeedback onPress={() => calculateDiceColors()}>
      <View style={styles.container1}>
        <View style={styles.container}>
          <Marble color={marble1} />
          <Marble color={marble2} />
          <Marble color={marble3} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});
