import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import CusTextInput from "../components/CusTextInput";
import Button from "../components/Button";
import Radio from "../components/Radio";
// import {} from "";

const { width, height } = Dimensions.get("window");

const RegisterForm = () => {
  return (
    <View style={styles.boxWrapper}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Hello!</Text>
        <Text>Create a new account</Text>
      </View>
      {/* <View style={styles.formWrapper}> */}
      <CusTextInput placeholder="Username" />
      <CusTextInput placeholder="NRC Number" />
      <CusTextInput placeholder="Phone Number" />
      <CusTextInput placeholder="Email" />
      <CusTextInput placeholder="Address" />
      {/* Here needs to be dropdowns */}
      {/* Still need to update using flexbox */}
      <View
        style={{
          flexDirection: "row",
          width: width * 0.6,
          justifyContent: "space-between",
        }}
      >
        <CusTextInput inputStyle={{ width: width * 0.29 }} placeholder="City" />
        <CusTextInput
          inputStyle={{ width: width * 0.29 }}
          placeholder="Township"
        />
      </View>
      <CusTextInput placeholder="Role" />
      {/* Here comes some radios */}
      <Radio values={["staff", "internship"]} />
      <Button title="Register" buttonStyle={{ backgroundColor: "#14A20C" }} />
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  boxWrapper: {
    backgroundColor: "rgba(242, 242, 242, 0.7)",
    width: width * 0.8,
    borderRadius: 25,
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#efe7dc",
  },
  header: {
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: 15,
    marginBottom: 10,
  },
  headerWrapper: {
    width: width * 0.6,
    margin: 20,
  },
  formWrapper: {
    // backgroundColor: "green",
    height: height * 0.55,
    // justifyContent: "space-between",
  },
});
