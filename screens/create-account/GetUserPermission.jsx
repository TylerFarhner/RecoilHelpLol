import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useRecoilState} from 'recoil';
import {CheckPermission} from '../../Recoil/atoms/UserSignUp';
import ArrowRight from '../../assets/SVG-ICON-Folder/ArrowRight';
import Button from '../../components/global-components/Button';
import CheckedIcon from '../../assets/SVG-ICON-Folder/CheckedIcon';

export default GetUserPermission = ({count, setCount, navigation}) => {
    const [userOption, setUserOption] = useRecoilState(CheckPermission);

    const CheckingConfirm = [
        {
            id: 1,
            Disclaimer: 'This account is for myself',
            SubDisclaimer: 'Third Party Disclaimer',
        },
        {
            id: 2,
            Disclaimer: 'Foreign Tax Disclaimer',
            SubDisclaimer: 'I pay income taxes in Canada or U.S.',
        },
        {
            id: 3,
            Disclaimer: 'Cardholder agreement',
            SubDisclaimer:
                'I agree to the terms of the Cardholder Agreement and receiving it electronically',
            Read: 'Read Agreement',
        },
        {
            id: 4,
            Disclaimer: 'Terms of Use & Privacy Policy',
            SubDisclaimer: 'Third Party Disclaimer',
            Read: 'Read Terms and Policy',
        },
    ];

    const CheckUserPermission = () => {
        if (userOption.length === 4) {
            navigation.navigate('HomeWalletScreen');
        }
    };

    const AddConfirm = (id) => {
        if (!userOption.includes(id)) {
            setUserOption((userOption) => [...userOption, id]);
        } else {
            setUserOption((userOption) =>
                userOption.filter(function (Id) {
                    return Id !== id;
                }),
            );
        }
    };

    return (
        <View style={styles.screen}>
            <View style={styles.Input__User__Container}>
                <View style={styles.User__Input__Container}>
                    <View>
                        <Text style={styles.text__three}>
                            Please <Text style={styles.mobile}>confirm</Text>{' '}
                            the information below
                        </Text>
                    </View>
                    <View>
                        {CheckingConfirm.map(
                            ({Disclaimer, SubDisclaimer, Read, id}, index) => (
                                <View style={styles.rbWrapper} key={index}>
                                    <TouchableOpacity
                                        style={
                                            userOption.includes(id)
                                                ? styles.rbStyleCheck
                                                : styles.rbStyle
                                        }
                                        onPress={() => AddConfirm(id)}>
                                        {userOption.includes(id) ? (
                                            <CheckedIcon />
                                        ) : null}
                                    </TouchableOpacity>
                                    <View style={styles.rbTextWrapper}>
                                        <Text style={styles.rbText}>
                                            {Disclaimer}
                                        </Text>
                                        <Text style={styles.rbSmallText}>
                                            {SubDisclaimer}
                                        </Text>
                                        {Read ? (
                                            <View
                                                style={
                                                    styles.AgreementContainer
                                                }>
                                                <Text
                                                    style={
                                                        styles.AgreementText
                                                    }>
                                                    {Read}
                                                </Text>
                                                <ArrowRight />
                                            </View>
                                        ) : null}
                                    </View>
                                </View>
                            ),
                        )}
                    </View>
                </View>

                <Button title="Confirm" onClick={() => CheckUserPermission()} />
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
        paddingBottom: 25,
    },
    mobile: {
        fontWeight: 'bold',
    },
    rbWrapper: {
        marginBottom: 25,
        flexDirection: 'row',
        marginTop: 15,
    },

    rbTextWrapper: {
        flex: 0.8,
        marginLeft: 10,
        alignItems: 'flex-start',
    },
    rbSmallText: {
        color: '#666666',
        fontWeight: '300',
        fontSize: 15,
        marginTop: 5,
        width: '100%',
    },

    AgreementContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    AgreementText: {
        color: '#3DAEEE',
        marginRight: 10,
    },
    rbStyle: {
        height: 32,
        width: 32,
        borderRadius: 110,
        borderWidth: 2,
        borderColor: '#3DAEEE',
        alignItems: 'center',
        justifyContent: 'center',
    },

    rbStyleCheck: {
        height: 32,
        width: 32,
        borderRadius: 110,
        borderWidth: 2,
        borderColor: '#3DAEEE',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3DAEEE',
    },
    rbText: {
        color: '#202020',
        fontSize: 20,
        fontWeight: '300',
    },
    rbTextWrapper: {
        flex: 0.8,
        marginLeft: 10,
        alignItems: 'flex-start',
    },
});
