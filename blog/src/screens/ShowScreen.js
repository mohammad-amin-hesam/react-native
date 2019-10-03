import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import EvilIconts from "react-native-vector-icons/EvilIcons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const id = navigation.getParam("id");

  const blogPost = state.find(blogPost => blogPost._id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

// part of 13 is finished and 14 starts :)

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity>
        <EvilIconts
          name="pencil"
          size={40}
          style={styles.createIcon}
          onPress={() =>
            navigation.navigate("Edit", { id: navigation.getParam("id") })
          }
        />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
