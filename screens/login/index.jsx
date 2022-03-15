import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import LogoComponent from '../../assets/SVG-ICON-Folder/LogoComponent';
import BiometricLogin from '../../components/login/BiometricLogin';

import Button from '../../components/global-components/Button';
import {loginAccount} from '../../packages/backendsdk';
import {useRecoilState} from 'recoil';
import {Error, UserToken} from '../../Recoil/atoms/UserSignUp';

Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Token, setToken] = useRecoilState(UserToken);
    const [error, setError] = useRecoilState(Error);

    const checkInput = () => {
        if (email === '' || password === '' || password.length < 8) {
            setError('Email and/or password field empty');
            setTimeout(() => {
                setError('');
            }, 5000);
        } else {
            loginAccount(email, password)
                .then((res) => {
                    if (res.status === 200) {
                        setToken(res.jwt);
                    } else {
                        setError('Invalid credentials. Please try again.');
                        setTimeout(() => {
                            setError(null);
                        }, 5000);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    console.log('catch has run');
                    setError(err);

                    setTimeout(() => {
                        setError('');
                    }, 3000);
                });
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.InnerContainer}>
                {/* ---LOGO IMAGE--- */}
                <View
                    style={{
                        marginBottom: 35,
                    }}>
                    <LogoComponent />
                </View>
                <View>
                    {/* ---Email Address Input--- */}
                    <Text style={styles.InputText}>Email</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        onChangeText={(value) => setEmail(value)}
                    />

                    {/* ---Password input--- */}
                    <Text style={styles.InputText}>Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(value) => setPassword(value)}
                    />

                    {/* ---Forgot Password--- */}
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('RecoverPasswordScreen')
                        }>
                        <Text
                            style={{
                                color: '#3DAEEE',
                                fontSize: 14,
                                marginBottom: 5,
                            }}>
                            Forgot my password
                        </Text>
                    </TouchableOpacity>
                    {error ? (
                        <View
                            style={{
                                backgroundColor: '#ff5252',
                                marginTop: 20,
                                borderRadius: 5,
                                padding: 5,
                            }}>
                            <Text style={{color: 'white', textAlign: 'center'}}>
                                {error}
                            </Text>
                        </View>
                    ) : null}

                    {/* ---Log-in Button--- */}
                    <Button title="Login" onClick={checkInput} />

                    {/* Biometric Login */}

                    <View
                        style={{
                            marginTop: 63,
                            marginBottom: 79,
                        }}>
                        {/* <BiometricLogin /> */}
                    </View>
                </View>
            </View>
            {/* ---Create Account--- */}
            <View style={styles.createAccDiv}>
                <Text style={styles.text}>Still not a client?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('FirstAndLastName')}>
                    <View style={styles.createAccButton}>
                        <Text style={{fontSize: 17, color: 'white'}}>
                            Create Account
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#131936',
    },
    InnerContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: '25%',
    },
    InputText: {
        color: '#FFFFFF',
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'Roboto-Light',
        fontSize: 14,
    },
    input: {
        width: 289,
        height: 36,
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        fontSize: 16,
        marginBottom: 15,
        marginTop: 7,
        paddingLeft: 5,
    },
    createAccDiv: {
        position: 'absolute',
        bottom: 35,
        alignItems: 'center',
        fontSize: 14,
    },
    createAccButton: {
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 289,
        height: 50,
        borderRadius: 8,
        marginTop: 20,
    },
});
