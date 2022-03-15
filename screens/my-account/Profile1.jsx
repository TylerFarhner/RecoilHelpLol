import { StyleSheet, Text, TouchableOpacity, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import EditIcon from '../../components/global-components/EditIcon'
import GreyRightArrow from '../../components/global-components/GreyRightArrow'

const Profile1 = ({ navigation }) => {
  return (
    <SafeAreaView styles={styles.screen}>
        <ScrollView style={styles.container}>
            <View>
            
                <View style={styles.accountPackageDiv}>
                    <Text style={styles.accountPackage}>Account Package</Text>
                    <View style={styles.classicAcctView}>
                        <View style={styles.textDiv}>
                            <Text style={styles.classicAcct}>Classic Account</Text>
                            {/* If statement: userAccount === Classic then */}
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Account_Package')}
                                >
                                    <Text style={styles.tryPremium}>Try the Premium Account 30 days for free</Text>
                                </TouchableOpacity>
                        </View>
                        <View style={styles.arrowDiv}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Account_Package')}
                            >
                                <GreyRightArrow />
                            </TouchableOpacity>
                        </View>
                            {/* Else render Premium Acct Text ? */}
                    </View>

                </View>

                <View style={styles.userInfoDiv}>
                    <Text style={styles.myInformation}>My Information</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoType}>Name</Text>
                        <Text style={styles.userInfoData}>Camilia Yokoo</Text>
                        {/* Render User name based off profile info */}
                    </View>

                    <View style={styles.infoView}>
                        <Text style={styles.infoType}>Date of birth</Text>
                        <Text style={styles.userInfoData}>08/18/1986</Text>
                        {/* Render User DOB based off profile info */}
                    </View>

                    <View style={styles.infoView}>
                        <Text style={styles.infoType}>Mobile number</Text>
                        <View style={styles.infoLine}>
                            <Text style={styles.userInfoData}>+1 604 555 5555</Text>
                            <EditIcon 
                                onPress={() => navigation.navigate('Profile2')}
                                style={styles.editIconStyle}
                            />
                        </View>
                    </View>

                    <View style={styles.infoView}>
                        <Text style={styles.infoType}>Email Address</Text>
                        <View style={styles.infoLine}>
                            <Text style={styles.userInfoData}>camilayokoo@gmail.com</Text>
                            <EditIcon 
                                onPress={() => navigation.navigate('Profile2')}
                                style={styles.editIconStyle}
                            />
                        </View>
                    </View>

                    <View style={{
                        marginBottom: 50
                    }}>
                        <View style={styles.infoView}>
                            <Text style={styles.infoType}>Password</Text>
                            <View style={styles.infoLine}>
                                <Text style={styles.userInfoData}>******</Text>
                                <EditIcon 
                                    onPress={() => navigation.navigate('Profile2')}
                                    style={styles.editIconStyle}
                                />
                            </View>
                        </View>
                    </View>

                </View>

            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Profile1

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        paddingLeft: 30,
        paddingRight: 30,
        // MB to allow for scrolling on Android if bottomTabNav is blocking component
    },
    accountPackageDiv: {
        marginTop: 10
    },
    classicAcctView: {
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#CCCCCC",
        paddingBottom: 19,
        flexDirection: 'row'
    },
    textDiv: {
        flex: 1,
    },
    arrowDiv: {
        paddingTop: 30,
        paddingRight: 16.6,
    },
    accountPackage: {
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        color: '#394168',
        paddingBottom: 34
    },
    myInformation: {
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        color: '#394168',
        paddingBottom: 31
    },
    classicAcct: {
        fontFamily: 'Roboto-Light',
        fontSize: 18,
        borderTopWidth: 1,
        borderColor: '#E1E1E1',
        paddingTop: 11,
        paddingBottom: 10,
        color: '#404040'
    },
    tryPremium: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        color: "#55A5FC",
    },
    userInfoDiv: {
        marginTop: 50
    },
    infoType: {
        fontFamily: 'Roboto-Light',
        fontSize: 14,
        paddingBottom: 5
    },
    userInfoData: {
        fontFamily: 'Roboto-Light',
        fontSize: 20,
        paddingBottom: 10,
        color: '#404040'
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
    editIconStyle: {
        marginRight: 18
    }
})