import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import styles from './style'
import CheckoutHeader from "../../components/reuseables/CheckoutHeader";
import RedeemRewardsComponents from "../../components/RedeemRewardsComponents";
import Button from "../../components/reuseables/Button";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../data/enums";
import Input from "../../components/reuseables/Input";
import { COLOR, FONT } from "../../data/StyleGuides";
import { useSelector } from "react-redux";

const BankDetails = () => {
    const naviagtion = useNavigation();
    const [name,setName]=useState("")
    const [Cardno,setCardno]=useState("")
    const [Exp,setExp]=useState("")
    const [Cv,setCv]=useState("")
    const [isFormValid, setIsFormValid] = useState(false);
    const thememode = useSelector((state)=>state.theme.mode);

    useEffect(() => {
     
        const isValid = name !== '' && Cardno !== '' && Exp !== '' && Cv !== '';
        setIsFormValid(isValid);
    }, [name, Cardno, Exp, Cv]);
    const handleSave = () => {
       
        console.log("Save logic");
    };

    const handlePay = () => {
   
        console.log("Payment logic");
    };


    return (
        <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
            <CheckoutHeader title={'                  Bank Details'} />
            <ScrollView>
          <TextInput placeholderTextColor={thememode==='light' ? COLOR.black : COLOR.white} placeholder="Bank Name" style={[styles.input,{color:thememode==='light' ? COLOR.black : COLOR.white}]}/>
          <TextInput placeholderTextColor={thememode==='light' ? COLOR.black : COLOR.white} placeholder="Account Number" style={[styles.input2,{color:thememode==='light' ? COLOR.black : COLOR.white}]} keyboardType="numeric"/>
<View style={styles.inputBox}>
<TextInput placeholderTextColor={thememode==='light' ? COLOR.black : COLOR.white} placeholder="Owner first name" style={[styles.input3,{color:thememode==='light' ? COLOR.black : COLOR.white}]}/>
<TextInput placeholderTextColor={thememode==='light' ? COLOR.black : COLOR.white} placeholder="Last name" style={[styles.input3,{color:thememode==='light' ? COLOR.black : COLOR.white}]}/>
</View>


<View style={styles.inputBox}>
<TextInput placeholderTextColor={thememode==='light' ? COLOR.black : COLOR.white} placeholder="City" style={[styles.input3,{color:thememode==='light' ? COLOR.black : COLOR.white}]}/>
<TextInput placeholderTextColor={thememode==='light' ? COLOR.black : COLOR.white} placeholder="Postal Code" style={[styles.input3,{color:thememode==='light' ? COLOR.black : COLOR.white}]} keyboardType="numeric"/>
</View>
      </ScrollView>
    <Button onPress={()=>naviagtion.navigate(SCREEN.DrawerNavigation)} title={'Save'} marginBottom={'10%'}/>
        </View>
    )
}

export default BankDetails;