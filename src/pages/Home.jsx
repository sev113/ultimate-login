import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const Home = (props) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  return (
    <View style={styles.home_wrapper}>
      <Text style={{ fontSize: 18, textAlign: "center" }}>
        Hello,
        <Text style={{ fontWeight: "bold" }}> {props.users.userName}</Text>!
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 30, textAlign: "center" }}>
        Welcome to Ultimate Solutions
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Date: {day}/{month}/{year}
      </Text>
      <Text style={{ fontSize: 18 }}>Job Description</Text>
      <Text>---------------------------------</Text>
      <FlatList
        data={[
          { key: "1. Prepare for the project" },
          { key: "2. Drink Water" },
          { key: "3. Throw Rabbish" },
          { key: "4. Chat with mates" },
          { key: "5. Talk to the spaceman" },
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home_wrapper: {
    backgroundColor: "rgba(242, 242, 242, 0.7)",
    width: width * 0.8,
    height: height * 0.6,
    borderRadius: 25,
    // alignItems: "center",
    padding: 30,
    borderWidth: 1,
    borderColor: "#efe7dc",
  },
});
