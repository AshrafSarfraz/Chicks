import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as screens from '../screens';
import { SCREEN } from '../data/enums';

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const ProfileStack = () => {
    return (
     
            <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName={SCREEN.Splash}>
                <Stack.Screen name={SCREEN.Account} component={screens.Account} />
               
            </Stack.Navigator>
       
    )
}

export default ProfileStack
    ;
