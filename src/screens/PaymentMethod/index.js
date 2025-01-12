import React from "react";
import { ImageBackground, Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './style'
import CheckoutHeader from "../../components/reuseables/CheckoutHeader";
import RedeemRewardsComponents from "../../components/RedeemRewardsComponents";
import Button from "../../components/reuseables/Button";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../data/enums";
import { useSelector } from "react-redux";
import { COLOR } from "../../data/StyleGuides";

const PaymentMethod = () => {
    const naviagtion = useNavigation();
    const thememode = useSelector((state)=>state.theme.mode);
    return (
        <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
            <CheckoutHeader title={'Payment Method'} titlestyle={styles.titilestye}/>
            <Text style={[styles.ChooseText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
                Choose Payment Method
            </Text>
            <TouchableOpacity style={[styles.CardVeiw,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.darkprimary}]} onPress={()=>naviagtion.navigate(SCREEN.PaymentCardMethod)}>
                <Text style={[styles.Credit,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
                    Credit / Debit
                </Text>
                <Image source={require('../../Assets/images/Cardimage.png')} style={[styles.imagecard,{tintColor:thememode==='light' ? COLOR.black : COLOR.white}]} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.CardVeiw,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.darkprimary}]} onPress={()=>naviagtion.navigate(SCREEN.BankDetails)}>
                <Text style={[styles.Credit,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
                Bank account
                </Text>
                <Image source={require('../../Assets/images/PayPaliamge.png')} style={[styles.imagecardp,{tintColor:thememode==='light' ? COLOR.black : COLOR.white}]} />
            </TouchableOpacity>
        </View>
    )
}

export default PaymentMethod;