import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import ResultDetail from "../components/ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {
  const renderList = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ResultsShow", { id: item.id })}
      >
        <ResultDetail result={item} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={renderList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 15,
    marginBottom: 15
  }
});

export default withNavigation(ResultsList);
