import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as screens from '../screens';
import { SCREEN } from '../data/enums';

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const MyOrdersTab = () => {
    return (
     
            <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName={SCREEN.Splash}>
                <Stack.Screen name={SCREEN.Account} component={screens.CheckoutCart} />
                {/* <Stack.Screen name={SCREEN.DrawerNavigation} component={screens.DrawerNavigation} /> */}
                <Stack.Screen name={SCREEN.Favourites} component={screens.Favourites} />
                <Stack.Screen name={SCREEN.SwapRequest} component={screens.SwapRequest} />
                <Stack.Screen name={SCREEN.MyOrders} component={screens.MyOrders} />
                <Stack.Screen name={SCREEN.OrderDetails} component={screens.OrderDetails} />
                <Stack.Screen name={SCREEN.TrackOrder} component={screens.TrackOrder} />
                <Stack.Screen name={SCREEN.NoCartFound} component={screens.NoCartFound} />
            </Stack.Navigator>
       
    )
}

export default MyOrdersTab
    ;
