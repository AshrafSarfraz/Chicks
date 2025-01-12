import React from "react";
import { Text, View, StyleSheet } from 'react-native'
import { COLOR, FONT } from "../../data/StyleGuides";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.red_64
    },
    imageView: {
        flex: .4,
        zIndex: 1,


    },
    image: {
        width: 254,
        height: 254,
        position: "absolute",
       alignSelf:'center',
        top: 40,
        zIndex: 1

    },
    BottomView: {
        flex: .9,
        backgroundColor: COLOR.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    Grilled: {
        fontSize: 22,
        fontWeight: "600",
        color: COLOR.primary,
        fontFamily: FONT.Roboto_Bold,
        alignSelf: 'center',
        marginTop: "27%"
    },
    RatingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '2%',
        width: 130,
        alignSelf: 'center'
    },
    name: {
        fontSize: 14,
        fontFamily: FONT.Roboto_Medium,
        color: COLOR.black,
        fontWeight: "500",
    },
    Rating: {
        fontSize: 12,
        fontFamily: FONT.Roboto_Medium,
        color: COLOR.black,
        fontWeight: '500'
    },
    ButtonsView: {
        fontSize: 12,
        flexDirection: "row",
        width: "90%",
        marginHorizontal: "5%",
        justifyContent: 'space-between',
        marginTop: '10%',
        backgroundColor:'rgba(244, 244, 244, 1)',
        height:50,
        borderRadius:10
    },
    buttonContainercan: {
        width: '48%',
        height: 45,
        backgroundColor:COLOR.white,
        borderRadius:10,
        marginLeft:3

    },
    buttontextcan: {
        color: COLOR.primary,
    },
    buttoncontainer: {
        width: '48%',
        height: 45,
        backgroundColor:'transparent',
        marginRight:3,
    },
    Integer: {
      color:COLOR.black
         
    },
    integr: {
        marginLeft: "5%",
        fontFamily: FONT.Roboto_Bold,
        color: COLOR.black,
        fontWeight: '500',
        marginBottom:5,
        marginTop:'4%'
    },

    //    rows buttons
    BottonsView: {
        width: "90%",
        marginHorizontal: "5%",
        flexDirection: "row",
        flexWrap: 'wrap',
        height: 140,
        marginVertical:"3%"
    },
    NoodleContainer: {
        backgroundColor: COLOR.white,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        borderRadius: 5,
        paddingVertical: '1.7%',
        paddingHorizontal: "3%",
        marginTop: 8,
        marginLeft: 5,
    },
    noodletext: {
        fontFamily: FONT.Roboto_Regular,
        color: COLOR.black,
        fontWeight: "400"
    },
    Vorem:{
        fontSize: 14,
        fontFamily: FONT.Roboto_Medium,
        color: COLOR.black_70,
        fontWeight: '500'
    }

})
export default style;