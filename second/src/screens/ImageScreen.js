import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetails";

const ImageScreen = props => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/img/forest.jpg")}
        score={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/img/beach.jpg")}
        score={7}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/img/mountain.jpg")}
        score={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
