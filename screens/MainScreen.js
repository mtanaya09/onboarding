import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./homeScreen";
import SearchScreen from "./searchScreen";
import SettingsScreen from "./settingScreen";
import BibleScreen from "./bibleScreen";
import TopBarNavigator from "./TopBarNavigator";
import LottieView from "lottie-react-native";
import "react-native-gesture-handler";

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let filePath;
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            filePath = require("../assets/animation/homepage.json");
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
            filePath = require("../assets/animation/search7.json");
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings1-outline";
            filePath = require("../assets/animation/settings2.json");
          } else if (route.name === "Bible") {
            iconName = focused ? "home" : "home-outline";
            filePath = require("../assets/animation/bible2.json");
          }
          //return <Icons name={iconName} size={30} color={color}  />
          return (
            <LottieView
              source={filePath}
              autoPlay={focused}
              style={{ height: 75 }}
            />
          );
        },
        tabBarActiveTintColor: "#ffefd5",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#000080",
          height: 65,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen
        name="Bible"
        component={TopBarNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function FirstItem(navigation) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Text style={{ fontSize: 20, color: "black", fontWeight: "800" }}>
        DRAWER
      </Text>

      <Text
        style={{
          fontSize: 15,
          color: "black",
          fontWeight: "800",
          marginTop: 10,
          padding: 10,
        }}
      >
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa.'
      </Text>
    </View>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      initialRouteName="FirstItem"
    >
      <Drawer.Screen
        name="Details"
        component={FirstItem}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Main"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default function MainScreen() {
  return <MyDrawer />;
}
