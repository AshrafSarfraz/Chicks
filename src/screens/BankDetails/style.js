import React from "react";
import {Text,View,StyleSheet} from 'react-native'
import { COLOR, FONT } from "../../data/StyleGuides";

const style = StyleSheet.create({
    container:{
        flex:1,
backgroundColor:COLOR.white
    },
 input:{
    height:50,width:320,borderWidth:1,borderColor:COLOR.grey_1,borderRadius:10,alignSelf:'center',marginTop:'15%',fontFamily:FONT.Roboto_Medium,fontSize:12,paddingLeft:10
 },
 input2:{
    height:50,width:320,borderWidth:1,borderColor:COLOR.grey_1,borderRadius:10,alignSelf:'center',marginTop:'5%',fontFamily:FONT.Roboto_Medium,fontSize:12,paddingLeft:10
 },
 input3:{
    height:50,width:150,borderWidth:1,borderColor:COLOR.grey_1,borderRadius:10,alignSelf:'center',marginTop:'5%',fontFamily:FONT.Roboto_Medium,fontSize:12,paddingLeft:10
 },inputBox:{
    flexDirection:'row',alignItems:'center',
    width:"90%",
    marginHorizontal:'5%',
    justifyContent:'space-between'
 }

})
export default style;