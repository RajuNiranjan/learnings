import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import icedCoffeImg from "@/assets/images/iced-coffee.png";
const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeImg}
        resizeMethod="cover"
        style={styles.image}>
        <Text style={styles.text}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 52,
  },
});
