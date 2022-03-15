import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Modal = () => {
  return (
    <View style={styles.walletContainer}>
      <Text> Modal</Text>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  walletContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
