import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "../components/ResultsDetails";

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        data={results}
        keyExtractor={(result) => {
          result.id;
          console.log(result.id);
        }}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginStart: 15,
    marginBottom: 5,
  },
  containerStyle: {
    marginBottom: 10,
  },
});

export default ResultsList;
