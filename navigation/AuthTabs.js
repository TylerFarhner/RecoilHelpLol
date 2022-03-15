import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CardScreen from "../screens/Card/CardScreen";
import More from "../screens/More/More";
import SpendingScreen from "../screens/Spending/SpendingScreen";
import MyWallet from "../assets/SVG-ICON-Folder/MyWallet";
import Spending from "../assets/SVG-ICON-Folder/Spending";
import Card from "../assets/SVG-ICON-Folder/Card";
import MoreIcon from "../assets/SVG-ICON-Folder/More";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Plus from "../assets/SVG-ICON-Folder/Path";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyWalletNavigation from "../screens/Wallet";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
      activeOpacity={1}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#8074FD",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const AuthTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 0,
        },
        title: "",
        style: {
          position: "absolute",
          bottom: 35,
          left: 20,
          right: 20,
          height: 90,
          alignItems: "center",
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Wallet"
        component={MyWalletNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
              }}
            >
              <MyWallet focused={focused} />
              <Text
                style={{
                  color: focused ? "#131936" : "#D1D1D6",
                  fontWeight: "bold",
                  fontSize: 10,
                  marginTop: 5,
                }}
              >
                My Wallet
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Spending"
        component={MyWalletNavigation}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
              }}
            >
              <Spending focused={focused} />
              <Text
                style={{
                  color: focused ? "#131936" : "#D1D1D6",
                  fontWeight: "bold",
                  fontSize: 10,
                  marginTop: 5,
                }}
              >
                Spending
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Modal"
        component={MyWalletNavigation}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Plus
                style={{
                  marginTop: 15,
                }}
              />
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Card"
        component={MyWalletNavigation}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
              }}
            >
              <Card focused={focused} />
              <Text
                style={{
                  color: focused ? "#131936" : "#D1D1D6",
                  fontWeight: "bold",
                  fontSize: 10,
                  marginTop: 5,
                }}
              >
                Card
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MyWalletNavigation}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
              }}
            >
              <MoreIcon focused={focused} />

              <Text
                style={{
                  color: focused ? "#131936" : "#D1D1D6",
                  fontWeight: "bold",
                  fontSize: 10,
                  marginTop: 5,
                }}
              >
                More
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthTabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7f5df0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

{
  /* <Image
source={require("../assets/SVG-ICON-Folder/Plus.png")}
resizeMode="contain"
style={{
  width: 30,
  height: 30,
  tintColor: "#fff",
  marginTop: 15,
}}
/> */
}
