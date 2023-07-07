import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

const { width, height } = Dimensions.get("window");

const Radio = (props) => {
  const [checked, setChecked] = useState(0);
  const [type, setType] = useState(""); // To get value when checked
  return (
    <View style={styles.button_wrapper}>
      {props.values.map((value, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setChecked(index);
              setType(value);
            }}
          >
            <View
              style={{
                height: 20,
                width: 20,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "#14A20C",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {index == checked ? (
                <View
                  style={{
                    height: 13,
                    width: 13,
                    borderRadius: 8,
                    backgroundColor: "#FE5A17",
                  }}
                ></View>
              ) : null}
            </View>
            <Text style={styles.radio_text}>{value}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Radio;

const styles = StyleSheet.create({
  button_wrapper: {
    width: width * 0.6,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  radio_text: {
    marginLeft: 10,
    marginRight: 30,
    textTransform: "capitalize",
  },
});
