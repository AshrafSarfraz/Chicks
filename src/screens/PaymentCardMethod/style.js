import React from "react";
import {Text,View,StyleSheet} from 'react-native'
import { COLOR, FONT } from "../../data/StyleGuides";

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOR.white

    },
    cardiamge:{
        height:198,
        width:"90%",
        marginHorizontal:"5%",
        marginVertical:"10%",
        borderRadius:20
    },
    AddCard:{
        fontSize:16,
        fontWeight:'400',
        fontFamily:FONT.Roboto_Regular,
        marginBottom:'1%',
        color:COLOR.black,
        marginLeft:"5%"
    },
    Textinputcontainer:{
        backgroundColor:"rgba(244, 246, 248, 1)",
        borderRadius:15,
    },
    INputsveiw:{
        width:'90%',
        marginHorizontal:"5%",
        justifyContent:"space-between",
        flexDirection:"row"
    },
    TextinputcontainerEx:{
        backgroundColor:"rgba(244, 246, 248, 1)",
        borderRadius:15,
        width:'47%'
    },

    buttonContainer: {
        marginTop:"20%",
        height: 58,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: COLOR.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
      buttonText: {
        fontSize: 16,
        color: COLOR.white,
        fontFamily: FONT.Urbanist_Bold,
      },
})
export default style;