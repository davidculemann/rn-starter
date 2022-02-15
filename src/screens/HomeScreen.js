import React from "react";
import { Text, StyleSheet } from "react-native";
import { Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>These are some buttons with navigation :)</Text>
      <Button
        title="Go to components demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to list demo"
      />
      <Button
        onPress={() => navigation.navigate("Images")}
        title="Go to images demo"
      />
      <Button
        onPress={() => navigation.navigate("PDF")}
        title="Go to PDF demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
