import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  console.log(id);

  return (
    <View>
      <Text>Results Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
