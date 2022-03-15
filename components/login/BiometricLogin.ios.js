import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import FaceIDImage from "../login/FaceIDImage";

const BiometricLogin = () => {
  const navigation = useNavigation();

  return (
    <View
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("LoginFaceId2")}
        style={{ alignItems: "center" }}
      >
        <FaceIDImage />
        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: "Roboto-Light",
            fontSize: 16,
            marginTop: 15,
          }}
        >
          Use Face ID to login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BiometricLogin;

const styles = StyleSheet.create({});
