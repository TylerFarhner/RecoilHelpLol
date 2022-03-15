import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";


const LoginFingerprint2 = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.userInfo}>
          {/* TODO: Logic to call and render user.name && user.email */}
          <Text style={styles.userName}>Hello, Camila</Text>
          <Text style={styles.userEmail}>camila@email.com</Text>
        </View>

        {/* Fingerprint Component here */}
        {/* TODO: Biometric window shows here
                  IF !ValidLogin navigate('LoginFingerprint3'
                  ELSE navigate('Home') ) */}

        {/* TESTING: Nav to !ValidLogin */}
        <View style={{ height: 136, width: 136 }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("LoginFingerprint3")}
          >
            <Text style={{ color: 'red' }}>FGP 3</Text>
          </TouchableOpacity>
        </View>

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

export default LoginFingerprint2;

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
    // backgroundColor: 'red'
  },
  userInfo: {
    alignItems: "center",
    marginBottom: 82
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
    position: 'absolute',
    bottom: 0
  },
});
