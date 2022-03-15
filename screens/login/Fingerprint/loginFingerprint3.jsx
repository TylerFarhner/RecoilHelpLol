import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const LoginFingerprint3 = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.userInfo}>
          {/* TODO: Logic to call and render user.name && user.email */}
          <Text style={styles.userName}>Hello, Camila</Text>
          <Text style={styles.userEmail}>camila@email.com</Text>
        </View>

        {/* Face-ID Component here */}
        {/* TODO: Biometric window shows here
                  IF !ValidLogin navigate('LoginFaceId3'
                  ELSE navigate('Home') ) */}


        {/* Return to Login */}
        <View style={styles.goBack}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text
              style={{
                fontFamily: "Roboto-Medium",
                fontSize: 14,
                color: "#FFFFFF",
              }}
            >
              Use password instead
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginFingerprint3;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#131936",
  },
  container: {
    position: "absolute",
    top: "25%",
    bottom: 50,
    alignItems: "center",
  },
  userInfo: {
    alignItems: "center"
  },
  userName: {
    fontFamily: "Roboto-Medium",
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 18
  },
  userEmail: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    color: "#FFFFFF",
  },
  goBack: {
    alignItems: "center",
    width: 150,
    position: "absolute",
    bottom: 0
  },
});
