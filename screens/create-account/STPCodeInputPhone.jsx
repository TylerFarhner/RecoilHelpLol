import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import VerificationCodeEntry from '../../components/global-components/VerificationCodeEntry';

import Button from '../../components/global-components/Button';
import {useRecoilState, useRecoilValue} from 'recoil';
import {
    Error,
    PhoneVerificationCode,
    Timer,
    UserInfo,
} from '../../Recoil/atoms/UserSignUp';
import {phoneVerification, verifyPhone} from '../../packages/backendsdk';

const STPCodeInput = ({navigation}) => {
    const [value, setValue] = useRecoilState(PhoneVerificationCode);
    const [warning, setWarning] = useState(null);
    const [error, setError] = useRecoilState(Error);
    const PhoneNumber = useRecoilValue(UserInfo);

    const [counter, setCounter] = useState(null);

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

        if (counter === 0) {
            setCounter(null);
        }

        return () => clearInterval(timer);
    }, [counter]);

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <Text
                    style={{
                        fontFamily: 'Roboto-Regular',
                        fontSize: 22,
                        color: '#394168',
                        maxWidth: 316,
                    }}>
                    Enter the
                    <Text
                        style={{
                            fontFamily: 'Roboto-Medium',
                        }}>
                        {' '}
                        verification code
                    </Text>{' '}
                    sent to your phone number
                </Text>

                {/* Verification Code Input */}
                <View
                    style={{
                        marginTop: 5,
                        marginBottom: 13,
                    }}>
                    <VerificationCodeEntry type={value} onChange={setValue} />
                </View>
                {/* Verify Button */}
                {/* TODO: Logic to verify onPress */}

                <View style={styles.bottomContainer}>
                    {error ? (
                        <View
                            style={{
                                backgroundColor: '#ff5252',
                                marginTop: 20,
                                borderRadius: 5,
                                padding: 5,
                                width: '85%',
                            }}>
                            <Text
                                style={{
                                    color: 'white',
                                    textAlign: 'center',
                                    fontSize: 15,
                                    fontWeight: '600',
                                }}>
                                {error}
                            </Text>
                        </View>
                    ) : null}

                    {warning && (
                        <View
                            style={{
                                backgroundColor: 'orange',
                                marginTop: 20,
                                borderRadius: 5,
                                padding: 5,
                                width: '85%',
                            }}>
                            <Text
                                style={{
                                    color: 'white',
                                    textAlign: 'center',
                                    fontSize: 15,
                                    fontWeight: '600',
                                }}>
                                {warning}
                            </Text>
                        </View>
                    )}
                    <View
                        style={{
                            marginBottom: 29,
                        }}>
                        <Button
                            title="Verify"
                            onClick={() => {
                                verifyPhone(PhoneNumber.phone, value)
                                    .then((res) => {
                                        if (res.status === 200) {
                                            console.log('Success!');
                                            navigation.navigate('EmailAddress');
                                        } else {
                                            if (value === '') {
                                                setError(
                                                    'Please input the code sent to your number.',
                                                );
                                            } else {
                                                setError('Code is incorrect.');
                                            }
                                            setTimeout(() => {
                                                setError(null);
                                            }, 4000);
                                        }
                                    })
                                    .catch((err) => {
                                        console.log('there is an error');
                                        setError(err.error.message);
                                        console.log(err);
                                    });
                                navigation.navigate('EmailAddress');
                            }}
                        />
                    </View>

                    <View
                        style={{
                            marginBottom: 15,
                        }}>
                        <Text
                            style={{
                                fontFamily: 'Roboto-Light',
                                fontSize: 14,
                                color: '#666666',
                            }}>
                            Didn't receive the code?
                        </Text>
                    </View>
                    {/* Resend Code Button */}
                    {/* TODO: Logic to resend code onPress */}
                    <TouchableOpacity
                        style={styles.resendButton}
                        onPress={() => {
                            if (!counter) {
                                setCounter(30);
                                console.log('code sent');

                                // phoneVerification(PhoneNumber.phone)
                                //     .then((res) => {
                                //         if (res.status === 200) {
                                //             console.log(userInfo.phone);
                                //             console.log(res.status);
                                //         } else {
                                //             setError(res.error.message);
                                //         }
                                //     })
                                //     .catch((err) => {
                                //         console.log('Error');
                                //         console.log(err);
                                //     });
                            } else {
                                setWarning(
                                    `Wait ${counter}s to be able to send code.`,
                                );
                                setTimeout(() => {
                                    setWarning(null);
                                }, 4000);
                                return null;
                            }
                        }}>
                        <Text style={styles.resendText}>
                            Resend code {counter && `in ${counter}`}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default STPCodeInput;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        position: 'absolute',
        width: '100%',
        height: '100%',
        paddingTop: 70,
    },
    container: {
        top: '15%',
        backgroundColor: 'white',
        justifyContent: 'center',

        marginLeft: 'auto',
        marginRight: 'auto',
    },
    InputField: {
        // marginBottom: 49,
    },
    VerifyButton: {
        width: 289,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    VerifyText: {
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        color: '#FFFFFF',
    },
    bottomContainer: {
        alignItems: 'center',
    },
    resendButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#3DAEEE',
        borderRadius: 3,
        width: 129,
        height: 29,
    },
    resendText: {
        color: '#3DAEEE',
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
    },
});
