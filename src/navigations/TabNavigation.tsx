import { StyleSheet, View, Image } from 'react-native'
import React,{useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as screens from '../screens';
import { COLOR } from '../data/StyleGuides';
import { SCREEN } from '../data/enums';
import ProfileStack from './ProfileStack';
import HomeTab from './HomeTab';
import MyOrdersTab from './MyOrdersTab';
import RedeemRewardsTab from './RedeemRewardsTab';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const Tab = createBottomTabNavigator();
const TabNavigation = ({navigation,route}) => {
    const Pro = route.params?.Pro || false;

    const thememode = useSelector((state)=>state.theme.mode);
    useEffect(() => {
        // If Pro is true, reset the navigation stack to Home screen
        if (Pro) {
          navigation.reset({
            index: 0,
            routes: [{ name: SCREEN.Home }],
          });
        }
      }, [Pro, navigation]);
    return (
        <Tab.Navigator

            screenOptions={{ headerShown: false, tabBarLabelStyle: { display: 'none' }, tabBarHideOnKeyboard: true,
            tabBarStyle: {
                position: 'absolute',
            height:70,
                elevation: 0,
                backgroundColor:thememode==='light' ? COLOR.white : COLOR.black,
                borderTopColor: 'transparent',
                borderTopLeftRadius:40,
                borderTopRightRadius:40
            },
            
            }}>

            <Tab.Screen
                name={SCREEN.Home}
                component={HomeTab}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image
                                source={focused ? require('../Assets/icons/Home.png') : require('../Assets/icons/whiteHome.png') }
                                style={styles.tabBarIcon}
                            />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name={'RedeemRewardsTab'}
                component={RedeemRewardsTab}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image
                                source={focused ? require('../Assets/icons/reward.png') : require('../Assets/icons/whitereward.png')}
                                style={styles.tabBarHomeIcon} />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name={'CheckoutCart'}
                component={screens.CheckoutCart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image source={focused ? require('../Assets/icons/cart.png') : require('../Assets/icons/whitecart.png')}
                                style={styles.tabBarIcon} />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name={'Account'}
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image
                                source={focused ? require('../Assets/icons/reduser.png') : require('../Assets/icons/User.png')} style={styles.tabBarIcon}
                            />
                        </View>
                    ),
                }}
            />
            
        </Tab.Navigator >
    )
}

export default TabNavigation

const styles = StyleSheet.create({
    tabBarIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    tabBarIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    tabBarHomeIcon: {
        height: 20,
        width: 26,
        resizeMode: 'contain'
    },
    activeTabBar: {
        position: 'absolute',
        top: 25,
        left: 0,
        right: 0,
        height: 3,
        backgroundColor: COLOR.primary,
    },
})



