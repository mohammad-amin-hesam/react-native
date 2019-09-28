import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Freind #10', key: '1'},
    {name: 'Freind #9', key: '2'},
    {name: 'Freind #8', key: '3'},
    {name: 'Freind #7', key: '4'},
    {name: 'Freind #6', key: '5'},
    {name: 'Freind #5', key: '6'},
    {name: 'Freind #4', key: '7'},
    {name: 'Freind #3', key: '8'},
    {name: 'Freind #2', key: '9'},
    {name: 'Freind #1', key: '10'},
  ];

  const renderList = ({item}) => (
    <Text style={styles.textStyle}>{item.name}</Text>
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      renderItem={renderList}
      data={friends}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
