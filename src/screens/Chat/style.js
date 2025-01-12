import React from "react";
import {Text,View,StyleSheet} from 'react-native'
import { COLOR, FONT } from "../../data/StyleGuides";

const style = StyleSheet.create({
    container:{
        flex:1,
backgroundColor:COLOR.white
    },
    icon: {
        height: 47,
        width: 47,
        alignSelf: 'center',
        marginTop: "8%",
    },
    titlestyle:{
    marginLeft:'38%'
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
    Container: {
        height: 60,
        width: 281,
        backgroundColor: COLOR.grey,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '5%',
        marginTop: '8%',
      },
      text: {
        fontSize: 14,
        color: COLOR.black,
        fontFamily: FONT.Roboto_Regular,
        width: '90%',
      },
      secondContainer: {
        height: 60,
        width: 281,
        backgroundColor: COLOR.grey,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '5%',
        marginTop: '3%',
      },
      redContainer: {
        height: 60,
        width: 281,
        backgroundColor: COLOR.primary,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginTop: '3%',
        marginRight:'5%'
      },
      messcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 15,
        justifyContent: 'space-between',
        width: '100%',
      
      },
      attachIcon: {
        height: 24,
        width: 24,
        
      },
      inputContainer: {
        height: 41,
        width: 281,
        borderWidth: 1,
        borderColor: COLOR.grey_1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        justifyContent: 'space-between',
        marginRight: '5%',
      },
      textInput: {
        width: '80%',
        color: COLOR.black,
      },
      sendIcon: {
        height: 20,
        width: 20,
        marginRight: '8%',
      },
})
export default style;