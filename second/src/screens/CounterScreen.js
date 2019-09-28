import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [num, setNum] = useState(0);

  return (
    <View>
      <Button title="Increase" onPress={() => setNum(num + 1)} />
      <Button title="Decrease" onPress={() => setNum(num - 1)} />
      <Text>Current Count: {num}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
