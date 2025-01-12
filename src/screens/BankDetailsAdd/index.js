import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from './style'
import CheckoutHeader from "../../components/reuseables/CheckoutHeader";
import RedeemRewardsComponents from "../../components/RedeemRewardsComponents";
import Button from "../../components/reuseables/Button";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../data/enums";
import Input from "../../components/reuseables/Input";
import { COLOR, FONT } from "../../data/StyleGuides";
import { useSelector } from "react-redux";

const BankDetailsAdd = () => {
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
            <CheckoutHeader title={'                 Bank Details'} />
            <ScrollView>
            <View style={styles.Container}>
  <View style={styles.logoContainer}>
    <Image style={styles.logo} source={require('../../Assets/images/BankMaFrench.png')} />
    <View style={styles.textContainer}>
      <Text style={styles.bankName}>Bank Name</Text>
      <Text style={styles.accountHolder}>Ali hasssan</Text>
      <Text style={styles.additionalInfo}>Bank Name</Text>
    </View>
  </View>
</View>
        <TouchableOpacity style={[styles.buttonContainer,{ backgroundColor: COLOR.primary}]} >
        <Text style={styles.buttonText}>Pay</Text>
    </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity  style={styles.addbtn}>
    <Text style={styles.buttonText}>Add+</Text>
    </TouchableOpacity>
        </View>
    )
}

export default BankDetailsAdd;