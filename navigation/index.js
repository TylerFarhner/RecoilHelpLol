import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, TouchableOpacity, View} from 'react-native';

// Component Imports
import BlueBackButton from '../components/global-components/BlueBackButton';
import NextButtonComponent from '../components/global-components/NextButtonComponent';

// Screens - LogIn/SignUp

// Screens - Recovery
import RecoverPasswordScreen from '../screens/recover-password/recoverPassword';
import RecoverPassword1b from '../screens/recover-password/recoverPassword1b';
import RecoverPassword2a from '../screens/recover-password/recoverPassword2a';
import RecoverPassword2b from '../screens/recover-password/recoverPassword2b';
import RecoverPassword3 from '../screens/recover-password/recoverPassword3';

// Screens - FaceID
import LoginFaceId2 from '../screens/login/FaceID/loginFaceId2';
import LoginFaceId3 from '../screens/login/FaceID/loginFaceId3';

// Screens - Fingerprint
import LoginFingerprint2 from '../screens/login/Fingerprint/loginFingerprint2';
import LoginFingerprint3 from '../screens/login/Fingerprint/loginFingerprint3';

// Screens
import HomeScreen from '../screens/home/HomeScreen';
import helpScreen from '../screens/help/HelpScreen';
import Login from '../screens/login';
import CreateAccountWallet from '../screens/Wallet/CreateAccountWallet';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthTabs from './AuthTabs';
import TermsAndConditions from '../screens/create-account/TermsAndConditions';
import {ReCheckAddress} from '../screens/create-account/ReCheckAddress';
import EditAddress from '../screens/create-account/EditAddress';
import AccountCreated from '../screens/create-account/AccountCreated';
import FirstAndLastName from '../screens/create-account/FirstAndLastName';
import EmailAddress from '../screens/create-account/EmailAddress';
import PhoneNumber from '../screens/create-account/PhoneNumber';
import STPCodeInputPhone from '../screens/create-account/STPCodeInputPhone';
import STPCodeInputEmail from '../screens/create-account/STPCodeInputEmail';
import EnableFaceId from '../screens/create-account/EnableFaceId';
import NewPassword from '../screens/create-account/NewPassword';
import GetUserAddress from '../screens/create-account/GetUserAddress';
import GetToKnowUser from '../screens/create-account/GetToKnowUser';
import GetUserPermission from '../screens/create-account/GetUserPermission';
import {emailVerification, EmailVerification, phoneVerification} from '../packages/backendsdk';
import {useRecoilState, useRecoilValue} from 'recoil';
import {
    Error,
    RecoverPasswordEmailAddress,
    UserInfo,
    UserToken,
} from '../Recoil/atoms/UserSignUp';

// DELETE AFTER BUILDING
import More from '../screens/More/More';

const Stack = createNativeStackNavigator();

// --------------- Main Nav -----------------
function Navigation({navigation}) {
    const PhoneNumberLength = useRecoilValue(UserInfo);
    const userInfo = useRecoilValue(UserInfo);
    const [error, setError] = useRecoilState(Error);
    const Token = useRecoilValue(UserToken);
    const UserEmailPasswordRecovery = useRecoilValue(
        RecoverPasswordEmailAddress,
    );

    if (Token) {
        return null;
    } else {
        return (
            <Stack.Navigator
                screenOptions={{
                    showLabel: true,
                    title: '',
                    style: {
                        position: 'absolute',
                        bottom: 25,
                        left: 20,
                        right: 20,
                        elevation: 0,
                        backgroundColor: 'red',
                        borderRadius: 15,
                        height: 90,
                    },
                }}>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
                />

                {/* Recover Password Group */}
                <Stack.Group
                    screenOptions={{
                        headerTitle: '',
                        headerShadowVisible: false,
                        headerLeft: () => <BlueBackButton />,
                        title: '',
                    }}>
                    <Stack.Screen
                        name="RecoverPasswordScreen"
                        component={RecoverPasswordScreen}
                        options={({navigation}) => ({
                            headerRight: () =>
                                UserEmailPasswordRecovery.length > 11 ? (
                                    <TouchableOpacity
                                        onPress={() => {
                                            EmailVerification(
                                                UserEmailPasswordRecovery,
                                            )
                                                .then((res) => {
                                                    if (res.status === 200) {
                                                        navigation.navigate(
                                                            'RecoverPassword2a',
                                                        );
                                                    } else {
                                                        setError(
                                                            'There is an error',
                                                        );
                                                        setTimeout(() => {
                                                            setError(null);
                                                        }, 2000);
                                                    }
                                                })
                                                .catch((err) => {
                                                    console.log(err);
                                                });
                                        }}>
                                        <NextButtonComponent />
                                    </TouchableOpacity>
                                ) : null,
                            headerStyle: {
                                borderWidth: 0,
                            },
                        })}
                    />
                    <Stack.Screen
                        name="RecoverPassword2a"
                        component={RecoverPassword2a}
                    />
                    <Stack.Screen
                        name="RecoverPassword1b"
                        component={RecoverPassword1b}
                    />
                    <Stack.Screen
                        name="RecoverPassword2b"
                        component={RecoverPassword2b}
                    />
                    <Stack.Screen
                        name="RecoverPassword3"
                        component={RecoverPassword3}
                    />
                </Stack.Group>

                <Stack.Group>
                    <Stack.Screen
                        name="FirstAndLastName"
                        component={FirstAndLastName}
                        options={({navigation}) => ({
                            headerLeft: () => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate('PhoneNumber')
                                    }>
                                    <BlueBackButton />
                                </TouchableOpacity>
                            ),
                            headerRight: () => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate('PhoneNumber')
                                    }>
                                    <NextButtonComponent />
                                </TouchableOpacity>
                            ),
                            headerTransparent: true,
                        })}
                    />

                    <Stack.Screen
                        name="PhoneNumber"
                        component={PhoneNumber}
                        options={({navigation}) => ({
                            headerRight: () =>
                                PhoneNumberLength.phone.length > 9 ? (
                                    <TouchableOpacity
                                        onPress={() => {
                                            // phoneVerification(userInfo.phoneNumber)
                                            //     .then((res) => {
                                            //         if (res.status === 200) {
                                            //             console.log(
                                            //                 userInfo.phoneNumber,
                                            //             );

                                            //             console.log(res.status);
                                            //         } else {
                                            //             setError(res.error.message);
                                            //         }
                                            //     })
                                            //     .catch((err) => {
                                            //         console.log('Error');
                                            //         console.log(err);
                                            //     });

                                            navigation.navigate('STPCode');
                                        }}>
                                        <NextButtonComponent />
                                    </TouchableOpacity>
                                ) : null,
                            headerLeft: () => (
                                <TouchableOpacity>
                                    <BlueBackButton />
                                </TouchableOpacity>
                            ),
                            headerTransparent: true,
                        })}
                    />

                    <Stack.Screen
                        name="STPCode"
                        component={STPCodeInputPhone}
                        options={({navigation}) => ({
                            headerLeft: () => (
                                <TouchableOpacity>
                                    <BlueBackButton />
                                </TouchableOpacity>
                            ),
                            headerTransparent: true,
                        })}
                    />
                    <Stack.Screen
                        name="EmailAddress"
                        component={EmailAddress}
                        options={({navigation}) => ({
                            headerRight: () =>
                                userInfo.email ? (
                                    <TouchableOpacity
                                        onPress={() => {
                                            emailVerification(userInfo.email)
                                                .then((res) => {
                                                    if (res.status === 200) {
                                                        console.log(res);
                                                    } else {
                                                        setError(res.error);
                                                    }
                                                })
                                                .catch((err) => {
                                                    console.log(err);
                                                });
                                            console.log(userInfo.email);
                                            navigation.navigate('STPCodeEmail');
                                        }}>
                                        <NextButtonComponent />
                                    </TouchableOpacity>
                                ) : null,
                            headerLeft: () => (
                                <TouchableOpacity>
                                    <BlueBackButton />
                                </TouchableOpacity>
                            ),
                            headerTransparent: true,
                        })}
                    />

                    <Stack.Screen
                        name="STPCodeEmail"
                        component={STPCodeInputEmail}
                        options={({navigation}) => ({
                            headerLeft: () => (
                                <TouchableOpacity>
                                    <BlueBackButton />
                                </TouchableOpacity>
                            ),
                            headerTransparent: true,
                        })}
                    />

                    <Stack.Screen
                        name="EnableFaceID"
                        component={EnableFaceId}
                        options={() => ({
                            headerShown: false,
                            headerTransparent: true,
                        })}
                    />
                    <Stack.Screen
                        name="NewPassword"
                        component={NewPassword}
                        options={({navigation}) => ({
                            headerLeft: () => (
                                <TouchableOpacity>
                                    <BlueBackButton />
                                </TouchableOpacity>
                            ),
                            headerTransparent: true,
                        })}
                    />

                    <Stack.Screen
                        name="GetToKnowUser"
                        component={GetToKnowUser}
                        options={({navigation}) => ({
                            headerRight: () => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate('UserAddress')
                                    }>
                                    <NextButtonComponent />
                                </TouchableOpacity>
                            ),
                            headerLeft: () => (
                                <TouchableOpacity>
                                    <BlueBackButton />
                                </TouchableOpacity>
                            ),
                            headerTransparent: true,
                        })}
                    />

                    <Stack.Screen
                        name="UserAddress"
                        component={GetUserAddress}
                        options={({navigation}) => ({
                            headerRight: () => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate('GetUserPermission')
                                    }>
                                    <NextButtonComponent />
                                </TouchableOpacity>
                            ),
                            headerLeft: () => (
                                <TouchableOpacity>
                                    <BlueBackButton />
                                </TouchableOpacity>
                            ),
                            headerTransparent: true,
                        })}
                    />

                    <Stack.Screen
                        name="GetUserPermission"
                        component={GetUserPermission}
                        options={({navigation}) => ({
                            headerLeft: () => (
                                <TouchableOpacity>
                                    <BlueBackButton />
                                </TouchableOpacity>
                            ),
                            headerTransparent: true,
                        })}
                    />

                    <Stack.Screen
                        name="HomeWalletScreen"
                        component={CreateAccountWallet}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="TermsAndCondition"
                        component={TermsAndConditions}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="ReCheckAddress"
                        component={ReCheckAddress}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="AccountCreated"
                        component={AccountCreated}
                        options={{
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name="EditAddress"
                        component={EditAddress}
                        options={({navigation}) => ({
                            headerRight: () => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate('ReCheckAddress')
                                    }>
                                    <Text
                                        style={{
                                            color: '#3DAEEE',
                                            fontSize: 17,
                                        }}>
                                        Save
                                    </Text>
                                </TouchableOpacity>
                            ),
                            headerLeft: () => (
                                <TouchableOpacity>
                                    <BlueBackButton />
                                </TouchableOpacity>
                            ),
                            headerTransparent: true,
                        })}
                    />
                </Stack.Group>

                <Stack.Screen name="AuthTabs" component={AuthTabs} />
            </Stack.Navigator>
        );
    }
}

export default Navigation;

// function LogInNav() {
//     const navigation = useNavigation();

//     return (
//         <Stack.Navigator>
//             {/* FaceID Group */}
//             <Stack.Group
//                 screenOptions={{
//                     headerShown: false,
//                 }}>
//                 <Stack.Screen name="LoginFaceId2" component={LoginFaceId2} />
//                 <Stack.Screen name="LoginFaceId3" component={LoginFaceId3} />
//             </Stack.Group>

//             {/* Fingerprint Group */}
//             <Stack.Group
//                 screenOptions={{
//                     headerShown: false,
//                 }}>
//                 <Stack.Screen
//                     name="LoginFingerprint2"
//                     component={LoginFingerprint2}
//                 />
//                 <Stack.Screen
//                     name="LoginFingerprint3"
//                     component={LoginFingerprint3}
//                 />
//             </Stack.Group>
//         </Stack.Navigator>
//     );
//             }
