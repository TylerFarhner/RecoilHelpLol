import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';


// Screen imports
import More from '../screens/More/More';

// My Account
import Profile1 from '../screens/my-account/Profile1';
import Profile2 from '../screens/my-account/Profile2';
import Account_Package from '../screens/my-account/Account_Package';
// Settings
import Settings from '../screens/Settings/Settings';
// Payroll
import EarlyPayroll1 from '../screens/earlyPayroll/EarlyPayroll1';
// Loan
import Loan1 from '../screens/Loan/Loan1';
// Credit
import BuildCredit from '../screens/Credit/BuildCredit';
// Debt
import ConsolidateDebt from '../screens/Debt/ConsolidateDebt';

import BlueBlackArrow from '../components/global-components/BlueBackArrow';

const Stack = createNativeStackNavigator();

function AccountScreenNav({navigation}) {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShadowVisible: false,
                headerTitleStyle: {
                    color: '#394168',
                    fontSize: 16,
                    fontFamily: 'Roboto-Medium',
                    letterSpacing: -0.384
                },
            }}>
            <Stack.Screen
                name="Profile1"
                component={Profile1}
                options={() => ({
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('More')}>
                            <BlueBlackArrow />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'center',
                    title: 'My Account',
                })}
            />
            <Stack.Screen
                name="Profile2"
                component={Profile2}
                options={() => ({
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Profile1')}>
                            <BlueBlackArrow />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={
                                () => {
                                    navigation.navigate('Profile1');
                                }
                                // TODO: Execute function to Update & Save User info, then navigate back to Profile1
                            }>
                            <Text style={styles.saveButton}>Save</Text>
                        </TouchableOpacity>
                    ),
                    title: '',
                })}
            />
            <Stack.Screen
                name="Account_Package"
                component={Account_Package}
                options={() => ({
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Profile1')}>
                            <BlueBlackArrow />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'center',
                    title: 'Account Package',
                    headerTransparent: 'true',
                })}
            />
        </Stack.Navigator>
    );
}

function SettingsNav({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
}

function PayrollNav({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Payroll1" component={EarlyPayroll1} />
        </Stack.Navigator>
    );
}

function LoanNav({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Loan1" component={Loan1} />
        </Stack.Navigator>
    );
}

function CreditNav({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Credit" component={BuildCredit} />
        </Stack.Navigator>
    );
}

function DebtNav({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Debt" component={ConsolidateDebt} />
        </Stack.Navigator>
    );
}

function MoreScreenNav({navigation}) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShadowVisible: false,
                headerShown: false,
            }}>
            <Stack.Screen name="More" component={More} />
            <Stack.Screen name="AccountNav" component={AccountScreenNav} />
            <Stack.Screen name="SettingsNav" component={SettingsNav} />
            <Stack.Screen name="PayrollNav" component={PayrollNav} />
            <Stack.Screen name="LoanNav" component={LoanNav} />
            <Stack.Screen name="CreditNav" component={CreditNav} />
            <Stack.Screen name="DebtNav" component={DebtNav} />
        </Stack.Navigator>
    );
}

export default MoreScreenNav;

const styles = StyleSheet.create({
    saveButton: {
        fontSize: 17,
        color: '#3DAEEE',
    },
});
