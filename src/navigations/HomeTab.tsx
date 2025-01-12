import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as screens from '../screens';
import { SCREEN } from '../data/enums';

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const HomeTab = () => {
    return (
     
            <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName={SCREEN.Splash}>
                <Stack.Screen name={SCREEN.Account} component={screens.Home} />
                <Stack.Screen name={SCREEN.DrawerNavigation} component={screens.DrawerNavigation} />
                <Stack.Screen name={SCREEN.SingleItem} component={screens.SingleItem} />
                <Stack.Screen name={SCREEN.SingleItemFull} component={screens.SingleItemFull} />
                <Stack.Screen name={SCREEN.HomePick} component={screens.HomePick} />
                <Stack.Screen name={SCREEN.Favourites} component={screens.Favourites} />
                <Stack.Screen name={SCREEN.SwapRequest} component={screens.SwapRequest} />
                <Stack.Screen name={SCREEN.MyOrders} component={screens.MyOrders} />
                <Stack.Screen name={SCREEN.OrderDetails} component={screens.OrderDetails} />
                <Stack.Screen name={SCREEN.TrackOrder} component={screens.TrackOrder} />
                <Stack.Screen name={SCREEN.TrackLocation} component={screens.TrackLocation} />
                <Stack.Screen name={SCREEN.PaymentMethod} component={screens.PaymentMethod} />
                <Stack.Screen name={SCREEN.Reviews} component={screens.Reviews} />
                <Stack.Screen name={SCREEN.GrilledChicken} component={screens.GrilledChicken} />
                <Stack.Screen name={SCREEN.EditProfile} component={screens.EditProfile} />
                <Stack.Screen name={SCREEN.ProfileSetup} component={screens.ProfileSetup} />
                <Stack.Screen name={SCREEN.SwapMeal} component={screens.SwapMeal} />
                
            </Stack.Navigator>
       
    )
}

export default HomeTab
    ;
