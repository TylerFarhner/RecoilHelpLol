import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, {useState} from 'react';

import Button from '../../components/global-components/Button';
import {CheckBox} from 'react-native-elements';
import BlueBlackArrow from '../../assets/SVG-ICON-Folder/BlueBackArrow';

const RecoverPassword3 = ({navigation: {goBack}}) => {
    const [showPassword, setShowPassword] = useState(true);
    const [Password, setPassword] = useState('');
    const [PasswordConfirm, setPasswordConfirm] = useState('');

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text
                    style={{
                        fontSize: 22,
                        fontFamily: 'Roboto-Regular',
                        color: '#394168',
                    }}>
                    Now create a
                    <Text
                        style={{
                            fontSize: 22,
                            fontFamily: 'Roboto-Medium',
                        }}>
                        {' '}
                        new password
                    </Text>
                </Text>

                {/* New Password */}
                <TextInput
                    style={styles.InputField1}
                    placeholder="Password"
                    secureTextEntry={showPassword ? true : false}
                    value={Password}
                    onChangeText={(value) => setPassword(value)}
                />

                {/* Confirm New Password */}
                <TextInput
                    style={styles.InputField2}
                    placeholder="Confirm password"
                    secureTextEntry={showPassword ? true : false}
                    value={PasswordConfirm}
                    onChangeText={(value) => setPasswordConfirm(value)}
                />
                <Text
                    style={{
                        fontFamily: 'Roboto-Light',
                        fontSize: 12,
                        marginTop: 5,
                        marginBottom: 41,
                    }}>
                    {Password.length > 8 ? ' ' : 'At least 8 characters'}
                </Text>

                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        containerStyle={[
                            {
                                marginLeft: 0,
                                marginRight: 0,
                                paddingLeft: 0,
                            },
                        ]}
                        checked={!showPassword}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                    <Text style={styles.showPasswordText}>Show password</Text>
                </View>
            </View>

            {/* Save password button */}

            <Button title="Save password" onPress={() => {}} />
        </View>
    );
};

export default RecoverPassword3;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 55,
        paddingLeft: 20,
    },
    container: {
        top: '5%',
    },
    InputField1: {
        marginTop: 36,
        width: 318,
        borderBottomWidth: 1,
        borderBottomColor: '#E1E1E1',
        fontSize: 20,
        fontFamily: 'Roboto-Light',
        paddingBottom: 10,
    },
    InputField2: {
        marginTop: 48,
        width: 318,
        borderBottomWidth: 1,
        borderBottomColor: '#E1E1E1',
        fontSize: 20,
        fontFamily: 'Roboto-Light',
        paddingBottom: 10,
    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
    },
    showPasswordText: {
        fontWeight: '100',
    },
});
