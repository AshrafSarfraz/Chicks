import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Img from './NoCartFound.png'
import styles from './Styles'
import CheckoutHeader from '../../components/reuseables/CheckoutHeader'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { COLOR } from '../../data/StyleGuides'
export const NoCartFound = () => {
  const navigation = useNavigation();
  const thememode = useSelector((state)=>state.theme.mode);
  return (
    
    <View style={[styles.Container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
    <CheckoutHeader title={'Cart'} onpress ={()=>navigation.goBack()}/>
   

       
          <View style={styles.Img}>
            <Image style={styles.ImgStyle} source={Img} />
          </View>
          <Text style={[styles.Text_Title,{color:thememode==='light'? COLOR.black : COLOR.white}]}>No Cart Found</Text>
        </View>


     
   
  )
}

