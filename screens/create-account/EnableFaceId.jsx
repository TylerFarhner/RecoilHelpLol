import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Button from '../../components/global-components/Button';
import FaceID from '../../assets/SVG-ICON-Folder/FaceID';

export default EnableFaceId = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <View style={styles.Input__Container}>
                <View>
                    <Text style={styles.text__three}>
                        Enable <Text style={styles.mobile}>Face ID</Text> to log
                        into your account?
                    </Text>
                </View>
            </View>
            <View style={styles.FaceIDCountainer}>
                <View style={styles.FaceIDSVG}>
                    <FaceID />
                </View>
                <Button title="Enable Face ID" onClick={() => {}} />
                <TouchableOpacity
                    onPress={() => navigation.navigate('GetToKnowUser')}
                    activeOpacity={0.8}>
                    <Text style={styles.later}>Maybe later</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    Input__Container: {
        top: '20%',
        width: '100%',
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
    FaceIDCountainer: {
        top: 200,
    },
    FaceIDSVG: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 40,
    },
    later: {
        color: 'rgba(61, 174, 238, 1)',
        textAlign: 'center',
        marginTop: 23,
    },
});
