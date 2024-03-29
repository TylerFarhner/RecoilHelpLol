import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  StatusBar as RnStatusBar,
  TouchableOpacity
} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

import FingerprintImage from '../../assets/SVG-ICON-Folder/FingerprintImage'

export default function App() {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  // Check if hardware supports biometrics
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const fallBackToDefaultAuth = () => {
    console.log('fall back to password authentication');
  };

  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };

  const handleBiometricAuth = async () => {
    // Check if hardware supports biometrics
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    // Fallback to default authentication method (password) if Fingerprint is not available
    if (!isBiometricAvailable)
      return alertComponent(
        'Please enter your password',
        'Biometric Authentication not supported',
        'OK',
        () => fallBackToDefaultAuth()
      );

    // Check Biometrics types available (Fingerprint, Facial recognition, Iris recognition)
    let supportedBiometrics;
    if (isBiometricAvailable)
      supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();

    // Check Biometrics are saved locally in user's device
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics)
      return alertComponent(
        'Biometric record not found',
        'Please login with your password',
        'OK',
        () => fallBackToDefaultAuth()
      );

    // Authenticate use with Biometrics (Fingerprint, Facial recognition, Iris recognition)

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login with Biometrics',
      cancelLabel: 'Cancel',
      disableDeviceFallback: true,
    });
    // Log the user in on success
    if (biometricAuth) console.log('success');

    console.log({ isBiometricAvailable });
    console.log({ supportedBiometrics });
    console.log({ savedBiometrics });
    console.log({ biometricAuth });
  };

  

  return (

    
    <SafeAreaView>
      <View style={styles.container}>
        {/* <Text
            style={{
                color: 'white'
            }}
        >
          {isBiometricSupported
            ? 'Your device is compatible with Biometrics'
            : 'Face or Fingerprint scanner is available on this device'}
        </Text> */}

        {/* <TouchableHighlight
          style={{
            height: 60,
          }}
        >
          <Button
            title="Login with Biometrics"
            color="#fe7005"
            onPress={handleBiometricAuth}
          />
        </TouchableHighlight> */}

        <TouchableOpacity
            onPress={handleBiometricAuth}
        >
            <FingerprintImage />
        </TouchableOpacity>
        <Text style={{ 
            color: '#FFFFFF',
            fontFamily: 'Roboto-Light',
            fontSize: 16 
        }}>Use Fingerprint to login</Text>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});