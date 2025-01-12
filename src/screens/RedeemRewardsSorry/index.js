import React from "react";
import { ImageBackground, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import styles from './style'
import CheckoutHeader from "../../components/reuseables/CheckoutHeader";
import RedeemRewardsComponents from "../../components/RedeemRewardsComponents";
import Button from "../../components/reuseables/Button";
import ReuseHeader from "../../components/reuseables/ReuseHeader";
import { useSelector } from "react-redux";
import { COLOR } from "../../data/StyleGuides";

const RedeemRewardsSorry = () => {

    const thememode = useSelector((state) => state.theme.mode);
    const data = [
        {

            detail: "Sorry! You don’t have enough \npoints for this reward yet.\nCheck out our “Earn” page\non how to earn more!",



        },]
    return (
        <View style={[styles.container, { backgroundColor: thememode === 'light' ? COLOR.white : COLOR.black }]}>
            <ReuseHeader title={'Redeem Rewards'} titlestyle={styles.titlecolor} onPress={() => naviagtion.goBack()} />
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.itemContainer,{backgroundColor:thememode==='light'?gray_236:COLOR.darkprimary}]}>
                        <Image source={require('../../Assets/images/WomenSorryimage.png')} style={styles.krunchiamge} />
                        <View style={styles.ChunkyView}>

                            <Text style={[styles.Fillet,{color:thememode==='light'?COLOR.black:COLOR.white}]}>
                                {item.detail}
                            </Text>

                        </View>
                    </TouchableOpacity>
                )}

            />
        </View>
    )
}

export default RedeemRewardsSorry;