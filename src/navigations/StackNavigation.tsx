import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as screens from '../screens';
import { SCREEN } from '../data/enums';

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName={SCREEN.Splash}>
                <Stack.Screen name={SCREEN.Splash} component={screens.Splash} />
                <Stack.Screen name={SCREEN.OnBoarding} component={screens.OnBoarding} />
                <Stack.Screen name={SCREEN.OnBoardingSecond} component={screens.OnBoardingSecond} />
                <Stack.Screen name={SCREEN.Signin} component={screens.Signin} />
                <Stack.Screen name={SCREEN.DrawerNavigation} component={screens.DrawerNavigation} />
                <Stack.Screen name={SCREEN.SingleItem} component={screens.SingleItem} />
                <Stack.Screen name={SCREEN.SingleItemFull} component={screens.SingleItemFull} />
                <Stack.Screen name={SCREEN.HomePick} component={screens.HomePick} />
                <Stack.Screen name={SCREEN.CheckoutCart} component={screens.CheckoutCart} />
                <Stack.Screen name={SCREEN.CheckoutCard} component={screens.CheckoutCard} />
                <Stack.Screen name={SCREEN.CheckoutPIN} component={screens.CheckoutPIN} />
                <Stack.Screen name={SCREEN.CheckoutDetails} component={screens.CheckoutDetails} />
                <Stack.Screen name={SCREEN.Account} component={screens.Account} />
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
                <Stack.Screen name={SCREEN.PaymentCardMethod} component={screens.PaymentCardMethod} />
                <Stack.Screen name={SCREEN.Reviews} component={screens.Reviews} />
                <Stack.Screen name={SCREEN.GrilledChicken} component={screens.GrilledChicken} />
                <Stack.Screen name={SCREEN.EditProfile} component={screens.EditProfile} />
                <Stack.Screen name={SCREEN.ProfileSetup} component={screens.ProfileSetup} />
                <Stack.Screen name={SCREEN.Contact} component={screens.Contact} />
                <Stack.Screen name={SCREEN.About} component={screens.About} />
                <Stack.Screen name={SCREEN.Privacy} component={screens.Privacy} />
                <Stack.Screen name={SCREEN.Terms} component={screens.Terms} />
                <Stack.Screen name={SCREEN.Notification} component={screens.Notification} />
                <Stack.Screen name={SCREEN.Help} component={screens.Help} />
                <Stack.Screen name={SCREEN.LiveChat} component={screens.LiveChat} />
                <Stack.Screen name={SCREEN.Chat} component={screens.Chat} />

                <Stack.Screen name={SCREEN.ProfilePicture} component={screens.ProfilePicture} />
                <Stack.Screen name={SCREEN.AccountCreated} component={screens.AccountCreated} />
                <Stack.Screen name={SCREEN.SignUp} component={screens.SignUp} />
                <Stack.Screen name={SCREEN.Email} component={screens.Email} />
                <Stack.Screen name={SCREEN.Otp} component={screens.Otp} />
                <Stack.Screen name={SCREEN.ForgotPassword} component={screens.ForgotPassword} />
                <Stack.Screen name={SCREEN.PasswordRecovered} component={screens.PasswordRecovered} />
                <Stack.Screen name={SCREEN.AddAddress} component={screens.AddAddress} />
                <Stack.Screen name={SCREEN.PaymentCardAdd} component={screens.PaymentCardAdd} />
                <Stack.Screen name={SCREEN.BankDetails} component={screens.BankDetails} />
                <Stack.Screen name={SCREEN.BankDetailsAdd} component={screens.BankDetailsAdd} />
                <Stack.Screen name={SCREEN.SwapMeal} component={screens.SwapMeal} />
                <Stack.Screen name={SCREEN.NoodlesDescription} component={screens.NoodlesDescription} />
                <Stack.Screen name={SCREEN.NoCartFound} component={screens.NoCartFound} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;
