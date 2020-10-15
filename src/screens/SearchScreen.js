import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useBusinesses";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={searchTerm}
        onSearchChange={(newTerm) => setSearchTerm(newTerm)}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList title="Cost Effective" results={filterResultsByPrice("$")} />
      <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
      <ResultsList title="Big Spender!" results={filterResultsByPrice("$$$")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
