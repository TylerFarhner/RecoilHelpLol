import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

// This is a user component that takes in four props. The children prop allows for any icons or images to render like the canadian flag

const GetToKnowUserComponent = ({
  Title,
  placeholder,
  marginLeft,
  type,
  onChangeText,
  children,
}) => {
  return (
      <View style={styles.UserContainer}>
        <Text style={styles.Label}>{Title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {children}

          <TextInput
            style={[styles.UserTextInput, { marginLeft: marginLeft }]}
            onChangeText={onChangeText}
            value={type}
            fontStyle={type?.length === 0 ? "normal" : "normal"}
            fontWeight={type?.length === 0 ? "300" : "200"}
            placeholderTextColor={"#C4C0C0"}
            fontSize={type?.length === 0 ? "20" : "20"}
            placeholder={placeholder}
            autoCorrect={false}
          />
        </View>
      </View>
  );
};

export default GetToKnowUserComponent;

const styles = StyleSheet.create({
  UserContainer: {
    margin: 10,
    marginRight: 40,
    marginLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#E1E1E1",
  },
  Label: {
    color: "#8E8E93",
    fontWeight: "500",
    fontSize: 14,
  },
  UserTextInput: {
    padding: 10,
    paddingTop: 5,
    paddingLeft: 0,
    fontSize: 18,
    fontWeight: "200",
  },
});
