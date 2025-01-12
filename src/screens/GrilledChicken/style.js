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
        top: 80,
        zIndex: 1

    },
    BottomView: {
        flex: .6,
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
        marginTop: "20%"
    },
    RatingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '4%',
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
        marginTop: '8%'
    },
    buttonContainercan: {
        width: '50%',
        height: 40,
        backgroundColor: COLOR.white,

    },
    buttontextcan: {
        color: COLOR.primary
    },
    buttoncontainer: {
        width: '50%',
        height: 40,
    },
    integrat: {
      
         
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
    }

})
export default style;