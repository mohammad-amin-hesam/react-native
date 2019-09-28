import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = props => {
  const [colors, setColors] = useState([]);

  const renderSquers = ({ item }) => {
    return (
      <View
        key={item}
        style={{ height: 100, width: 100, backgroundColor: item }}
      ></View>
    );
  };

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => setColors([...colors, randomRgb()])}
      />
      {colors && <FlatList renderItem={renderSquers} data={colors} />}
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
