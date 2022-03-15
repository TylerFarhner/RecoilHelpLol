import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Button } from 'react-native'
import React from 'react'

const RecoverPassword2b = (props) => {
  return (
    <SafeAreaView>
        <Text>Enter the verification code sent to 'phone number here'</Text>
        <View>
        {/* Verification Code Input */}
        <TextInput
          style={{color: '#C4C0C0'}}
          placeholder=""
        />
        <Button 
            title="Verify"
            onPress={() => props.navigation.navigate('RecoverPassword3')}
        />
      </View>
    </SafeAreaView>
  )
}

export default RecoverPassword2b

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    },
  });