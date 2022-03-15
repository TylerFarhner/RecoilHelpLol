import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import AddFundsTextInput from '../../components/global-components/AddFunds.TextInput';

const DirectDeposit = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [transit, setTransit] = useState('');
    const [institution, setInstitution] = useState('');
    const [institutionName, setInstitutionName] = useState('');
    const [AccountName, setAccountName] = useState('');
    const CopyToClipBoard = () => {};

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.screen}>
                <View style={styles.container__two}>
                    <View style={styles.container__two__one}>
                        <Text style={styles.container__three__title}>
                            Direct deposit
                        </Text>
                    </View>

                    <View style={styles.container__two__two}>
                        <Text style={styles.container__two__two__title}>
                            Get paid directly into your {'\n'}account
                        </Text>
                        <Text style={styles.container__two__two__subTitle}>
                            Tap to copy your account information
                        </Text>
                        <KeyboardAwareScrollView enableOnAndroid>
                            <View style={styles.container__two__three}>
                                <AddFundsTextInput
                                    label="Account number"
                                    keyboardType="number-pad"
                                    valueText={accountNumber}
                                    onChangeText={setAccountNumber}
                                    maxLength={12}
                                    showClipboard={true}
                                />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginTop: 30,
                                    }}>
                                    <View style={{flex: 1, marginRight: 10}}>
                                        <AddFundsTextInput
                                            label="Transit"
                                            keyboardType="number-pad"
                                            valueText={transit}
                                            onChangeText={setTransit}
                                            maxLength={5}
                                            showClipboard={true}
                                        />
                                    </View>
                                    <View style={{flex: 1}}>
                                        <AddFundsTextInput
                                            label="Institution"
                                            keyboardType="number-pad"
                                            valueText={institution}
                                            onChangeText={setInstitution}
                                            maxLength={3}
                                            showClipboard={true}
                                        />
                                    </View>
                                </View>

                                <View style={{marginTop: 40}}>
                                    <AddFundsTextInput
                                        label="Institution name"
                                        keyboardType="default"
                                        valueText={institutionName}
                                        onChangeText={setInstitutionName}
                                        showClipboard={true}
                                    />
                                </View>

                                <View style={{flex: 1, marginTop: 30}}>
                                    <AddFundsTextInput
                                        label="Account name"
                                        keyboardType="default"
                                        onChangeText={setAccountName}
                                        valueText={AccountName}
                                        showClipboard={true}
                                    />
                                </View>
                            </View>
                        </KeyboardAwareScrollView>
                        <TouchableOpacity activeOpacity={0.6}>
                            <View
                                style={{
                                    width: '80%',
                                    padding: 15,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    borderColor: '#3DAEEE',
                                }}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: '#3DAEEE',
                                    }}>
                                    Void cheque
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <Text
                            style={{
                                textAlign: 'center',
                                marginTop: 20,
                                color: '#3DAEEE',
                            }}>
                            Have questions?
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DirectDeposit;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    container__two: {
        flex: 0.95,
    },
    container__two__one: {
        width: '100%',
        top: '3%',
    },
    container__three__title: {
        textAlign: 'center',
        color: '#394168',
        fontWeight: '500',
        fontSize: 16,
    },
    container__two__two: {
        top: '5%',
        flex: 1,
        padding: 20,
    },
    container__two__two__title: {
        fontSize: 22,
        color: '#394168',
        fontWeight: '400',
    },
    container__two__two__subTitle: {
        fontSize: 16,
        color: '#404040',
        fontWeight: '300',
        marginTop: 10,
    },
    container__two__three: {
        flex: 1,
        marginTop: 40,
    },
});
