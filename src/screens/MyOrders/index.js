import React,{useState} from "react";
import {ImageBackground, Text,View,Image,Modal} from 'react-native'
import styles from './style'
import CheckoutHeader from "../../components/reuseables/CheckoutHeader";
import SwapComponent from "../../components/reuseables/SwapComponent";
import OrderComponent from "../../components/reuseables/OrderComponent";
import { useSelector } from "react-redux";
import { COLOR } from "../../data/StyleGuides";
const MyOrders = ()=>{
const thememode = useSelector((state)=>state.theme.mode);
   

    return(
    <View style={[styles.container,{backgroundColor:thememode=== 'light' ? COLOR.white : COLOR.black}]}>
          <CheckoutHeader title={'My Orders'}/>
          <View style={styles.imagesView}>
             <Image source={require('../../Assets/images/Circlelock.png')} style={styles.circlelock} />
             <Image source={require('../../Assets/images/sale.png')} style={styles.priceiamge} />
          </View>
       <OrderComponent/>
    
    </View>
    )
}

export default MyOrders;