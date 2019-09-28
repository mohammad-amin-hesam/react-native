import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text styles={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4
  },
  name: {
    fontWeight: "bold"
  }
});

export default ResultsDetail;
