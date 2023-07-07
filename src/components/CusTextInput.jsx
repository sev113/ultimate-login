import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  onChangeText,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");

const CusTextInput = (props) => {
  return (
    <View>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        style={[styles.input, { ...props.inputStyle }]}
        placeholder={props.placeholder}
        onChangeText={props.setValue}
      />
    </View>
  );
};

export default CusTextInput;

const styles = StyleSheet.create({
  input: {
    width: width * 0.6,
    padding: 5,
    paddingStart: 10,
    paddingEnd: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#efe7dc",
    backgroundColor: "#fff",
  },
});
