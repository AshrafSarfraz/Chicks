import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as screens from '../screens';
import { SCREEN } from '../data/enums';

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const RedeemRewardsTab = () => {
    return (
     
            <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName={SCREEN.Splash}>
                <Stack.Screen name={SCREEN.Account} component={screens.RedeemRewards} />
                <Stack.Screen name={SCREEN.Favourites} component={screens.Favourites} />
                <Stack.Screen name={SCREEN.RedeemRewardsSorry} component={screens.RedeemRewardsSorry} />
                <Stack.Screen name={SCREEN.RedeemRewardsScanner} component={screens.RedeemRewardsScanner} />
                <Stack.Screen name={SCREEN.Reviews} component={screens.Reviews} />
                <Stack.Screen name={SCREEN.GrilledChicken} component={screens.GrilledChicken} />
                <Stack.Screen name={SCREEN.EditProfile} component={screens.EditProfile} />
                <Stack.Screen name={SCREEN.ProfileSetup} component={screens.ProfileSetup} />
            </Stack.Navigator>
       
    )
}

export default RedeemRewardsTab
    ;
