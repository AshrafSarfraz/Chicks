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

const PaymentCardMethod = () => {
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
       
        naviagtion.navigate(SCREEN.TabNavigation,{Pro:true})
    };

    const handlePay = () => {
   
        console.log("Payment logic");
    };


    return (
        <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
            <CheckoutHeader title={'                 Payment Method'} />
            <ScrollView>
           <Image source={require('../../Assets/images/Paymentcard.png')} style={styles.cardiamge}/>

           <Text style={[styles.AddCard,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
           Add a Card
           </Text>
        <Input placeholder={'Name'} style={[styles.Textinputcontainer,{backgroundColor:thememode==='light' ?"rgba(244, 246, 248, 1)": COLOR.darkprimary}]} onChange={(txt)=>setName(txt)}  value={name}/>
        <Input placeholder={'Card Number enter here'} style={[styles.Textinputcontainer,{backgroundColor:thememode==='light' ?"rgba(244, 246, 248, 1)": COLOR.darkprimary}]} onChange={(txt)=>setCardno(txt)}  value={Cardno} keyboardType={'numeric'}/>
        <View style={styles.INputsveiw}>
        <Input placeholder={'Expiry Date'} style={[styles.TextinputcontainerEx,{backgroundColor:thememode==='light' ?"rgba(244, 246, 248, 1)": COLOR.darkprimary}]} onChange={(txt)=>setExp(txt)}  value={Exp} keyboardType={'numeric'} />
        <Input placeholder={'CVV'} onChange={(txt)=>setCv(txt)}  value={Cv} style={[styles.TextinputcontainerEx,{backgroundColor:thememode==='light' ?"rgba(244, 246, 248, 1)": COLOR.darkprimary}]} addRight={<Image source={require('../../Assets/images/Questionmark.png')}style={[{width:7.5,height:13},{tintColor:thememode==='light' ? COLOR.black : COLOR.white}]}/> } keyboardType={'numeric'} />
        </View>


        <TouchableOpacity  style={[styles.buttonContainer,{ backgroundColor: isFormValid ? COLOR.primary : 'rgba(182, 52, 41, 0.58)',}]} disabled={!isFormValid} onPress={isFormValid ? handleSave : handlePay}>
        <Text style={styles.buttonText}>{isFormValid ? 'Save' : 'Pay'}</Text>
    </TouchableOpacity>
      </ScrollView>
        </View>
    )
}

export default PaymentCardMethod;