import React, {useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const UnderlineExample = ({onChange, type}) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={styles.root}>
            <CodeField
                ref={ref}
                {...props}
                value={type}
                onChangeText={onChange}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                    <View
                        // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        style={[
                            styles.cellRoot,
                            isFocused && styles.focusCell,
                        ]}>
                        <Text style={styles.cellText}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default UnderlineExample;

const styles = StyleSheet.create({
    root: {minHeight: 56},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
    },
    cellRoot: {
        width: 34,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    cellText: {
        color: '#404040',
        fontSize: 48,
        fontFamily: 'Roboto-Light',
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: '#E1E1E1',
        borderBottomWidth: 1,
    },
});
