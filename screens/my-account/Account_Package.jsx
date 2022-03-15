import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'

import Button from '../../components/global-components/Button'
import BlueCheckMark from '../../assets/SVG-ICON-Folder/BlueCheckMark'

const Account_Package = () => {
  return (
    <ScrollView style={styles.screen}>
        <View style={styles.container}>

            <View style={styles.card}>
                <View style={styles.cardText}>
                    <View style={styles.packageTitle}>
                        <Text style={styles.packageType}>Classic Account</Text>
                        <Text style={styles.currentPackage}>My Current Package</Text>
                    </View>
                    <View style={styles.packagePerks}>
                        {/* TODO: Blue Check Arrow - Left side of each line */}
                        <View style={styles.perkLine}>
                            <BlueCheckMark />
                            <Text style={styles.perkText}>No annual fees</Text>
                        </View>
                        <View style={styles.perkLine}>
                            <BlueCheckMark />
                            <Text style={styles.perkText}>Earn avg. 4% cashback from {`\n`}
                            Hutsy Partners</Text>
                        </View>
                        <View style={styles.perkLine}>
                            <BlueCheckMark />
                            <Text style={styles.perkText}>Earn more with a rewards plan</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.moreInfoDiv1}>
                    <TouchableOpacity
                        onPress={() => alert('No navigation set')}
                    >
                        <Text style={styles.moreInfoText}>More information</Text>
                        {/* ASK: Where do these navigate to? */}
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.cardText}>
                    <View style={styles.packageTitle}>
                        <Text style={styles.packageType}>Premium Account</Text>
                        {/* INSERT: Crown Icon - Right Side */}
                        {/* Conditonal Render (if account===premium then render */}
                        {/* <Text style={styles.currentPackage}>My Current Package</Text> */}
                    </View>
                    <View style={styles.packagePerks}>
                        <View style={styles.perkLine}>
                            <BlueCheckMark />
                            <Text style={styles.perkText}>No annual fees</Text>
                        </View>
                        <View style={styles.perkLine}>
                            <BlueCheckMark />
                            <Text style={styles.perkText}>Earn avg. 4% cashback from {`\n`}
                            Hutsy Partners</Text>
                        </View>
                        <View style={styles.perkLine}>
                            <BlueCheckMark />
                            <Text style={styles.perkText}>Earn more with a rewards plan</Text>
                        </View>
                        {/* ASK: Are these supposed to state same benefits? */}
                    </View>
                </View>
                <View>
                    <Button title="Try 30 days for free" onClick={() => alert('No navigation set!')}/>
                    {/* ASK: Where does this navigate to */}
                </View>
                <View style={styles.moreInfoDiv2}>
                    <TouchableOpacity
                        onPress={() => alert('No navigation set')}
                    >
                        <Text style={styles.moreInfoText}>More information</Text>
                        {/* ASK: Where do these navigate to? */}
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    </ScrollView>
  )
}

export default Account_Package

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    container: {
        alignItems: 'center',
        marginBottom: 50,
        marginTop: 5
    },
    card: {
        width: 340,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 9,
    },
    cardText: {
        paddingLeft: 25
    },
    packageType: {
        fontFamily: 'Roboto-Medium',
        fontSize: 21
    },
    currentPackage: {
        fontWeight: '300',
        // fontWeight not working
        fontSize: 14,
        color: '#404040'
    },
    packageTitle: {
        marginTop: 19,
        marginBottom: 27
    },
    packagePerks: {
    },
    perkLine: {
        flexDirection: 'row'
    },
    perkText: {
        paddingBottom: 14,
        paddingLeft: 16.36,
        fontFamily: 'Roboto-Light',
        fontSize: 18,
        color: '#404040'
    },
    moreInfoDiv1: {
        marginTop: 36,
        alignItems: 'center'
    },
    moreInfoDiv2: {
        marginTop: 26,
        alignItems: 'center'
    },
    moreInfoText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        color: '#55A5FC',
        paddingBottom: 31
    }
})