import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

import ClearText from '../../assets/SVG-ICON-Folder/ClearText'

const Profile2 = ({ navigation }) => {


    const [number, setNumber] = useState('+1 604 555 5555')
    const [email, setEmail] = useState('camilayokoo@gmail.com')
    const [password, setPassword] = useState("********")

    const checkNumber = () => {
        if (number === '' || number.length < 8) {
            alert('Phone Number not valid')
        }
    }

  return (
    <View style={styles.screen}>
        <View style={styles.container}>
            <View style={styles.userInfoDiv}>

            <View style={styles.infoView}>
                        <Text style={styles.infoType}>Mobile number</Text>
                        <View style={styles.infoLine}>
                            <TextInput 
                                style={styles.textInput}
                                placeholder={number}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    setNumber("")
                                }}
                            >
                                <ClearText style={styles.clearInput}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.infoView}>
                        <Text style={styles.infoType}>Email Address</Text>
                        <View style={styles.infoLine}>
                            <TextInput 
                                style={styles.textInput}
                                placeholder={email}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    setEmail("")
                                }}
                            >
                                <ClearText style={styles.clearInput}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.infoView}>
                        <Text style={styles.infoType}>Password</Text>
                        <View style={styles.infoLine}>
                            <TextInput 
                                style={styles.textInput} 
                                secureTextEntry={true}
                                placeholder={password}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    setPassword("")
                                }}
                            >
                                <ClearText style={styles.clearInput}/>
                            </TouchableOpacity>
                        </View>
                    </View>

            </View>
        </View>
    </View>
  )
}

export default Profile2

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        top: '10%',
        paddingLeft: 30,
        paddingRight: 30
    },
    userInfoDiv: {
        marginTop: 50
    },
    infoType: {
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        color: '#8E8E93',
        paddingBottom: 5
    },
    textInput: {
        fontFamily: 'Roboto-Light',
        fontSize: 20,
        color: '#404040',
        paddingBottom: 10,
        width: '85%',
        // backgroundColor: 'red'
    },
    infoView: {
        borderBottomWidth: 1,
        borderBottomColor: '#E1E1E1',
        marginBottom: 25
    },
    infoLine: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    clearInput: {
        marginRight: 1
    }
})