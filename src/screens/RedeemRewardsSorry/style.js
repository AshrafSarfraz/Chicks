import React from "react";
import {Text,View,StyleSheet} from 'react-native'
import { COLOR, FONT } from "../../data/StyleGuides";

const style = StyleSheet.create({
    container:{
        flex:1,
backgroundColor:COLOR.white
    },
    titlecolor:{
        color:COLOR.primary,
        marginLeft:"28%"
    },
  
        itemContainer: {
            height: 123,
            width: '90%',
            marginBottom: 16,
            borderRadius: 8,
            backgroundColor: COLOR.gray_236,
            elevation: 2,
            alignSelf: 'center',
            flexDirection:"row",
            marginHorizontal:"5%",
            marginTop:'10%'
    
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
            width:120,
            height:120,
            alignSelf:"center",
            justifyContent:'center',
            marginLeft:"1%"
            
        },
        ChunkyView:{
            width:"60%",
            height:"90%",
            marginVertical:'2%',
            justifyContent:'space-around',
           
        },
        Fillet:{
            fontSize:15,
            fontWeight:'400',
            color:COLOR.black,
            fontFamily:FONT.Urbanist_Regular,
        },
       
       
    
    
})
export default style;