import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { CheckBox, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import ArrowBack from '../../assets/SVG-ICON-Folder/ArrowBack'
import CanadianFlag from "../../assets/SVG-ICON-Folder/CanadianFlag";
import Button from "../../components/global-components/Button";
import FaceID from "../../assets/SVG-ICON-Folder/FaceID";
import CheckedIcon from "../../assets/SVG-ICON-Folder/CheckedIcon";
import ArrowRight from "../../assets/SVG-ICON-Folder/ArrowRight";
import { useRecoilState } from "recoil";
import { UserInfo, CheckPermission } from "../../Recoil/atoms/UserSignUp";
import GetToKnowUserComponent from "./GetToKnowUserComponent";
import UserAddressComponent from "./UserAddressComponent";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CreateAccount = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const handleBack = () => {
    if (count === 0) {
      navigation.navigate("Login");
    } else {
      setCount(count - 1);
    }
  };

  const RenderComponent = (count) => {
    switch (count) {
      case 0:
        return <FirstAndLastName />;
      case 1:
        return <PhoneNumberComponent />;
      case 2:
        return <STPCodeInput />;
      case 3:
        return <EmailAddressComponent />;
      case 4:
        return <STPCodeInput count={count} />;
      case 5:
        return <NewPasswordComponent />;
      case 6:
        return <EnableFaceId count={count} setCount={setCount} />;
      case 7:
        return <GetToKnowUser />;
      case 8:
        return <GetUserAddress />;
      case 9:
        return <GetUserPermission count={count} setCount={setCount} />;
      default:
        return <FirstAndLastName />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.icon__container}>
        <TouchableOpacity onPress={handleBack}>
          <ArrowBack />
        </TouchableOpacity>
        {/* {count % 2 === 1 ? ( */}
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text style={styles.next__text}>Next</Text>
        </TouchableOpacity>
        {/* ) : null} */}
      </View>
      {RenderComponent(count)}
      {/* The above component is a switch statement that renders every component */}
    </View>
  );
};

const FirstAndLastName = () => {
  const [
    {
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      password,
      confirm_password,
      DOB,
      Intended_Use,
      Occupation,
      Address_line__one,
      Unit,
      City,
      Postal_Code,
      Province,
    },
    setUserInfo,
  ] = useRecoilState(UserInfo);
  return (
    <View style={styles.Input__Container}>
      <View>
        <Text style={styles.text__one}>Hello,</Text>
      </View>
      <Text style={styles.text__two}>Let's start with some basic info</Text>
      <View style={styles.container__input}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setUserInfo({
              firstName: value,
              lastName,
              phoneNumber,
              emailAddress,
              password,
              confirm_password,
              DOB,
              Intended_Use,
              Occupation,
              Address_line__one,
              Unit,
              City,
              Postal_Code,
              Province,
            });
          }}
          value={firstName}
          fontStyle={firstName?.length === 0 ? "normal" : "normal"}
          fontWeight={firstName?.length === 0 ? "300" : "200"}
          placeholderTextColor={"#C4C0C0"}
          fontSize={firstName?.length === 0 ? "20" : "20"}
          placeholder="First Name"
          autoCorrect={false}
          secureTextEntry={false}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setUserInfo({
              firstName,
              lastName: value,
              phoneNumber,
              emailAddress,
              password,
              confirm_password,
              DOB,
              Intended_Use,
              Occupation,
              Address_line__one,
              Unit,
              City,
              Postal_Code,
              Province,
            });
          }}
          value={lastName}
          placeholder="Last Name"
          fontStyle={lastName?.length === 0 ? "roboto" : "normal"}
          fontWeight={lastName?.length === 0 ? "300" : "200"}
          placeholderTextColor={"#C4C0C0"}
          fontSize={lastName?.length === 0 ? "20" : "20"}
          autoCorrect={false}
          secureTextEntry={false}
        />
      </View>
    </View>
  );
};

const PhoneNumberComponent = () => {
  const [
    {
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      password,
      confirm_password,
      DOB,
      Intended_Use,
      Occupation,
      Address_line__one,
      Unit,
      City,
      Postal_Code,
      Province,
    },
    setUserInfo,
  ] = useRecoilState(UserInfo);
  return (
    <View style={styles.Input__Container}>
      <View>
        <Text style={styles.text__three}>
          What is your <Text style={styles.mobile}>mobile number</Text>?
        </Text>
      </View>
      <Text style={styles.text__two}>We will send you a verification code</Text>
      <View style={styles.phone__number}>
        <View style={styles.canadian__container}>
          <CanadianFlag />
        </View>

        <View style={styles.phone__container}>
          <TextInput
            value={phoneNumber}
            placeholder="Mobile Number"
            fontSize={phoneNumber?.length === 0 ? "20" : "20"}
            onChangeText={(value) => {
              setUserInfo({
                firstName,
                lastName,
                phoneNumber: value,
                emailAddress,
                password,
                confirm_password,
                DOB,
                Intended_Use,
                Occupation,
                Address_line__one,
                Unit,
                City,
                Postal_Code,
                Province,
              });
            }}
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
};

const STPCodeInput = ({ count }) => {
  let textInput = useRef();
  const lengthInput = 4;
  const [internalVal, setInternalVal] = useState("");

  const onChangeText = (value) => {
    setInternalVal(value);
  };

  useEffect(() => {
    textInput.focus();
  }, []);
  return (
    <>
      <View style={styles.Input__Container}>
        <View style={styles.heading}>
          <Text style={styles.text__three}>
            Enter the <Text style={styles.mobile}>verification code</Text> sent
            to your {count === 4 ? "email address" : "mobile number"}
          </Text>
        </View>
      </View>
      <KeyboardAvoidingView
        keyboardVerticalOffset={10}
        style={styles.containerAvoidingView}
      >
        <View style={styles.inputOuterContainer}>
          <TextInput
            ref={(input) => (textInput = input)}
            onChangeText={onChangeText}
            style={styles.STPInputCode}
            value={internalVal}
            maxLength={lengthInput}
            returnKeyType="done"
            keyboardType="numeric"
          />
          <View style={styles.containerInput}>
            {Array(lengthInput)
              .fill()
              .map((data, index) => (
                <View style={styles.cellView} key={index}>
                  <Text
                    style={styles.cellText}
                    onPress={() => textInput.focus()}
                  >
                    {internalVal && internalVal.length > 0
                      ? internalVal[index]
                      : ""}
                  </Text>
                </View>
              ))}
          </View>
          <Button title="verify" />

          <View style={styles.code}>
            <Text>Didn't receive the code</Text>
            <TouchableOpacity style={styles.ResenCodeBtn} activeOpacity={0.6}>
              <Text style={styles.Resend}>Resend code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const EmailAddressComponent = () => {
  const [
    {
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      password,
      confirm_password,
      DOB,
      Intended_Use,
      Occupation,
      Address_line__one,
      Unit,
      City,
      Postal_Code,
      Province,
    },
    setUserInfo,
  ] = useRecoilState(UserInfo);
  return (
    <View style={styles.Input__Container}>
      <View>
        <Text style={styles.text__three}>
          What is your <Text style={styles.mobile}>email address</Text>?
        </Text>
      </View>
      <Text style={styles.text__two}>We will send you a verification code</Text>
      <View style={styles.phone__number}>
        <View style={styles.phone__container}>
          <TextInput
            value={emailAddress}
            placeholder="Email address"
            fontSize={emailAddress?.length === 0 ? "20" : "20"}
            onChangeText={(value) => {
              setUserInfo({
                firstName,
                lastName,
                phoneNumber,
                emailAddress: value,
                password,
                confirm_password,
                DOB,
                Intended_Use,
                Occupation,
                Address_line__one,
                Unit,
                City,
                Postal_Code,
                Province,
              });
            }}
            keyboardType="email-address"
          />
        </View>
      </View>
    </View>
  );
};

const NewPasswordComponent = ({ count }) => {
  const [
    {
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      password,
      confirm_password,
      DOB,
      Intended_Use,
      Occupation,
      Address_line__one,
      Unit,
      City,
      Postal_Code,
      Province,
    },
    setUserInfo,
  ] = useRecoilState(UserInfo);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const checkPassword = () => {
    setShowPassword(false);
    setError(false);
    if (password != confirm_password) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <View style={styles.Input__Container}>
      <Text style={styles.text__three}>
        Now create a <Text style={styles.mobile}>new password</Text>
      </Text>
      <View style={styles.container__input}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setUserInfo({
              firstName,
              lastName,
              phoneNumber,
              emailAddress,
              password: value,
              confirm_password,
              DOB,
              Intended_Use,
              Occupation,
              Address_line__one,
              Unit,
              City,
              Postal_Code,
              Province,
            });
          }}
          value={password}
          fontStyle={password?.length === 0 ? "normal" : "normal"}
          fontWeight={password?.length === 0 ? "light" : "light"}
          placeholderTextColor={"#C4C0C0"}
          fontSize={password?.length === 0 ? "20" : "20"}
          placeholder="Password"
          autoCorrect={false}
          secureTextEntry={false}
          secureTextEntry={!showPassword ? true : false}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setUserInfo({
              firstName,
              lastName,
              phoneNumber,
              emailAddress,
              password,
              confirm_password: value,
              DOB,
              Intended_Use,
              Occupation,
              Address_line__one,
              Unit,
              City,
              Postal_Code,
              Province,
            });
          }}
          value={confirm_password}
          placeholder="Confirm password"
          fontStyle={confirm_password?.length === 0 ? "roboto" : "normal"}
          placeholderTextColor={"#C4C0C0"}
          fontSize={confirm_password?.length === 0 ? "20" : "20"}
          autoCorrect={false}
          secureTextEntry={false}
          secureTextEntry={!showPassword ? true : false}
        />
        <Text style={styles.characterCount}>
          {password?.length < 8 ? (
            "At least 8 characters"
          ) : error ? (
            <Text style={{ color: "red" }}>
              Passwords didn't match. Try again.
            </Text>
          ) : (
            "Passwords matched"
          )}
        </Text>
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          activeOpacity={0.8}
        >
          <View style={styles.checkBoxContainer}>
            <CheckBox
              containerStyle={[
                {
                  marginLeft: 0,
                  marginRight: 0,
                  paddingLeft: 0,
                },
              ]}
              checked={showPassword}
              onPress={() => setShowPassword(!showPassword)}
            />
            <Text style={styles.showPasswordText}>Show password</Text>
          </View>
        </TouchableOpacity>
        <Button title="Save password" onClick={checkPassword} />
      </View>
    </View>
  );
};
const EnableFaceId = ({ count, setCount }) => {
  return (
    <>
      <View style={styles.Input__Container}>
        <View>
          <Text style={styles.text__three}>
            Enable <Text style={styles.mobile}>Face ID</Text> to log into your
            account?
          </Text>
        </View>
      </View>
      <View style={styles.FaceIDCountainer}>
        <View style={styles.FaceIDSVG}>
          <FaceID />
        </View>
        <Button title="Enable Face ID" onClick={() => {}} />
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          activeOpacity={0.8}
        >
          <Text style={styles.later}>Maybe later</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const GetToKnowUser = () => {
  const [
    {
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      password,
      confirm_password,
      DOB,
      Intended_Use,
      Occupation,
      Address_line__one,
      Unit,
      City,
      Postal_Code,
      Province,
    },
    setUserInfo,
  ] = useRecoilState(UserInfo);

  return (
    <View style={styles.Input__User__Container}>
      <View style={styles.User__Input__Container}>
        <View>
          <Text style={styles.text__three}>Now let's get to know you</Text>
        </View>
        <KeyboardAwareScrollView enableOnAndroid>
          <View style={styles.user__wrapper}>
            <GetToKnowUserComponent
              Title="First legal name"
              placeholder="First name"
              onChangeText={(value) => {
                setUserInfo({
                  firstName: value,
                  lastName,
                  phoneNumber,
                  emailAddress,
                  password,
                  confirm_password,
                  DOB,
                  Intended_Use,
                  Occupation,
                  Address_line__one,
                  Unit,
                  City,
                  Postal_Code,
                  Province,
                });
              }}
              type={firstName}
            />

            <GetToKnowUserComponent
              Title="Last name"
              placeholder="Last name"
              onChangeText={(value) => {
                setUserInfo({
                  firstName,
                  lastName: value,
                  phoneNumber,
                  emailAddress,
                  password,
                  confirm_password,
                  DOB,
                  Intended_Use,
                  Occupation,
                  Address_line__one,
                  Unit,
                  City,
                  Postal_Code,
                  Province,
                });
              }}
              type={lastName}
            />

            <GetToKnowUserComponent
              placeholder="Date of birth"
              onChangeText={(value) => {
                setUserInfo({
                  firstName,
                  lastName,
                  phoneNumber,
                  emailAddress,
                  password,
                  confirm_password,
                  DOB: value,
                  Intended_Use,
                  Occupation,
                  Address_line__one,
                  Unit,
                  City,
                  Postal_Code,
                  Province,
                });
              }}
              type={DOB}
            />
            <GetToKnowUserComponent
              Title="Mobile number"
              placeholder="Mobile number"
              marginLeft={10}
              onChangeText={(value) => {
                setUserInfo({
                  firstName,
                  lastName,
                  phoneNumber: value,
                  emailAddress,
                  password,
                  confirm_password,
                  DOB,
                  Intended_Use,
                  Occupation,
                  Address_line__one,
                  Unit,
                  City,
                  Postal_Code,
                  Province,
                });
              }}
              type={phoneNumber}
            >
              <CanadianFlag />
            </GetToKnowUserComponent>
            <GetToKnowUserComponent
              placeholder="Intended use"
              onChangeText={(value) => {
                setUserInfo({
                  firstName,
                  lastName,
                  phoneNumber,
                  emailAddress,
                  password,
                  confirm_password,
                  DOB,
                  Intended_Use: value,
                  Occupation,
                  Address_line__one,
                  Unit,
                  City,
                  Postal_Code,
                  Province,
                });
              }}
              type={Intended_Use}
            />
            <GetToKnowUserComponent
              placeholder="Occupation"
              onChangeText={(value) => {
                setUserInfo({
                  firstName,
                  lastName,
                  phoneNumber,
                  emailAddress,
                  password,
                  confirm_password,
                  DOB,
                  Intended_Use,
                  Occupation: value,
                });
              }}
              type={Occupation}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

const GetUserAddress = () => {
  const [
    { Address_line__one, Unit, City, Postal_Code, Province },
    setUserInfo,
  ] = useRecoilState(UserInfo);

  return (
    <View style={styles.Input__User__Container}>
      <View style={styles.User__Input__Container}>
        <View>
          <Text style={styles.text__three}>
            What is your <Text style={styles.mobile}>address</Text>?
          </Text>
        </View>
        <KeyboardAwareScrollView enableOnAndroid>
          <View>
            <UserAddressComponent
              placeholder="Address line 1"
              onChangeText={(value) => {
                setUserInfo({
                  Address_line__one: value,
                  Unit,
                  City,
                  Postal_Code,
                  Province,
                });
              }}
              type={Address_line__one}
            />
            <UserAddressComponent
              placeholder="Unit/suite/apt/PO Box (optional)"
              onChangeText={(value) => {
                setUserInfo({
                  Address_line__one,
                  Unit: value,
                  City,
                  Postal_Code,
                  Province,
                });
              }}
              type={Unit}
            />
            <UserAddressComponent
              placeholder="City"
              onChangeText={(value) => {
                setUserInfo({
                  Address_line__one,
                  Unit,
                  City: value,
                  Postal_Code,
                  Province,
                });
              }}
              type={City}
            />
            <UserAddressComponent
              placeholder="Postal code"
              onChangeText={(value) => {
                setUserInfo({
                  Address_line__one,
                  Unit,
                  City,
                  Postal_Code: value,
                  Province,
                });
              }}
              type={Postal_Code}
            />
            <UserAddressComponent
              placeholder="Province"
              onChangeText={(value) => {
                setUserInfo({
                  Address_line__one,
                  Unit,
                  City,
                  Postal_Code,
                  Province: value,
                });
              }}
              type={Province}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

const GetUserPermission = ({ setCount, count }) => {
  const [check, setChecked] = useState(false);
  const [userOption, setUserOption] = useRecoilState(CheckPermission);

  const CheckingConfirm = [
    {
      id: 1,
      Disclaimer: "This account is for myself",
      SubDisclaimer: "Third Party Disclaimer",
    },
    {
      id: 2,
      Disclaimer: "Foreign Tax Disclaimer",
      SubDisclaimer: "I pay income taxes in Canada or U.S.",
    },
    {
      id: 3,
      Disclaimer: "Cardholder agreement",
      SubDisclaimer:
        "I agree to the terms of the Cardholder Agreement and receiving it electronically",
      Read: "Read Agreement",
    },
    {
      id: 4,
      Disclaimer: "Terms of Use & Privacy Policy",
      SubDisclaimer: "Third Party Disclaimer",
      Read: "Read Terms and Policy",
    },
  ];

  const CheckUserPermission = () => {
    if (userOption.length === 4) {
      setCount(count - 1);
    }
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
    <View style={styles.Input__User__Container}>
      <View style={styles.User__Input__Container}>
        <View>
          <Text style={styles.text__three}>
            Please <Text style={styles.mobile}>confirm</Text> the information
            below
          </Text>
        </View>
        <View>
          {CheckingConfirm.map(
            ({ Disclaimer, SubDisclaimer, Read, id }, index) => (
              <View style={styles.rbWrapper} key={index}>
                <TouchableOpacity
                  style={
                    userOption.includes(id)
                      ? styles.rbStyleCheck
                      : styles.rbStyle
                  }
                  onPress={() => AddConfirm(id)}
                >
                  {userOption.includes(id) ? <CheckedIcon /> : null}
                </TouchableOpacity>
                <View style={styles.rbTextWrapper}>
                  <Text style={styles.rbText}>{Disclaimer}</Text>
                  <Text style={styles.rbSmallText}>{SubDisclaimer}</Text>
                  {Read ? (
                    <View style={styles.AgreementContainer}>
                      <Text style={styles.AgreementText}>{Read}</Text>
                      <ArrowRight />
                    </View>
                  ) : null}
                </View>
              </View>
            )
          )}
        </View>
      </View>

      <Button title="Confirm" onClick={CheckUserPermission} />
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flex: 1,
    paddingTop: 40,
  },
  icon__container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 25,
  },
  next__text: {
    color: "#3DAEEE",
    fontSize: 17,
  },
  Input__Container: {
    position: "absolute",
    top: "25%",
    width: "100%",
    paddingLeft: 35,
  },
  heading: {
    paddingRight: 20,
  },
  containerAvoidingView: {},
  text__one: {
    color: "#394168",
    fontWeight: "600",
    fontSize: 22,
    paddingBottom: 10,
  },
  text__two: {
    color: "#394168",
    fontSize: 16,
    fontWeight: "200",
    marginBottom: 20,
  },
  text__three: {
    color: "#394168",
    fontWeight: "normal",
    fontSize: 22,
    paddingBottom: 10,
  },
  mobile: {
    fontWeight: "bold",
  },
  input: {
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#E1E1E1",
    paddingBottom: 10,
  },
  container__input: {
    width: "90%",
  },
  phone__number: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#E1E1E1",
    width: "90%",
    height: "20%",
    paddingBottom: 10,
    alignItems: "center",
  },
  canadian__container: {
    flex: 0.15,
  },
  phone__container: {
    flex: 1,
  },
  STPInputCode: {
    width: 0,
    height: 0,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cellView: {
    width: 40,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1.5,
    borderBottomColor: "#E1E1E1",
  },
  cellText: {
    textAlign: "center",
    fontSize: 34,
    color: "#404040",
  },
  inputOuterContainer: {
    width: "100%",
    position: "absolute",
    top: 200,
  },

  code: {
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "100",
  },
  ResenCodeBtn: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    borderColor: "rgba(61, 174, 238, 1)",
    padding: 8,
  },
  Resend: {
    flex: 0,
    textAlign: "center",
    alignItems: "center",
    color: "rgba(61, 174, 238, 1)",
    fontWeight: "bold",
  },
  characterCount: {
    color: "rgba(102, 102, 102, 1)",
    fontWeight: "100",
    marginTop: 5,
  },
  checkBoxContainer: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  showPasswordText: {
    fontWeight: "100",
  },
  FaceIDCountainer: {
    top: 200,
  },
  FaceIDSVG: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 40,
  },
  later: {
    color: "rgba(61, 174, 238, 1)",
    textAlign: "center",
    marginTop: 23,
  },
  Input__User__Container: {
    position: "absolute",
    top: "15%",
    width: "100%",
  },
  User__Input__Container: {
    paddingLeft: 35,
  },
  UserContainer: {
    margin: 20,
    marginLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#E1E1E1",
  },
  user__wrapper: {
    marginTop: 30,
  },
  Label: {
    color: "#8E8E93",
    fontWeight: "500",
    fontSize: 16,
  },
  UserTextInput: {
    padding: 15,
    paddingTop: 5,
    paddingLeft: 0,
    fontSize: 18,
    fontWeight: "200",
  },

  rbStyle: {
    height: 32,
    width: 32,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: "#3DAEEE",
    alignItems: "center",
    justifyContent: "center",
  },

  rbStyleCheck: {
    height: 32,
    width: 32,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: "#3DAEEE",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3DAEEE",
  },

  rbWrapper: {
    marginBottom: 36,
    flexDirection: "row",
    marginTop: 25,
  },
  rbText: {
    color: "#202020",
    fontSize: 20,
    fontWeight: "300",
  },
  rbTextWrapper: {
    flex: 0.8,
    marginLeft: 10,
    alignItems: "flex-start",
  },
  rbSmallText: {
    color: "#666666",
    fontWeight: "300",
    fontSize: 15,
    marginTop: 5,
    width: "100%",
  },

  AgreementContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  AgreementText: {
    color: "#3DAEEE",
    marginRight: 10,
  },
});
