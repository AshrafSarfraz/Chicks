import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from './style'
import CheckoutHeader from "../../components/reuseables/CheckoutHeader";
import RedeemRewardsComponents from "../../components/RedeemRewardsComponents";
import Button from "../../components/reuseables/Button";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../data/enums";
import Input from "../../components/reuseables/Input";
import { COLOR } from "../../data/StyleGuides";
import { useSelector } from "react-redux";

const PaymentCardAdd = () => {
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
            <CheckoutHeader title={'                 Payment Method'} />
            <ScrollView>
           <Image source={require('../../Assets/images/Paymentcard.png')} style={styles.cardiamge}/>
        <TouchableOpacity style={[styles.buttonContainer,{ backgroundColor: COLOR.primary}]} >
        <Text style={styles.buttonText}>Pay</Text>
    </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity onPress={()=>naviagtion.navigate(SCREEN.BankDetails)} style={styles.addbtn}>
    <Text style={styles.buttonText}>Add+</Text>
    </TouchableOpacity>
        </View>
    )
}

export default PaymentCardAdd;