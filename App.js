import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";
import WelcomePage from "./src/pages/WelcomePage";
import LoginPage from "./src/pages/LoginPage";
import RegisterForm from "./src/pages/RegisterForm";
import Home from "./src/pages/Home";
import { users } from "./src/assets/users";

// BRO YOU STILL NEED TO CHANGE FONT FAMILY TO POPPINS ***

export default function App() {
  const [welcomePage, setWelcomePage] = useState(true);
  const [loginPage, setLoginPage] = useState(false);
  const [signUpPage, setSignUpPage] = useState(false);
  const [homePage, setHomePage] = useState(false);

  const users = {
    userName: "Sev",
    pwd: "123",
  };

  return (
    <View style={styles.container}>
      {/* <Text>Hello World</Text> */}
      <ImageBackground
        source={require("./src/assets/images/ultimate-login-bg.png")}
        resizeMode="cover"
        style={styles.bgImg}
      >
        {welcomePage && (
          <WelcomePage
            setLoginPage={setLoginPage}
            setSignUpPage={setSignUpPage}
            setWelcomePage={setWelcomePage}
          />
        )}

        {loginPage && (
          <LoginPage
            users={users}
            homePage={homePage}
            setHomePage={setHomePage}
            setLoginPage={setLoginPage}
          />
        )}
        {signUpPage && <RegisterForm />}
        {homePage && <Home users={users} />}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // fontFamily: "Poppins",
    flex: 1,
    // marginTop: StatusBar.currentHeight,
  },

  bgImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
