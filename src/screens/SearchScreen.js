import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      setError('');
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <View>
      <SearchBar
        term={searchTerm}
        onSearchChange={(newTerm) => setSearchTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
      <Text>We have found {results.length} results</Text>
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
