import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../login';
import WalletScreen from './WalletScreen';

const Stack = createNativeStackNavigator();

function MyWalletNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                showLabel: true,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: 'red',
                    borderRadius: 15,
                    height: 90,
                },
            }}>
            <Stack.Screen name="WalletScreen" component={WalletScreen} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

export default MyWalletNavigation;
