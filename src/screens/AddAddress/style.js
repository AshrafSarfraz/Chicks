import React from "react";
import {Text,View,StyleSheet} from 'react-native'
import { COLOR, FONT } from "../../data/StyleGuides";

const style = StyleSheet.create({
    container:{
        flex:1,
        
    },
    inputContainer: {
      marginLeft: '5%',
      marginTop: '10%',
    },
    label: {
      fontSize: 14,
      fontFamily: FONT.Urbanist_SemiBold,
      color: COLOR.black,
    },
    input: {
      height: 48,
      width: 318,
      borderWidth: 1,
      borderColor:"#E4DFDF",
      backgroundColor: COLOR.white,
      marginTop: '2%',
      color:COLOR.black,
      fontFamily:FONT.Urbanist_Bold,
      fontSize:12,
      paddingLeft:10,
      borderRadius:10
    },
    inputContainerSecond: {
      marginLeft: '5%',
      marginTop: '5%',
    },
    focusedInput: {
      borderWidth: 1,
      borderColor:COLOR.primary
    },
    titllestyel:{
      marginLeft:'30%'
    }
})
export default style;