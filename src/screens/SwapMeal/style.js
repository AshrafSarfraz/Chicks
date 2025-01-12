import React from "react";
import { Text, View, StyleSheet } from 'react-native'
import { COLOR, FONT } from "../../data/StyleGuides";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    HeaderView: {
        alignSelf: "center",
        justifyContent: 'center',
        height: 30,
        borderBottomWidth: 2,
        borderBottomColor: COLOR.primary,
        width: 164,
        marginTop: "8%",
        marginBottom:"5%"
    },
    SwapText: {
        fontSize: 14,
        color: COLOR.primary,
        fontFamily: FONT.Roboto_Medium,
        fontWeight: "500",
        alignSelf: 'center'
    },
    Flatcard: {
    width:"95%",
    flex:1,
    marginleft:"2%",
    marginBottom:"10%"
    },
    CardView: {
     width:'44%', height: 201,
        backgroundColor: COLOR.LightRed_9,
        borderRadius: 5,
        elevation: 5,
        marginTop: "10%",
        marginLeft:"5.5%",
        marginBottom:"5%"
    },
    Chickeniamge: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        zIndex:1,
        bottom:30
    },
    personcard: {
        flexDirection: "row",
        marginLeft: "5%",
        marginVertical:"5%"
    },
    personiamgestyle: {
        width: 22,
        height: 22,
        alignSelf: 'center',
        marginRight:5,
    },
    personname: {
        fontSize: 14,
        color: COLOR.black,
        fontFamily: FONT.Roboto_Medium,
        fontWeight: "500",
        alignSelf: 'center',
        marginRight:3,
    },
    stariamge: {
        width: 14,
        height: 14,
        alignSelf: 'center',
     marginRight:3
    },
    Ratingstyle: {
        fontSize: 12,
        color: COLOR.black,
        fontFamily: FONT.Roboto_Medium,
        fontWeight: "500",
        alignSelf: 'center'
    },
    chickenname: {
        fontSize: 14,
        color: COLOR.black,
        fontFamily: FONT.Roboto_Medium,
        fontWeight: "600",
        marginLeft: '5%',
        marginbottom: "7%",
        
    },
    SwapButton:{
        backgroundColor:COLOR.LightRed_9,
        borderWidth:1,
        borderColor:COLOR.primary,
        borderRadius:10,
        height:45,
        marginTop:5,
        marginBottom:"5%",
        marginTop:"3%"
      
    },
    Swapbuttontext:{
        color:COLOR.primary,
        fontFamily:FONT.Roboto_Medium
    },
    imageView:{
        position:"absolute",
        alignSelf:"center"
    }



})
export default style;