import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ModalPopUp from '../../components/global-components/ModalPopUp';

const SpendingScreen = ({navigation}) => {
    return (
        <View style={styles.walletContainer}>
            <ModalPopUp navigation={navigation} />
            <Text> SpendingScreen</Text>
        </View>
    );
};

export default SpendingScreen;

const styles = StyleSheet.create({
    walletContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});
