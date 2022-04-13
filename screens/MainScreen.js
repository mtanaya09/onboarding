import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './homeScreen';
import SearchScreen from './searchScreen';
import SettingsScreen from './settingScreen';
import BibleScreen from './bibleScreen';


const MainScreen = () => {
    const Tab = createBottomTabNavigator();
    
  return (
    <NavigationContainer independent={true}>
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused , size, }) => {
                let filePath;
                let iconName;
                if(route.name === 'Home' ){
                    iconName = focused ? 'home' : 'home-outline';
                    filePath = require("../assets/animation/homepage.json")
                }else if(route.name === 'Search'){
                    iconName = focused ? 'search' : 'search-outline';
                    filePath = require("../assets/animation/search7.json")
                }else if(route.name === 'Settings'){
                    iconName = focused ? 'settings' : 'settings1-outline';
                    filePath = require("../assets/animation/settings2.json")
                }else if(route.name === 'Bible'){
                    iconName = focused ? 'home' : 'home-outline';
                    filePath = require("../assets/animation/bible2.json")
                }
                 //return <Icons name={iconName} size={30} color={color}  />
                return <LottieView source={filePath} autoPlay={focused} style={{height:75}}/>;
            },
        tabBarActiveTintColor:'#ffefd5',
        tabBarInactiveTintColor:'white',
        tabBarShowLabel:false,
        tabBarStyle:{
          backgroundColor:'#000080',
          height:65,
        }
        })}>
        <Tab.Screen name= "Home" component={HomeScreen} />
        <Tab.Screen name= "Search" component={SearchScreen} />         
        <Tab.Screen name= "Bible" component={BibleScreen} /> 
        <Tab.Screen name= "Settings" component={SettingsScreen} /> 
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
import LottieView from "lottie-react-native";


const styles = StyleSheet.create({


});