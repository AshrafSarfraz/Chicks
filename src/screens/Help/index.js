import React from "react";
import {ImageBackground, Text,View,Image,ScrollView} from 'react-native'
import styles from './style'
import CheckoutHeader from "../../components/reuseables/CheckoutHeader";
import SwapComponent from "../../components/reuseables/SwapComponent";
import OrderComponent from "../../components/reuseables/OrderComponent";
import HelpComponent from "../../components/reuseables/HelpComponent";
import BotttomHeight from "../../components/reuseables/BotttomHeight";
import { useSelector } from "react-redux";
import { COLOR } from "../../data/StyleGuides";
const Help = ()=>{
  const thememode = useSelector((state)=>state.theme.mode)
    return(
    <View style={[styles.container,{backgroundColor:thememode==='light'?COLOR.white : COLOR.black}]}>
      <ScrollView>

          <CheckoutHeader title={'Help'}/>
        <HelpComponent/>
        <BotttomHeight/>
      </ScrollView>

    </View>
    )
}

export default Help;