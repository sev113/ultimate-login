import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const BoxWrapper = () => {
  return <View style={styles.boxWrapper}></View>;
};

export default BoxWrapper;

const styles = StyleSheet.create({
  boxWrapper: {
    // backgroundColor: "#fff",
    backgroundColor: "transparent",
    width: width * 0.8,
    borderRadius: 25,
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#efe7dc",
  },
});
