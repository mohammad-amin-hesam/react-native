import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetails = props => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
      <Text>Image Score: {props.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetails;
