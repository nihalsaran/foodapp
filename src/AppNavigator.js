import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './screens/Splash'
import Login from './screens/Login'
const Stack = createStackNavigator()
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    component={Splash}
                    name='Splash'
                    options={{ headerShown: false }} />

                <Stack.Screen
                    component={Login}
                    name='Login'
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppNavigator