import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useRecoilState} from 'recoil';
import {UserInfo} from '../../Recoil/atoms/UserSignUp';
import UserAddressComponent from './UserAddressComponent';

export default GetUserAddress = () => {
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
                            What is your{' '}
                            <Text style={styles.mobile}>address</Text>?
                        </Text>
                    </View>
                    <KeyboardAwareScrollView enableOnAndroid>
                        <View>
                            <UserAddressComponent
                                placeholder="Address line 1"
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
                                        occupation,
                                        address: value,
                                        Unit,
                                        city,
                                        postalCode,
                                        province,
                                        accepted_terms,
                                    });
                                }}
                                type={address}
                            />
                            <UserAddressComponent
                                placeholder="Unit/suite/apt/PO Box (optional)"
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
                                        occupation,
                                        address,
                                        Unit: value,
                                        city,
                                        postalCode,
                                        province,
                                        accepted_terms,
                                    });
                                }}
                                type={Unit}
                            />
                            <UserAddressComponent
                                placeholder="City"
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
                                        occupation,
                                        address,
                                        Unit,
                                        city: value,
                                        postalCode,
                                        province,
                                        accepted_terms,
                                    });
                                }}
                                type={city}
                            />
                            <UserAddressComponent
                                placeholder="Postal code"
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
                                        occupation,
                                        address,
                                        Unit,
                                        city,
                                        postalCode: value,
                                        province,
                                        accepted_terms,
                                    });
                                }}
                                type={postalCode}
                            />
                            <UserAddressComponent
                                placeholder="Province"
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
                                        occupation,
                                        address,
                                        Unit,
                                        city,
                                        postalCode,
                                        province: value,
                                        accepted_terms,
                                    });
                                }}
                                type={province}
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
