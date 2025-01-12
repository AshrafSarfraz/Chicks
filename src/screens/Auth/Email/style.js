import React from "react";
import {Text,View,StyleSheet} from 'react-native'
import { COLOR, FONT } from "../../../data/StyleGuides";


const style = StyleSheet.create({
    container:{
        flex:1,
backgroundColor:COLOR.white
    },
    enter:{
        fontWeight:"500",
        fontSize:14,
        fontFamily:FONT.Urbanist_Regular,
        color:'#969696',
        marginTop:"10%",
        marginLeft:"5%"
    },
    Email:{
        fontWeight:"600",
        fontSize:14,
        fontFamily:FONT.Urbanist_SemiBold,
        color:COLOR.black,
        marginTop:"10%",
        marginLeft:"5%"
    },
    Buttoncontaienr:{
        marginTop:'30%'
    },
    input: {
        borderColor: COLOR.black,
        borderWidth: 0,
      },
      focusedInput: {
        borderWidth: 1,
        borderColor:COLOR.primary
      },
 
})
export default style;