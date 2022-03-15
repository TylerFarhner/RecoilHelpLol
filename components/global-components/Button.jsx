import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ title, onClick }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={onClick}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    // width: "70%",
    width: 289,
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    // padding: 15,
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 30,
    backgroundColor: "#8074FD",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "500",
    color: "white",
    fontSize: 18,
  },
});

// This is a global button component that takes in a prop of title and a function for onPress
