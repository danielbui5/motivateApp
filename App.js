import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from "./src/welcomePage";
import SelectAge from "./src/selectAge";
import NumNotifications from "./src/numberOfNotifications";
import SelectRandomSpecified from "./src/selectRandomSpecified";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="SelectAge" component={SelectAge} />
                <Stack.Screen name="NumNotifications" component={NumNotifications} />
                <Stack.Screen name="SelectRandomSpecified" component={SelectRandomSpecified} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}