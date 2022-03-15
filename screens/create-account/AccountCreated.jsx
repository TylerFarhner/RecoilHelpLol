import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import AccountCreatedImage from "../../assets/SVG-ICON-Folder/AccountCreatedImage";
import image from "../../assets/SVG-ICON-Folder/ImageBack.png";
import Button from "../../components/global-components/Button";


const AccountCreated = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner__container}>
        <View style={styles.top__container}>
          <Text style={styles.top__main__container__text}>
            You’re all set!{" "}
          </Text>
          <Text style={styles.top__sub__container__text}>
            Your card is on it’s way
          </Text>
        </View>
        <View style={styles.middle__container}>
          <AccountCreatedImage />
          <Text style={styles.top__sub__container__text}>
            You can now add funds to your account below
          </Text>
        </View>
        <View style={styles.bottom__container}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.Image}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 50,
              }}
            >
              <Button title="Load money onto my account" onClick={() => {}} />
              <TouchableOpacity activeOpacity={0.8}>
                <Text
                  style={{ color: "white", marginTop: 30, fontWeight: "400" }}
                >
                  Check my balance
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default AccountCreated;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner__container: {
    flex: 1,
  },
  top__container: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  middle__container: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  top__main__container__text: {
    color: "#394168",
    fontSize: 28,
    fontWeight: "500",
  },
  top__sub__container__text: {
    color: "#404040",
    fontWeight: "300",
    fontSize: 21,
    marginTop: 10,
    textAlign: "center",
    width: "80%",
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  bottom__container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
