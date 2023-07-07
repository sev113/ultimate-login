import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  onPress,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[styles.btn, { ...props.buttonStyle }]}
      onPress={() => props.onPress()}
    >
      <Text style={styles.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: width * 0.6,
    height: height * 0.05,
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#ff9",
    marginTop: 10,
    marginBottom: 10,
  },
  textStyle: {
    color: "#fff",
    textAlign: "center",
  },
});
