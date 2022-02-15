import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const [imageScore, setImageScore] = useState({
    forestScore: 0,
    beachScore: 0,
    mountainScore: 0,
  });

  return (
    <View>
      <ImageDetail
        title={"Forest"}
        imageSource={require("../../assets/forest.jpg")}
        imageScore={imageScore}
        score={imageScore.forestScore}
        setImageScore={setImageScore}
      />
      <ImageDetail
        title={"Beach"}
        imageSource={require("../../assets/beach.jpg")}
        score={imageScore.beachScore}
        imageScore={imageScore}
        setImageScore={setImageScore}
      />
      {/* <ImageDetail
        title={"Mountain"}
        imageSource={require("../../assets/mountain.jpg")}
        score={imageScore.mountainScore}
        imageScore={imageScore}
        setImageScore={setImageScore}
      /> */}
      <ImageDetail
        title={"Carno"}
        imageSource={require("../../assets/carno-logo-black.png")}
        score={imageScore.mountainScore}
        imageScore={imageScore}
        setImageScore={setImageScore}
      />
    </View>
  );
};

const ImageScreenStyles = StyleSheet.create({});

export default ImageScreen;
