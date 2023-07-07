import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import CusTextInput from "../components/CusTextInput";

const { width, height } = Dimensions.get("window");

// const users = [
//   {
//     userName: "Severus",
//     pwd: "123",
//   },
//   {
//     userName: "Ultimate",
//     pwd: "456",
//   },
// ];

const LoginPage = (props) => {
  const [data, setDate] = useState(props.users); //for data storage in any further registeration
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");

  const handleLogin = () => {
    if (userName == props.users.userName && pwd == props.users.pwd) {
      alert("You've successfully login!");
      props.setHomePage(true);
      props.setLoginPage(false);
      // alert(props.homePage);
    } else {
      alert("Go Away!");
    }
  };

  return (
    <View style={styles.boxWrapper}>
      <Image
        source={require("../assets/images/ultimate-logo.png")}
        style={styles.imgStyle}
      ></Image>
      <View style={styles.inputWrapper}>
        <CusTextInput placeholder="Username" setValue={setUserName} />
        <CusTextInput
          placeholder="Password"
          setValue={setPwd}
          secureTextEntry={true}
        />
      </View>
      {/* 
      I used original Button Component from react-native here. 
      There is something to update the button and touchableOpacity in my own Button component.
      */}
      <Button
        title="Log In"
        buttonStyle={{ backgroundColor: "#FE5A17", marginBottom: 30 }}
        onPress={() => {
          handleLogin();
        }}
      />
    </View>
  );
};

export default LoginPage;

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
  imgStyle: {
    marginTop: 30,
    width: 150,
    height: 100,
    padding: 30,
  },
  inputWrapper: {
    height: height * 0.115,
    justifyContent: "space-between",
    marginBottom: 30,
    marginTop: 30,
  },
});
