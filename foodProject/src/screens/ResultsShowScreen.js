import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import useSingle from "../hooks/useSingle";

const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [list, isFetching] = useSingle(id);

  if (isFetching) return <Text>Loading...</Text>;

  const renderList = ({ item }) => {
    return <Image source={{ uri: item }} style={styles.image} />;
  };

  return (
    <View>
      <Text>{list.name}</Text>
      <FlatList
        data={list.photos}
        keyExtractor={item => item}
        renderItem={renderList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default ResultShowScreen;
