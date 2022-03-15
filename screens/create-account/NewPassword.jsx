import React, {useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {useRecoilState, useRecoilValue} from 'recoil';
import {UserInfo} from '../../Recoil/atoms/UserSignUp';
import Button from '../../components/global-components/Button';

export default NewPassword = ({navigation}) => {
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
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);

    const checkPassword = () => {
        setShowPassword(false);
        setError(false);
        if (password != confirm_password) {
            setError(true);
        } else {
            setError(false);
            navigation.navigate('EnableFaceID');
        }
    };

    return (
        <View style={styles.screen}>
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
                                phone,
                                email,
                                password: value,
                                confirm_password,
                                dob,
                                intendedUse,
                                occupation,
                                address,
                                Unit,
                                city,
                                postalCode,
                                province,
                                accepted_terms
                            });
                        }}
                        value={password}
                        fontStyle={password?.length === 0 ? 'normal' : 'normal'}
                        fontWeight={password?.length === 0 ? 'light' : 'light'}
                        placeholderTextColor={'#C4C0C0'}
                        fontSize={password?.length === 0 ? '20' : '20'}
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
                                phone,
                                address,
                                password,
                                confirm_password: value,
                                dob,
                                intendedUse,
                                occupation,
                                address,
                                Unit,
                                city,
                                postalCode,
                                province,
                                accepted_terms
                            });
                        }}
                        value={confirm_password}
                        placeholder="Confirm password"
                        fontStyle={
                            confirm_password?.length === 0 ? 'roboto' : 'normal'
                        }
                        placeholderTextColor={'#C4C0C0'}
                        fontSize={confirm_password?.length === 0 ? '20' : '20'}
                        autoCorrect={false}
                        secureTextEntry={false}
                        secureTextEntry={!showPassword ? true : false}
                    />
                    <Text style={styles.characterCount}>
                        {password?.length < 8 ? (
                            'At least 8 characters'
                        ) : error ? (
                            <Text style={{color: 'red'}}>
                                Passwords didn't match. Try again.
                            </Text>
                        ) : (
                            ''
                        )}
                    </Text>
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        activeOpacity={0.8}>
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
                            <Text style={styles.showPasswordText}>
                                Show password
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Button title="Save password" onClick={checkPassword} />
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
        top: '15%',
        width: '100%',
        paddingLeft: 35,
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
    characterCount: {
        color: 'rgba(102, 102, 102, 1)',
        fontWeight: '100',
        marginTop: 5,
    },
    checkBoxContainer: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    showPasswordText: {
        fontWeight: '100',
    },
});
