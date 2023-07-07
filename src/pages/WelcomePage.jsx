import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";

const { width, height } = Dimensions.get("window");

const WelcomePage = (props) => {
  return (
    <View style={styles.pageWrapper}>
      <View style={styles.boxWrapper}>
        <View style={styles.imgWrapper}>
          <Image
            source={require("../assets/images/ultimate-logo.png")}
            style={styles.imgStyle}
          ></Image>
        </View>
        <Text style={styles.header}>Welcome to ultimate solution</Text>
        <View style={styles.buttonWrapper}>
          <Button
            title="Log In"
            buttonStyle={{ backgroundColor: "#FE5A17" }}
            onPress={() => {
              props.setLoginPage(true);
              props.setWelcomePage(false);
            }}
          />
          <Button
            title="Sign Up"
            buttonStyle={{ backgroundColor: "#14A20C" }}
            onPress={() => {
              props.setSignUpPage(true);
              props.setWelcomePage(false);
            }}
          />
        </View>
      </View>
      <Text style={styles.footerWrapper}>v-1.0</Text>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  pageWrapper: {
    height: height,
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxWrapper: {
    backgroundColor: "rgba(242, 242, 242, 0.7)",
    width: width * 0.8,
    borderRadius: 25,
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#efe7dc",
    top: 180,
  },
  imgStyle: {
    width: 150,
    height: 100,
    padding: 30,
  },
  imgWrapper: { padding: 50 },
  header: {
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: 15,
  },
  buttonWrapper: {
    height: height * 0.12,
    marginTop: 30,
    marginBottom: 30,
    justifyContent: "space-between",
  },
  footerWrapper: {},
});
