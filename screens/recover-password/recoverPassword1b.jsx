import { StyleSheet, Text, SafeAreaView, Button, View, TextInput } from 'react-native'
import React from 'react'

const RecoverPassword1b = (props) => {
    return (
        <View style={styles.container}>
          <View>
            <Text>What is your mobile?</Text>
            <Text style={{color: "#404040"}}>We will send you a verification code</Text>
          </View>
          <View>
            {/* Phone Number input */}
            <TextInput
              style={{color: '#C4C0C0'}}
              keyboardType = 'number-pad'
              maxLength={4}
              placeholder="Mobile number"
              onSubmitEditing={() => props.navigation.navigate('RecoverPassword2b')}
            />
          </View>
          
        </View>
      );
    };

export default RecoverPassword1b

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    },
  });