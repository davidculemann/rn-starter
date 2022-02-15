import React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Text>Image of {props.title}</Text>
      <Text>Score: {props.score}</Text>
      <Button title="+" onPress={() => props.setImageScore(props.imageScore)} />
      <Button title="-" onPress={() => props.setImageScore(props.imageScore)} />
      <Image source={props.imageSource} />
    </View>
  );
};

const ImageStyle = StyleSheet.create({});

export default ImageDetail;
