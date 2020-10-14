import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <View>
      <SearchBar
        term={searchTerm}
        onSearchChange={(newTerm) => setSearchTerm(newTerm)}
      />
      <Text>Hi There {searchTerm}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
