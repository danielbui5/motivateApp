import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from "./src/welcomePage";
import SelectAge from "./src/selectAge";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="SelectAge" component={SelectAge} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}