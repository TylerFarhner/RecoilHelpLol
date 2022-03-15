import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ModalPopUp from '../../components/global-components/ModalPopUp';

const CardScreen = ({navigation}) => {
    return (
        <View style={styles.walletContainer}>
            <ModalPopUp navigation={navigation} />

            <Text> CardScreen</Text>
        </View>
    );
};

export default CardScreen;

const styles = StyleSheet.create({
    walletContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});
