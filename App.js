import {useState} from 'react';

import Navigation from './navigation';
import AppLoading from 'expo-app-loading';
import {RecoilRoot, useRecoilValue} from 'recoil';
import Tabs from './navigation/Tabs';

import {UserToken} from './Recoil/atoms/UserSignUp';

import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, View} from 'react-native';

import useFonts from './hooks/useFonts';
import NavigationStackTab from './navigation/Tabs';

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    const [Isloading, setIsLoading] = useState(false);

    const LoadFonts = async () => {
        await useFonts();
    };

    if (Isloading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ActivityIndicator />
            </View>
        );
    }

    if (!fontsLoaded) {
        return (
            <AppLoading
                startAsync={LoadFonts}
                onFinish={() => setFontsLoaded(true)}
                onError={(error) => console.log(error)}
            />
        );
    }

    return (
        <RecoilRoot>
            <NavigationContainer>
                <NavigationStackTab />
                <Navigation />
            </NavigationContainer>
        </RecoilRoot>
    );
}
