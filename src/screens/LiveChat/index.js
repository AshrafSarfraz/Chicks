import React from "react";
import {  Text, View, Image,ScrollView } from 'react-native'
import styles from './style'
import CheckoutHeader from "../../components/reuseables/CheckoutHeader";
import Button from "../../components/reuseables/Button";
import { useNavigation } from "@react-navigation/native";
import BotttomHeight from "../../components/reuseables/BotttomHeight";
import { SCREEN } from "../../data/enums";
import ReuseHeader from "../../components/reuseables/ReuseHeader";
import { useSelector } from "react-redux";
import { COLOR } from "../../data/StyleGuides";


const LiveChat = () => {
    const navigation = useNavigation();
    const thememode = useSelector((state)=>state.theme.mode);
    return (
        <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
            <ScrollView>
            <ReuseHeader title={'Live Chat'} titlestyle={styles.titlestyle} onPress={()=>navigation.goBack()} />
        <Image source={require('../../Assets/icons/bx_support.png')} style={styles.icon} />
        <Text style={[styles.title,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>How can we help you?</Text>
        <Button onPress={()=>navigation.navigate(SCREEN.Chat)} marginTop={'20%'} title={'Contact Live chat'} />
        <Image style={styles.emailIcon} source={require('../../Assets/icons/redmail.png')} />
        <Text style={styles.emailText}>Send us an email</Text>
        <Text style={[styles.emailAddress,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>info.food.com</Text>
        <BotttomHeight/>
        </ScrollView>

    </View>
    )
}

export default LiveChat;