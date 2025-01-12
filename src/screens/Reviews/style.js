import React from "react";
import { Text, View, StyleSheet } from 'react-native'
import { COLOR, FONT } from "../../data/StyleGuides";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    ReviewChildView: {
        flexDirection: 'row',
        width: "90%",
        marginHorizontal: "5%",
        height: 200,
        marginTop: "10%"

    },
    Rating: {
        fontSize: 12,
        fontWeight: "400",
        fontFamily: FONT.Roboto_Medium,
        color: COLOR.gray_70,
    },
    Childinteger: {
        width: "25%",
        height: 200,


    },
    integer: {
        fontSize: 40,
        fontWeight: "700",
        fontFamily: FONT.Roboto_Bold,
        color: COLOR.primary,

    },
    ChildStar: {
        alignSelf: "flex-end",
        width: "30%",
        height: 190,


    },
    FiveStarView: {
        width: "100%",
        flexDirection: "row",
        height: 25,
        justifyContent: "flex-end"
    },
    star: {
        width: 13.33,
        height: 12,
        resizeMode: 'contain',
        marginLeft: 5,
        alignSelf: "flex-end",
        justifyContent: "flex-end",
        marginVertical: 15,
    },


    Childprogress: {
        width: "40%",
        height: 200,

    },
    progressContainer: {
        flexDirection: "row",
        width: "100%",
        height: 25,
        alignSelf: "center"

    },
    Rating1: {
        fontSize: 12,
        fontWeight: "400",
        fontFamily: FONT.Roboto_Medium,
        color: COLOR.gray_70,
        marginLeft: "6%"
    },
    Rating2: {
        fontSize: 12,
        fontWeight: "400",
        fontFamily: FONT.Roboto_Medium,
        color: COLOR.gray_70,
        marginLeft: "3%"
    },
    progress:{
        width: "70%", marginHorizontal: 10,height:25,
        borderRadius:10,
    },
    itemContainer: {
        height: 165,
        width: '90%',
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor:'rgba(249, 249, 249, 1)',
        elevation: 2,
        borderColor:'rgba(235, 235, 235, 1)',
        alignSelf: 'center',
        marginTop: "1%",
        marginHorizontal: "5%",
        borderWidth:1

    },
    nameView: {
        flexDirection: "row",
        width: "90%",
        marginHorizontal: "5%",
        justifyContent: "space-between",
        marginTop: "5%",
      
    },
    namestyle: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: FONT.Roboto_Medium,
        color: COLOR.black,

    },
    starvi: {
        flexDirection: "row",
        marginLeft: '5%',
        height:30,
 
    },
    star1: {
        width: 13.33,
        height: 12,
        resizeMode: 'contain',
        alignSelf:'center'
      
    },

    detail: {
        fontSize: 14,
        fontWeight: "400",
        fontFamily: FONT.Roboto_Regular,
        color: COLOR.black,
        marginHorizontal:'5%'
    }


})
export default style;