import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend #1", age: 40 },
    { name: "friend #2", age: 12 },
    { name: "friend #3", age: 34 },
    { name: "friend #4", age: 43 },
    { name: "friend #5", age: 99 },
    { name: "friend #6", age: 24 },
    { name: "friend #7", age: 32 },
    { name: "friend #8", age: 54 },
    { name: "friend #9", age: 12 },
  ];
  return (
    <View>
      <Text>List screen</Text>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={listStyle.textStyle}>
              {item.name} - age: {item.age}
            </Text>
          );
        }}
      ></FlatList>
    </View>
  );
};

const listStyle = StyleSheet.create({
  textStyle: { marginVertical: 50 },
});

export default ListScreen;
