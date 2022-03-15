import React, {useEffect, useRef, useState} from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    Animated,
    Easing,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import CopyToClipboard from '../../assets/SVG-ICON-Folder/CopyToClipboard';
import Clipboard from '@react-native-community/clipboard';

const AddFundsTextinput = ({
    keyboardType,
    label,
    onFocus,
    onBlur,
    errorText,
    value,
    style,
    onChangeText,
    valueText,
    maxLength,
    showClipboard,
    ...restOfProps
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const inputRef = useRef(<TextInput />);
    const focusAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(focusAnim, {
            toValue: isFocused || !!valueText ? 1 : 0,
            duration: 150,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
            useNativeDriver: true,
        }).start();
    }, [focusAnim, isFocused, valueText]);

    let color = isFocused ? '#8E8E93' : '#B9C4CA';
    if (errorText) {
        color = '#B00020';
    }
    const copyToClipboard = () => {
        Clipboard.setString('valueText');
    };

    return (
        <View style={style}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: '#E1E1E1',
                }}>
                <TextInput
                    style={[
                        styles.input,
                        {
                            borderColor: color,
                        },
                    ]}
                    ref={inputRef}
                    {...restOfProps}
                    value={valueText}
                    onBlur={(event) => {
                        setIsFocused(false);
                        onBlur?.(event);
                    }}
                    onFocus={(event) => {
                        setIsFocused(true);
                        onFocus?.(event);
                    }}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    value={valueText}
                    autoCorrect={false}
                    maxLength={maxLength}
                />
                {showClipboard && (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={copyToClipboard}>
                        <CopyToClipboard />
                    </TouchableOpacity>
                )}
            </View>
            <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
                <Animated.View
                    style={[
                        styles.labelContainer,
                        {
                            transform: [
                                {
                                    scale: focusAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0.85],
                                    }),
                                },
                                {
                                    translateY: focusAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [24, -12],
                                    }),
                                },
                                {
                                    translateX: focusAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 0],
                                    }),
                                },
                            ],
                        },
                    ]}>
                    <Text
                        style={[
                            styles.label,
                            {
                                color,
                            },
                        ]}>
                        {label}
                        {errorText ? '*' : ''}
                    </Text>
                </Animated.View>
            </TouchableWithoutFeedback>
            {!!errorText && <Text style={styles.error}>{errorText}</Text>}
        </View>
    );
};

export default AddFundsTextinput;

const styles = StyleSheet.create({
    input: {
        padding: 20,
        borderRadius: 4,
        fontFamily: 'Avenir-Medium',
        fontSize: 25,
        flex: 1,
        fontSize: 20,
        color: '#404040',
        fontWeight: '300',
    },
    labelContainer: {
        position: 'absolute',
        backgroundColor: 'white',
    },
    label: {
        fontFamily: 'Avenir-Heavy',
        fontSize: 16,
        fontWeight: '500',
    },
    error: {
        marginTop: 4,
        marginLeft: 12,
        fontSize: 12,
        color: '#B00020',
        fontFamily: 'Avenir-Medium',
    },
});
