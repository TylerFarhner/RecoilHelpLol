import {TouchableOpacity} from 'react-native';
import React from 'react';
import BlueBlackArrow from '../../assets/SVG-ICON-Folder/BlueBackArrow';
import {useNavigation} from '@react-navigation/native';

const BlueBackButton = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack();
            }}>
            <BlueBlackArrow />
        </TouchableOpacity>
    );
};

export default BlueBackButton;
