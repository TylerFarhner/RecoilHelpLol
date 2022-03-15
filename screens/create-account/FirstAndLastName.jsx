import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {useRecoilState} from 'recoil';
import {UserInfo} from '../../Recoil/atoms/UserSignUp';

export default FirstAndLastName = () => {
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
            <View style={styles.Input__Container}>
                <View>
                    <Text style={styles.text__one}>Hello,</Text>
                </View>
                <Text style={styles.text__two}>
                    Let's start with some basic info
                </Text>
                <View style={styles.container__input}>
                    <TextInput
                        style={styles.input}
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
                                Unit,
                                city,
                                postalCode,
                                province,
                                accepted_terms,
                            });
                        }}
                        value={firstName}
                        fontStyle={
                            firstName?.length === 0 ? 'normal' : 'normal'
                        }
                        fontWeight={firstName?.length === 0 ? '300' : '200'}
                        placeholderTextColor={'#C4C0C0'}
                        fontSize={firstName?.length === 0 ? '20' : '20'}
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
                        value={lastName}
                        placeholder="Last Name"
                        fontStyle={lastName?.length === 0 ? 'roboto' : 'normal'}
                        fontWeight={lastName?.length === 0 ? '300' : '200'}
                        placeholderTextColor={'#C4C0C0'}
                        fontSize={lastName?.length === 0 ? '20' : '20'}
                        autoCorrect={false}
                        secureTextEntry={false}
                    />
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
    text__one: {
        color: '#394168',
        fontWeight: '600',
        fontSize: 22,
        paddingBottom: 10,
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
});
