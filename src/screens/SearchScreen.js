import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  console.log(`search term: ${searchTerm}`);
  const searchApi = async (term) => {
    console.log("Hi There");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      setError("");
    } catch (err) {
      setError("Something went wrong");
    }
  };

  //   searchApi('pasta');

  useEffect(() => {
      console.log("first time")
    searchApi("pasta");
  }, []);

  return (
    <View>
      <SearchBar
        term={searchTerm}
        onSearchChange={(newTerm) => setSearchTerm(newTerm)}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      <Text>We have found {results.length} results</Text>
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
