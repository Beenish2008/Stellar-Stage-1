//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftsScreen from "./screens/SpaceCrafts";
import StarMapScreen from "./screens/StarMap";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "HomeScreen" screenOptions = {{
        headerShown : false
      }}>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "DailyPic" component = {DailyPicScreen}/>
        <Stack.Screen name = "SpaceCrafts" component = {SpaceCraftsScreen}/>
        <Stack.Screen name = "StarMap" component = {StarMapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
