import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = props => {
  const { navigation } = props;

  const handlePress = () => {
    navigation.navigate("Components");
  };

  return (
    <View>
      <Text style={styles.txt}>this is home screen</Text>
      <Button
        onPress={handlePress}
        title="Go to Components Demo"
        style={styles.button}
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Text")}
        title="Go to Text Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Box")}
        title="Go to Box Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 30
  },
  txt: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30
  }
});

export default HomeScreen;
