import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import FingerprintImage from '../../assets/SVG-ICON-Folder/FingerprintImage'

const BiometricLogin = () => {

    const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginFingerprint2')}
        style={{ alignItems: 'center' }}
      >
          <FingerprintImage />
          <Text style={{
            color: '#FFFFFF',
            fontFamily: "Roboto-Light",
            fontSize: 16,
            marginTop: 15
        }}
          >Use Fingerprint to login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BiometricLogin

const styles = StyleSheet.create({})