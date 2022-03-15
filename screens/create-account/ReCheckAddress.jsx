import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import ArrowBack from '../../assets/SVG-ICON-Folder/ArrowBack';
import {UserInfo, UserToken} from '../../Recoil/atoms/UserSignUp';
import Button from '../../components/global-components/Button';
import {createAccount, CreateAccount} from '../../packages/backendsdk';

export const ReCheckAddress = ({navigation}) => {
    const [token, setUserToken] = useRecoilState(UserToken);
    const handleBack = () => {
        navigation.navigate('TermsAndCondition');
    };

    const user = useRecoilValue(UserInfo);

    const address = useRecoilValue(UserInfo);
    return (
        <View style={{flex: 1, paddingTop: 50}}>
            <View style={styles.Input__User__Container}>
                <View style={styles.icon__container}>
                    <TouchableOpacity onPress={handleBack}>
                        <ArrowBack />
                    </TouchableOpacity>
                </View>
                <View style={styles.User__Input__Container}>
                    <View>
                        <Text style={styles.text__three}>
                            Please confirm the address where you want your
                            pre-paid card to be{' '}
                            <Text style={styles.mobile}>delivered</Text>?
                        </Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    flex: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <View
                    style={{
                        borderTopWidth: 5,
                        borderBottomWidth: 5,
                        borderColor: '#EFEFF4',
                        padding: 50,
                        width: '90%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            color: '#404040',
                            fontSize: 18,
                            fontWeight: '300',
                            lineHeight: 26,
                        }}>
                        {address.address}, Unit {address.Unit} {'\n'}{' '}
                        {address.city} {address.province} - {address.postalCode}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: '75%',
                }}>
                <Button
                    title="Confirm Address"
                    onClick={() => {
                        createAccount(user)
                            .then((res) => {
                                if (res.status === 200) {
                                    navigation.navigate('AccountCreated');
                                    setUserToken(res.jwt);
                                    console.log(res.jwt);
                                    console.log(res.status);
                                    console.log('success');
                                } else {
                                    console.log(res.status);
                                    console.log('error');
                                }
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    }}
                />
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                        navigation.navigate('EditAddress');
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            marginTop: 20,
                            color: '#3DAEEE',
                            fontWeight: '400',
                            fontSize: 14,
                        }}>
                        Inform a different address
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Input__User__Container: {
        width: '100%',
        flex: 0.2,
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
    mobile: {
        fontWeight: 'bold',
    },
    icon__container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 25,
    },
});
