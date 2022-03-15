import * as Font from 'expo-font'

const useFonts = async () => {
    await Font.loadAsync({
        'Roboto-Light': require('../assets/fonts/Roboto/Roboto-Light.ttf'),
        'Roboto-Regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
        'Roboto-Medium': require('../assets/fonts/Roboto/Roboto-Medium.ttf')
    });
};

export default useFonts;