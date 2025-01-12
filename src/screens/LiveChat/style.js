import React from "react";
import {Text,View,StyleSheet} from 'react-native'
import { COLOR, FONT } from "../../data/StyleGuides";

const style = StyleSheet.create({
    container:{
        flex:1,
backgroundColor:COLOR.white
    },
    titlestyle:{
        marginLeft:'33%'
        },
    icon: {
        height: 47,
        width: 47,
        alignSelf: 'center',
        marginTop: "8%",
    },
    title: {
        fontSize: 20,
        fontFamily: FONT.Roboto_Bold,
        color: COLOR.black,
        width: '50%',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: '10%',
    },
    emailIcon: {
        height: 46,
        width: 46,
        alignSelf: 'center',
        marginTop: '25%',
    },
    emailText: {
        fontSize: 14,
        fontFamily: FONT.Poppins_Regular,
        color: COLOR.grey_1,
        marginTop: '5%',
        alignSelf: 'center',
    },
    emailAddress: {
        fontSize: 14,
        fontFamily: FONT.Roboto_Bold,
        color: COLOR.black,
        marginTop: '2%',
        alignSelf: 'center',
    },
})
export default style;