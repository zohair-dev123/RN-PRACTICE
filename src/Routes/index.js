import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../Screens/Welcome";
import Counter from "../Screens/Counter";
import Profile from "../Screens/Profile";

const Stack = createStackNavigator()

export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Counter" component={Counter} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}