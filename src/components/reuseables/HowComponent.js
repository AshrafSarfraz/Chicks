import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';
import { COLOR, FONT } from '../../data/StyleGuides';
import { useSelector } from 'react-redux';


const HowComponent = ()=>{
    const thememode= useSelector((state)=>state.theme.mode)
    const data = [
        {
          
            detail: "Lorem ipsum dolor sit amet \n consectetur. Convallis vel eget \n pretium et dignissim commodo \n lacus nulla.",
            detail2:"Lorem ipsum dolor sit amet \n consectetur. Convallis vel eget \n pretium et dignissim commodo \n lacus nulla. Lorem ipsum dolor sit \n amet consectetur. Convallis vel \n eget pretium et"
           
    
        },]
    return(
        <FlatList
        data={data}
        renderItem={({item})=>(
            <TouchableOpacity style={[styles.itemContainer,{backgroundColor:thememode==='light'?COLOR.gray_236 : COLOR.darkprimary}]}>
            <Image source={require('../../Assets/images/Women.png')} style={styles.krunchiamge} />           
           <View style={styles.ChunkyView}>
            
             <Text style={[styles.Fillet,{color:thememode==='light'?COLOR.black : COLOR.white}]}>
               {item.detail}
             </Text>

             <Text style={[styles.Fillet,{color:thememode==='light'?COLOR.black : COLOR.white}]}>
             {item.detail2}
           </Text>
            
           
           </View>
           </TouchableOpacity>
        )}
        
        />

    )
}
const  styles = StyleSheet.create({
    itemContainer: {
        height: 207,
        width: '90%',
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: COLOR.gray_236,
        elevation: 2,
        alignSelf: 'center',
        flexDirection:"row",
        marginHorizontal:"5%"

    },
    Chunky:{
        fontSize:15,
        fontWeight:'400',
        color:COLOR.primary,
        fontFamily:FONT.Urbanist_Medium,
        marginLeft:'5%',
        marginVertical:"5%"
    },
    krunchiamge:{
        width:114,
        height:207,
        alignSelf:"center",
        justifyContent:'center',
        
    },
    ChunkyView:{
        width:"65%",
        height:"100%",
        marginHorizontal:"5%",
        marginVertical:'2%',
        justifyContent:'space-around',
        alignSelf:'center'
    },
    Fillet:{
        fontSize:12.3,
        fontWeight:'400',
        color:COLOR.black,
        fontFamily:FONT.Urbanist_Regular,
    },
   
   
})
export default HowComponent