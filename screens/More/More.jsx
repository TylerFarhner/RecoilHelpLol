import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';

import ModalPopUp from '../../components/global-components/ModalPopUp';
// ASK: What is this for?

import Tabs from '../../navigation/Tabs';

// SVG Component Imports
import ConsolidateDebtIcon from './SVG Icons/ConsolidateDebtIcon';
import CreditIcon from './SVG Icons/CreditIcon';
import EarlyPayrollIcon from './SVG Icons/EarlyPayrollIcon';
import LoanIcon from './SVG Icons/LoanIcon';
import MyAccountIcon from './SVG Icons/MyAccountIcon';
import SettingsIcon from './SVG Icons/SettingsIcon';

const More = ({navigation}) => {
    return (
        <SafeAreaView style={styles.walletContainer}>

            <View style={styles.menuContainer}>

                <View style={styles.row}>

                    {/* My Account */}
                    
                        <View style={styles.accountDiv}>
                            <TouchableOpacity
                                style={styles.menuCircle}
                                onPress={() => navigation.navigate('AccountNav')}>
                                {/* Account Logo Here */}
                                <MyAccountIcon />
                            </TouchableOpacity>
                            <Text style={styles.menuText}>My Account</Text>
                        </View>

                        {/* Settings */}
                        <View style={styles.settingsDiv}>
                            <TouchableOpacity
                                style={styles.menuCircle}
                                onPress={() => navigation.navigate('SettingsNav')}>
                                <SettingsIcon />
                            </TouchableOpacity>
                            <Text style={styles.menuText}>Settings</Text>
                        </View>
                    </View>
                        

                    <View style={styles.row}>
                        {/* Early Payroll */}
                        <View style={styles.payrollDiv}>
                            <TouchableOpacity
                                style={styles.menuCircle}
                                onPress={() =>
                                    navigation.navigate('PayrollNav')
                                }>
                                {/* Payroll Logo Here */}
                                <EarlyPayrollIcon />
                            </TouchableOpacity>
                            <Text style={styles.menuText}>Early Payroll</Text>
                        </View>

                        {/* Get a Loan */}
                        <View style={styles.loanDiv}>
                            <TouchableOpacity
                                style={styles.menuCircle}
                                onPress={() => navigation.navigate('LoanNav')}>
                                {/* Loan Logo Here */}
                                <LoanIcon />
                            </TouchableOpacity>
                            <Text style={styles.menuText}>Get a Loan</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        {/* Build Credit */}
                        <View style={styles.creditDiv}>
                            <TouchableOpacity
                                style={styles.menuCircle}
                                onPress={() => navigation.navigate('CreditNav')}>
                                {/* Credit Logo Here */}
                                <CreditIcon />
                            </TouchableOpacity>
                            <Text style={styles.menuText}>Build Credit</Text>
                        </View>

                        {/* Consolidate Debt */}
                        <View style={styles.debtDiv}>
                            <TouchableOpacity
                                style={styles.menuCircle}
                                onPress={() => navigation.navigate('DebtNav')}>
                                {/* Debt Logo Here */}
                                <ConsolidateDebtIcon />
                            </TouchableOpacity>
                            <Text style={styles.menuText}>
                                Consolidate Debt
                            </Text>
                        </View>
                    </View>

                <View style={styles.row}>
                    {/* Get Help */}
                <TouchableOpacity
                    style={styles.helpDiv}
                    onPress={() => alert('Navigate to Help')}>
                    <Text style={styles.helpText}>Get Help</Text>
                </TouchableOpacity>
                </View>
            </View>

            {/* <ModalPopUp /> */}
        </SafeAreaView>
    );
};

export default More;

const styles = StyleSheet.create({
    walletContainer: {
        flex: 1,
        backgroundColor: '#F2F3F7',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    // container2
    // overall padding 30
    // sub containers justify container space between
    menuContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        top: 51
    },
    accountDiv: {
    },
    settingsDiv: {},
    payrollDiv: {},
    loanDiv: {},
    creditDiv: {},
    debtDiv: {},
    menuCircle: {
        backgroundColor: '#FFFFFF',
        width: 115,
        height: 115,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 115,
    },
    menuText: {
        marginTop: 14,
        textAlign: 'center',
        fontFamily: 'Roboto-Light',
        fontSize: 18,
        color: '#394168',
    },
    helpDiv: {
        alignItems: 'center',
    },
    helpText: {
        fontFamily: 'Roboto-Regular',
        color: 'rgba(57, 65, 104, .55)',
        fontSize: 14,
    },
});
