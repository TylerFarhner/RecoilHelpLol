import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const LoginFaceId2 = (props) => {
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

        {/* TESTING: Nav to !ValidLogin */}
        <View style={{ height: 163, width: 163}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('LoginFaceId3')}
          >
            <Text style={{color: 'red' }}>FID 3</Text>
          </TouchableOpacity>
        </View>

        {/* Return to Login */}
        <View style={styles.goBack}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text
              style={{
                fontFamily: "Roboto-Medium",
                fontSize: 16,
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

export default LoginFaceId2;

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
    alignItems: "center",
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
    marginTop: 291,
  },
});
