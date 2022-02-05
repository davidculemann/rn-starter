import React from "react";
import { Text, StyleSheet } from "react-native";
import { View } from "react-native";

const ComponentsScreen = () => {
  const myName = "David";
  return (
    <View>
      <Text style={styles.textStyleLarge}>
        Getting started with React Native
      </Text>
      <Text style={styles.textStyleSmall}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleLarge: {
    fontSize: 45,
  },
  textStyleSmall: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
