import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useRecoilState} from 'recoil';
import CanadianFlag from '../../assets/SVG-ICON-Folder/CanadianFlag';
import {UserInfo} from '../../Recoil/atoms/UserSignUp';
import GetToKnowUserComponent from './GetToKnowUserComponent';

export default GetToKnowUser = () => {
    const [
        {
            firstName,
            lastName,
            phone,
            email,
            password,
            confirm_password,
            dob,
            intendedUse,
            occupation,
            address,
            Unit,
            city,
            postalCode,
            province,
            accepted_terms,
        },
        setUserInfo,
    ] = useRecoilState(UserInfo);

    return (
        <View style={styles.screen}>
            <View style={styles.Input__User__Container}>
                <View style={styles.User__Input__Container}>
                    <View>
                        <Text style={styles.text__three}>
                            Now let's get to know you
                        </Text>
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
                                        phone,
                                        email,
                                        password,
                                        confirm_password,
                                        dob,
                                        intendedUse,
                                        occupation,
                                        address,
                                        city,
                                        postalCode,
                                        province,
                                        accepted_terms,
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
                                        phone,
                                        email,
                                        password,
                                        confirm_password,
                                        dob,
                                        intendedUse,
                                        occupation,
                                        address,
                                        Unit,
                                        city,
                                        postalCode,
                                        province,
                                        accepted_terms,
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
                                        phone,
                                        email,
                                        password,
                                        confirm_password,
                                        dob: value,
                                        intendedUse,
                                        occupation,
                                        address,
                                        Unit,
                                        city,
                                        postalCode,
                                        province,
                                        accepted_terms,
                                    });
                                }}
                                type={dob}
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
                                        dob,
                                        intendedUse,
                                        occupation,
                                        address,
                                        Unit,
                                        city,
                                        postalCode,
                                        province,
                                        accepted_terms,
                                    });
                                }}
                                type={phone}>
                                <CanadianFlag />
                            </GetToKnowUserComponent>
                            <GetToKnowUserComponent
                                placeholder="Intended use"
                                onChangeText={(value) => {
                                    setUserInfo({
                                        firstName,
                                        lastName,
                                        phone,
                                        email,
                                        password,
                                        confirm_password,
                                        dob,
                                        intendedUse: value,
                                        occupation,
                                        address,
                                        Unit,
                                        city,
                                        postalCode,
                                        province,
                                        accepted_terms,
                                    });
                                }}
                                type={intendedUse}
                            />
                            <GetToKnowUserComponent
                                placeholder="Occupation"
                                onChangeText={(value) => {
                                    setUserInfo({
                                        firstName,
                                        lastName,
                                        phone,
                                        email,
                                        password,
                                        confirm_password,
                                        dob,
                                        intendedUse,
                                        occupation: value,
                                        address,
                                        Unit,
                                        city,
                                        postalCode,
                                        province,
                                        accepted_terms,
                                    });
                                }}
                                type={occupation}
                            />
                        </View>
                    </KeyboardAwareScrollView>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    Input__User__Container: {
        position: 'absolute',
        top: '15%',
        width: '100%',
    },
    User__Input__Container: {
        paddingLeft: 35,
    },
    text__three: {
        color: '#394168',
        fontWeight: 'normal',
        fontSize: 22,
        paddingBottom: 10,
    },
    user__wrapper: {
        marginTop: 30,
    },
});
