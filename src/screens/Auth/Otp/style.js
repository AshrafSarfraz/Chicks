import React from "react";
import { Text, View, StyleSheet } from 'react-native'
import { COLOR, FONT } from "../../../data/StyleGuides";


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    enter: {
        fontWeight: "500",
        fontSize: 14,
        fontFamily: FONT.Urbanist_Regular,
        color: '#969696',
        marginTop: "10%",
        marginLeft: "5%"
    },
    Email: {
        fontWeight: "600",
        fontSize: 14,
        fontFamily: FONT.Urbanist_SemiBold,
        color: COLOR.black,
        marginTop: "10%",
        marginLeft: "5%"
    },
    Buttoncontaienr: {
        marginTop: '30%',
      
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginHorizontal:"5%",
        marginTop:"20%"

    },
    Otp: {
        width: 60,
        height: 48,
        backgroundColor: COLOR.white,
        marginBottom: '2%',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 10,
        elevation: 1,
        borderWidth: 2,
        fontSize: 16,
        color: COLOR.black
    },
    input: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 16,
    },
    Footer: {
        flex: 0.3,
        justifyContent: 'flex-end'
    },
    button: {
        backgroundColor: COLOR.primary,
        width: '100%',
        alignSelf: "center",
        padding: '3%',
        borderRadius: 20,
    },
    buttonText: {
        color: COLOR.white,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bottomView:{
        height:420,
       
        alignSelf:"flex-end",justifyContent:"flex-end",
        width:"100%"
    },
  

})
export default style;