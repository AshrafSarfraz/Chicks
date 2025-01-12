import React,{useState} from "react";
import {ImageBackground, Text,View,Image, ScrollView} from 'react-native'
import styles from './style'
import CheckoutHeader from "../../../components/reuseables/CheckoutHeader";
import Input from "../../../components/reuseables/Input";
import Button from "../../../components/reuseables/Button";
import BotttomHeight from "../../../components/reuseables/BotttomHeight";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../../data/enums";
import { COLOR } from "../../../data/StyleGuides";
import { useSelector } from "react-redux";

const Email = ()=>{
    const navigation = useNavigation();
const thememode = useSelector((state)=>state.theme.mode);
const [NextMail, setNextMail] = useState(null)
    const [mailvale, setmailvale] = useState({
        passFocus: false,
        idFocus: false,
      })

      const handleChangemail = (mail, mailvale) => { setmailvale((prevState) => ({ ...prevState, [mail]: mailvale })) };
    return(
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white: COLOR.black}]}>
          <CheckoutHeader title={'Forgot Password'} />
          <ScrollView>
         <Text style={[styles.enter,{color:thememode==='light' ? COLOR.black: COLOR.white}]}>
         Enter the email address for which you forgot the{'\n'}password. We will send an OTP to the email.</Text>
         <Text style={[styles.Email,{color:thememode==='light' ? COLOR.black: COLOR.white}]}>
         Email Address
         </Text>
         <Input
         onChange={(text) => setNextMail(text)}
         placeholder={'abc@gmail.com'}
         placeholderColor={mailvale.idFocus ? COLOR.primary : COLOR.grey_1}
         style={[styles.input, mailvale.idFocus && styles.focusedInput]}
         onFocus={() => handleChangemail('idFocus', true)}
         onBlur={() => handleChangemail('idFocus', false)}
         
       />
         <BotttomHeight/>
         <Button title={'Send OTP'} ButtonContainer={styles.Buttoncontaienr} onPress={()=>navigation.navigate(SCREEN.Otp)}/>
         </ScrollView>
    </View>
    )
}

export default Email;