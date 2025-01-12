import React from "react";
import { ImageBackground, Text, View, Image } from 'react-native'
import styles from './style'
import CheckoutHeader from "../../components/reuseables/CheckoutHeader";
import RedeemRewardsComponents from "../../components/RedeemRewardsComponents";
import Button from "../../components/reuseables/Button";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../data/enums";
import ReuseHeader from "../../components/reuseables/ReuseHeader";
import { useSelector } from "react-redux";
import { COLOR } from "../../data/StyleGuides";

const RedeemRewards = () => {
    const naviagtion = useNavigation();
    const thememode = useSelector((state)=>state.theme.mode);
    return (
        <View style={[styles.container,{backgroundColor:thememode==='light'?COLOR.white : COLOR.black}]}>
    <ReuseHeader title={'Redeem Rewards'} titlestyle={styles.titlecolor} onPress={()=>naviagtion.goBack()} />
            <View style={[styles.childcontainer,{backgroundColor:thememode==='light'?COLOR.gray_240 : COLOR.darkprimary}]}>
                <Image source={thememode==='light'?require('../../Assets/images/whiteRedeem.png'):require('../../Assets/images/darkredeem.png')} style={styles.pointsiamge} />
                <View style={styles.Total_View}>
                    <Text style={[styles.Totaltext,{color:thememode==='light'?COLOR.black : COLOR.white}]}>
                        Total Points Earned
                    </Text>
                    <View style={styles.Buttons_View}>
                        <Text style={[styles.Totaltext1,{color:thememode==='light'?COLOR.black : COLOR.white}]}>
                            250
                        </Text>
                        <Button title={'Scan Receipt'} ButtonContainer={styles.ScaneButton} onPress={()=>naviagtion.navigate(SCREEN.RedeemRewardsScanner)} />
                    </View>
                </View>
            </View>
            <RedeemRewardsComponents />
        </View>
    )
}

export default RedeemRewards;