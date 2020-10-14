import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onSearchChange }) => {
  return (
    <View style={styles.viewStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newTerm) => {
          onSearchChange(newTerm);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#D3D3D3",
    height: 50,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
