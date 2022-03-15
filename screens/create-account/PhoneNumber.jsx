import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import {Error, UserInfo} from '../../Recoil/atoms/UserSignUp';
import CanadianFlag from '../../assets/SVG-ICON-Folder/CanadianFlag';

export default PhoneNumber = () => {
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
        },
        setUserInfo,
    ] = useRecoilState(UserInfo);

    const error = useRecoilValue(Error);
    return (
        <View style={styles.screen}>
            <View style={styles.Input__Container}>
                <View>
                    <Text style={styles.text__three}>
                        What is your{' '}
                        <Text style={styles.mobile}>mobile number</Text>?
                    </Text>
                </View>

                {error ? (
                    <Text style={[styles.text__two, {color: 'red'}]}>
                        {error}
                    </Text>
                ) : (
                    <Text style={styles.text__two}>
                        We will send you a verification code
                    </Text>
                )}

                <View style={styles.phone__number}>
                    <View style={styles.canadian__container}>
                        <CanadianFlag />
                    </View>

                    <View style={styles.phone__container}>
                        <TextInput
                            value={phone}
                            placeholder="Mobile Number"
                            fontSize={phone?.length === 0 ? '20' : '20'}
                            onChangeText={(value) => {
                                setUserInfo({
                                    firstName,
                                    lastName,
                                    phone: value,
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
                                });
                            }}
                            keyboardType="numeric"
                        />
                    </View>
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
    Input__Container: {
        position: 'absolute',
        top: '25%',
        width: '100%',
        paddingLeft: 35,
    },
    text__two: {
        color: '#394168',
        fontSize: 16,
        fontWeight: '200',
        marginBottom: 20,
    },
    container__input: {
        width: '90%',
    },
    input: {
        paddingTop: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#E1E1E1',
        paddingBottom: 10,
    },
    text__three: {
        color: '#394168',
        fontWeight: 'normal',
        fontSize: 22,
        paddingBottom: 10,
    },
    mobile: {
        fontWeight: 'bold',
    },
    phone__number: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#E1E1E1',
        width: '90%',
        height: '20%',
        paddingBottom: 10,
        alignItems: 'center',
    },
    canadian__container: {
        flex: 0.15,
    },
    phone__container: {
        flex: 1,
    },
});
