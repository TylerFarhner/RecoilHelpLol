import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const UserAddressComponent = ({
    label,
    placeholder,
    type,
    onChangeText,
    children,
}) => {
    return (
        <View style={styles.UserContainer}>
            <Text style={styles.Label}>{label}</Text>
            <TextInput
                style={styles.UserTextInput}
                placeholder={placeholder}
                onChangeText={onChangeText}
                autoCorrect={false}
                fontStyle={type?.length === 0 ? 'normal' : 'normal'}
                fontWeight={type?.length === 0 ? '300' : '200'}
                placeholderTextColor={'#C4C0C0'}
                fontSize={type?.length === 0 ? '18' : '18'}
                value={type}
            />
            {children}
        </View>
    );
};

export default UserAddressComponent;

const styles = StyleSheet.create({
    UserContainer: {
        margin: 20,
        marginLeft: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#E1E1E1',
    },
    Label: {
        color: '#8E8E93',
        fontWeight: '500',
        fontSize: 16,
    },

    UserTextInput: {
        padding: 15,
        paddingTop: 5,
        paddingLeft: 0,
        fontSize: 18,
        fontWeight: '200',
    },
});
