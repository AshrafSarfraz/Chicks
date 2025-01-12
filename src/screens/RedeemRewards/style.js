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
    childcontainer:{
        marginTop:"5%",
        height:122,
        backgroundColor:COLOR.gray_240,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center',
        width:'100%'
    },
    pointsiamge:{
        width:111,
        height:78,
        justifyContent:'center',
        alignSelf:'center',
        marginLeft:"5%"
    },
    Total_View:{
        width:'50%',
        height:"100%",
        alignSelf:'center',
        justifyContent:'center',
        marginHorizontal:"5%",
    },
    Totaltext:{
        fontSize:16,
        fontWeight:'400',
        color:COLOR.black,
        fontFamily:FONT.Urbanist_Regular,
        textAlignVertical:"center",
        justifyContent:'center'
 
    },
    Totaltext1:{
        fontSize:25,
        fontWeight:'400',
        color:COLOR.black,
        fontFamily:FONT.Urbanist_Regular,
        textAlignVertical:"center",
        justifyContent:'center'
 
    },
    Buttons_View:{
        flexDirection:'row',
        justifyContent:"space-between",
       marginVertical:"5%",
      
    },
    ScaneButton:{
        height:32,
        width:115,
    },
    integer:{
        fontSize:36,
        fontWeight:"500",
        fontFamily:FONT.Urbanist_Medium,
        color:COLOR.black
    }
})
export default style;