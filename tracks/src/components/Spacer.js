import React from "react";
import { View, StyleSheet } from "react-native";

const Spacer = ({ childern }) => {
  return <View style={styles.spacer}>{childern}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  }
});

export default Spacer;
