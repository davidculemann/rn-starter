import React from "react";
import { Text, StyleSheet } from "react-native";
import { Button, View, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props);
  return (
    <View>
      <Text style={styles.text}>Yoooo</Text>
      <Button
        title="Go to components"
        onPress={() => props.navigation.navigate("Components")}
      />
      <TouchableOpacity onPress={() => console.log("touchable opacity")}>
        <Text>Lol i am clickable</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
