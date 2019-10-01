import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Context } from "../context/BlogContext";
import Feather from "react-native-vector-icons/Feather";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener("didFocus", () => {
      getBlogPosts();
    });

    return () => listener.remove();
  }, []);

  const renderList = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Show", { id: item._id })}
      >
        <View style={styles.row}>
          <Text style={styles.title}>
            {item.title} - {item._id}
          </Text>
          <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
            <Feather style={styles.icon} name="trash" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost._id}
        renderItem={renderList}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity>
        <Feather
          name="plus"
          size={30}
          style={styles.createIcon}
          onPress={() => navigation.navigate("Create")}
        />
      </TouchableOpacity>
    )
  };
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
  createIcon: {
    marginRight: 15
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
