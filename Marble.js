import React from "react";
import { View } from "react-native";

const Marble = ({ color }) => {
  return (
    <View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: color,
          margin: 5,
          borderRadius: 50,
        }}
      ></View>
    </View>
  );
};

export default Marble;
