import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';
import { COLOR, FONT } from '../../data/StyleGuides';
import { SCREEN } from '../../data/enums';
import { useSelector } from 'react-redux';


const RedeemComponent = ()=>{
    const navigation = useNavigation();
    const thememode=useSelector((state=>state.theme.mode))
    const data = [
        {
            name: 'Krunch Burger',
            detail: 'Get a FREE sandwiched between a \n sesame seed bun for you and a friend!',
            price:'$15'
           
    
        },]
    return(
        <FlatList
        data={data}
        renderItem={({item})=>(
            <TouchableOpacity style={[styles.itemContainer,{backgroundColor:thememode==='light'?COLOR.gray_236 : COLOR.darkprimary}]}>
            <Image source={require('../../Assets/images/kurchBurger.png')} style={styles.krunchiamge} />           
           <View style={styles.ChunkyView}>
             <View style={styles.ButtontextVeiw}>
             <Text style={[styles.Kurnch,{color:thememode==='light'?COLOR.black : COLOR.white}]}>
               {item.name}
             </Text>
             <Text style={[styles.Kurnch,{color:thememode==='light'?COLOR.black : COLOR.white}]}>
               {item.price}
             </Text>
             </View>
             <Text style={[styles.Fillet,{color:thememode==='light'?COLOR.black : COLOR.white}]}>
               {item.detail}
             </Text>
            
             <Button title={'Redeem'} ButtonContainer={styles.Clam} onPress={()=>navigation.navigate(SCREEN.RedeemRewardsSorry)} />
           </View>
           </TouchableOpacity>
        )}
        
        />

    )
}
const  styles = StyleSheet.create({
    itemContainer: {
        height: 138,
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
        width:69,
        height:69,
        alignSelf:"center",
        justifyContent:'center',
        marginLeft:"3%"
    },
    ChunkyView:{
        width:"65%",
        height:"100%",
        marginHorizontal:"5%"
    },
    ButtontextVeiw:{
        flexDirection:'row',
        height:50,
        justifyContent:'space-between'
    },
    thirtybutton:{
        width:110,
        height:25,
        backgroundColor:'rgba(182, 52, 41, 0.61);',
        borderRadius:5,
    },
    buttonText:{
        fontSize:10,
        fontWeight:'500',

    },
    Kurnch:{
        fontSize:14,
        fontWeight:'600',
        color:COLOR.black,
        fontFamily:FONT.Urbanist_Medium,
        alignSelf:'flex-end',
        marginBottom:"5%"
   
    },
    Fillet:{
        fontSize:10,
        fontWeight:'400',
        color:COLOR.black,
        fontFamily:FONT.Urbanist_Regular,
    },
    Customize:{
        fontSize:14,
        fontWeight:'600',
        color:COLOR.primary,
        fontFamily:FONT.Urbanist_Medium,
        marginVertical:5,
    },
    Clam:{
        width:110,
        height:25,
        backgroundColor:COLOR.primary,
        borderRadius:5,
        alignSelf:'flex-start',
        marginTop:"5%"
    }
    
})
export default RedeemComponent