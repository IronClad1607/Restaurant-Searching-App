import React from "react";
import { Text, View, StyleSheet, FlatList,TouchableOpacity } from "react-native";
import ResultsDetail from "../components/ResultsDetails";

const ResultsList = ({ title, results, navigation }) => {
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
          return (
            <TouchableOpacity onPress={() => {
                navigation.navigate('Result')
            }}>
                <ResultsDetail result={item} />
            </TouchableOpacity>
          )
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
