import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import BlueBlackArrow from '../../assets/SVG-ICON-Folder/BlueBackArrow';
import NextButtonComponent from '../../components/global-components/NextButtonComponent';
import {
    Error,
    RecoverPasswordEmailAddress,
} from '../../Recoil/atoms/UserSignUp';

// import BlueBackArrow from '../../components/global-components/BlueBackArrow'

const RecoverPasswordScreen = ({navigation: {goBack}, navigation}) => {
    const [emailAddress, setEmailAddress] = useRecoilState(
        RecoverPasswordEmailAddress,
    );

    const error = useRecoilValue(Error);
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View>
                    <Text
                        style={{
                            fontFamily: 'Roboto-Light',
                            fontSize: 22,
                            color: '#394168',
                        }}>
                        What is your
                        <Text
                            style={{
                                color: '#394168',
                                fontFamily: 'Roboto-Medium',
                            }}>
                            {' '}
                            email address
                        </Text>
                        ?
                    </Text>
                    {error ? (
                        <Text
                            style={{
                                color: 'red',
                                fontFamily: 'Roboto-Light',
                                fontSize: 16,
                                marginTop: 10,
                                fontWeight:'bold'
                            }}>
                            {error}
                        </Text>
                    ) : (
                        <Text
                            style={{
                                color: '#404040',
                                fontFamily: 'Roboto-Light',
                                fontSize: 16,
                                marginTop: 10,
                            }}>
                            We will send you a verification code
                        </Text>
                    )}
                </View>

                <View
                    style={{
                        marginTop: 42,
                        width: 318,
                        borderBottomWidth: 1,
                        borderBottomColor: '#E1E1E1',
                    }}>
                    {/* Email Address input */}
                    <TextInput
                        style={{
                            color: '#C4C0C0',
                            fontFamily: 'Roboto-Light',
                            fontSize: 20,
                            marginBottom: 10,
                        }}
                        placeholder="Email address"
                        onSubmitEditing={() =>
                            navigation.navigate('RecoverPassword2a')
                        }
                        value={emailAddress}
                        onChangeText={(value) => setEmailAddress(value)}
                    />
                </View>

                {/* Phone verification */}
                {/* <View
        style={{
          marginTop: 77, alignItems: 'center'
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate('RecoverPassword1b')}
        >
          <Text style={{color: '#3DAEEE', fontFamily: 'Roboto-Regular'}}>Receive code via SMS instead</Text>
        </TouchableOpacity>
      </View> */}
            </View>
        </View>
    );
};

export default RecoverPasswordScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        position: 'absolute',
        width: '100%',
        height: '100%',
        paddingTop: 70,
        paddingLeft: 20,
    },
    container: {
        position: 'absolute',
        top: '25%',
        backgroundColor: 'white',
        paddingLeft: 20,
    },
    top__container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20,
    },
});
