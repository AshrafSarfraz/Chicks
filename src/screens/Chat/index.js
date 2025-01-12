import React from "react";
import {  Text, View, Image,ScrollView, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'
import CheckoutHeader from "../../components/reuseables/CheckoutHeader";
import Button from "../../components/reuseables/Button";
import { useNavigation } from "@react-navigation/native";
import BotttomHeight from "../../components/reuseables/BotttomHeight";
import { COLOR, FONT } from "../../data/StyleGuides";
import ReuseHeader from "../../components/reuseables/ReuseHeader";
import { useSelector } from "react-redux";


const Chat = () => {
    const naviagtion = useNavigation();
    const thememode = useSelector((state)=>state.theme.mode);
    return (
        <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
            <ScrollView>
       <ReuseHeader title={'Chat'} titlestyle={styles.titlestyle} onPress={()=>naviagtion.goBack()} />
        <View style={[styles.Container,{backgroundColor:thememode==='light' ? COLOR.grey : COLOR.darkprimary}]}>
  <Text style={[styles.text,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Hi welcome to wagon, how can we help you?</Text>
</View>

<View style={[styles.secondContainer,{backgroundColor:thememode==='light' ? COLOR.grey : COLOR.darkprimary}]}>
  <Text style={[styles.text,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Type "Hello" to start the chat with wagon help centre</Text>
</View>

<View style={styles.redContainer}>
  <Text style={[styles.text,{color:COLOR.white}]}>I am facing some problem to use the app please help me!</Text>
</View>


        <BotttomHeight/>
        </ScrollView>
        <View style={styles.messcontainer}>
        <TouchableOpacity style={{marginLeft: '8%',}}>
  <Image style={[styles.attachIcon,{tintColor:thememode==='light' ? COLOR.black : COLOR.white}]} source={require('../../Assets/icons/akar-icons_attach.png')} />
  </TouchableOpacity>
  <View style={styles.inputContainer}>
    <TextInput
      style={[styles.textInput,{color:thememode==='light'?COLOR.black:COLOR.white}]}
      placeholderTextColor={COLOR.grey_1}
      placeholder="Send a message"
    />
    <TouchableOpacity >
    <Image style={styles.sendIcon} source={require('../../Assets/icons/send.png')} />
    </TouchableOpacity>
  </View>
</View>
    </View>
    )
}

export default Chat;