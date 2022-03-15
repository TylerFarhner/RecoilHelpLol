import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRecoilState } from "recoil";
import ArrowBack from "../../assets/SVG-ICON-Folder/ArrowBack";
import CheckedIcon from "../../assets/SVG-ICON-Folder/CheckedIcon";
import Button from "../../components/global-components/Button";
import { CheckPermission, UserInfo } from "../../Recoil/atoms/UserSignUp";

const TermsAndConditions = ({ navigation }) => {
  const [confirm, setConfirm] = useState(false);
  const [userOption, setUserOption] = useRecoilState(CheckPermission);

  const handleBack = () => {
    navigation.navigate("HomeWalletScreen");
  };

  const AddConfirm = (id) => {
    if (!userOption.includes(id)) {
      setUserOption((userOption) => [...userOption, id]);
    } else {
      setUserOption((userOption) =>
        userOption.filter(function (Id) {
          return Id !== id;
        })
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.icon__container}>
        <TouchableOpacity onPress={handleBack}>
          <ArrowBack />
        </TouchableOpacity>

        <Text style={styles.next__text}>Terms and Condition</Text>
      </View>
      <View style={styles.TermsAndCondition}>
        <SafeAreaView>
          <ScrollView style={{}}>
            <Text style={{ fontSize: 16, fontWeight: "300", color: "#404040" }}>
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              {"\n"}
              {"\n"}
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC.
              {"\n"}
              {"\n"}
              This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text.
              {"\n"}
              {"\n"}
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC.
              {"\n"}
              {"\n"}
              This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up
              {"\n"}
              {"\n"}
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              {"\n"}
              {"\n"}
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32. Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the
              {"\n"}
              {"\n"}
              word in classical literature, discovered the undoubtable source.
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes
              {"\n"}
              {"\n"}
              from a line in section 1.10.32. Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin
              words, consectetur, from a Lorem Ipsum passage, and going through
              the cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum"
              {"\n"}
              {"\n"}
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
              sit amet..", comes from a line in section 1.10.32.
            </Text>
          </ScrollView>
        </SafeAreaView>
      </View>
      <View>
        <View
          style={{
            paddingLeft: 50,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={
              userOption.includes(5) ? styles.rbStyleCheck : styles.rbStyle
            }
            onPress={() => AddConfirm(5)}
          >
            {userOption.includes(5) ? <CheckedIcon /> : null}
          </TouchableOpacity>
          <Text style={{ color: "#202020", fontSize: 16 }}>
            I agree with the terms and condition
          </Text>
        </View>
        <Button
          title="Continue"
          onClick={() => {
            navigation.navigate("ReCheckAddress");
          }}
        />
      </View>
    </View>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  icon__container: {
    flexDirection: "row",
    width: "100%",
    padding: 25,
  },
  next__text: {
    width: "100%",
    color: "#394168",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "400",
    flex: 1,
    justifyContent: "center",
  },
  TermsAndCondition: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 0.9,
  },
  rbStyleCheck: {
    height: 32,
    width: 32,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#3DAEEE",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3DAEEE",
    marginRight: 10,
  },
  rbStyle: {
    height: 32,
    width: 32,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: "#3DAEEE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
});
