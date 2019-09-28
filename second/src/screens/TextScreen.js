import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  const handleText = val => {
    setName(val);
  };

  return (
    <View>
      <Text>Enter name: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize={"none"}
        autoCorrect={false}
        value={name}
        onChangeText={handleText}
      />
      <Text>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    padding: 15
  }
});

export default TextScreen;
