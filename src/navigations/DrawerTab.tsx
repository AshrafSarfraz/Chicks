import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as screens from '../screens';
import { SCREEN } from '../data/enums';

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const DrawerTab = () => {
    return (
     
            <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName={SCREEN.Splash}>
                {/* <Stack.Screen name={SCREEN.Account} component={screens.Home} />
                <Stack.Screen name={SCREEN.DrawerNavigation} component={screens.DrawerNavigation} />
                <Stack.Screen name={SCREEN.SingleItem} component={screens.SingleItem} />
                <Stack.Screen name={SCREEN.SingleItemFull} component={screens.SingleItemFull} />
                <Stack.Screen name={SCREEN.HomePick} component={screens.HomePick} />
                <Stack.Screen name={SCREEN.CheckoutCart} component={screens.CheckoutCart} />
                <Stack.Screen name={SCREEN.CheckoutCard} component={screens.CheckoutCard} />
                <Stack.Screen name={SCREEN.CheckoutPIN} component={screens.CheckoutPIN} />
                <Stack.Screen name={SCREEN.CheckoutDetails} component={screens.CheckoutDetails} />
                <Stack.Screen name={SCREEN.Favourites} component={screens.Favourites} />
                <Stack.Screen name={SCREEN.SwapRequest} component={screens.SwapRequest} />
                <Stack.Screen name={SCREEN.MyOrders} component={screens.MyOrders} />
                <Stack.Screen name={SCREEN.OrderDetails} component={screens.OrderDetails} />
                <Stack.Screen name={SCREEN.TrackOrder} component={screens.TrackOrder} />
                <Stack.Screen name={SCREEN.TrackLocation} component={screens.TrackLocation} />
                <Stack.Screen name={SCREEN.RedeemRewards} component={screens.RedeemRewards} />
                <Stack.Screen name={SCREEN.RedeemRewardsSorry} component={screens.RedeemRewardsSorry} />
                <Stack.Screen name={SCREEN.RedeemRewardsScanner} component={screens.RedeemRewardsScanner} />
                <Stack.Screen name={SCREEN.PaymentMethod} component={screens.PaymentMethod} />
                <Stack.Screen name={SCREEN.Reviews} component={screens.Reviews} />
                <Stack.Screen name={SCREEN.GrilledChicken} component={screens.GrilledChicken} />
                <Stack.Screen name={SCREEN.EditProfile} component={screens.EditProfile} />
                <Stack.Screen name={SCREEN.ProfileSetup} component={screens.ProfileSetup} />
                 */}
            </Stack.Navigator>
       
    )
}

export default DrawerTab
    ;
