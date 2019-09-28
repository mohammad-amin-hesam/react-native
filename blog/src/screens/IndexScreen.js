import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import Feather from "react-native-vector-icons/Feather";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  const renderList = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.title}>{item.title}</Text>
        <Feather style={styles.icon} name="trash" />
      </View>
    );
  };

  return (
    <View>
      <Text>Index page</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={renderList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
