import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useRecoilState} from 'recoil';
import ArrowBack from '../../assets/SVG-ICON-Folder/ArrowBack';
import {UserInfo} from '../../Recoil/atoms/UserSignUp';
import UserAddressComponent from './UserAddressComponent';

export default EditAddress = ({navigation: {goBack}}) => {
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

    const handleBack = () => {
        console.log('handle');
    };

    return (
        <View style={styles.screen}>
            <View style={styles.Input__User__Container}>
                <View style={styles.User__Input__Container}>
                    <View>
                        <Text style={styles.text__three}>
                            Insert the new{' '}
                            <Text style={styles.mobile}>shipping address</Text>?
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
        paddingLeft: 25,
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
    mobile: {
        fontWeight: 'bold',
    },
    icon__container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingBottom: 60,
    },
    next__text: {
        color: '#3DAEEE',
        fontSize: 17,
    },
});
