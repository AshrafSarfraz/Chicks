import React from "react";
import { Text, View, StyleSheet } from 'react-native'
import { COLOR, FONT } from "../../data/StyleGuides";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    orderView: {
        flexDirection: 'row',
        width: "90%",
        marginHorizontal: "5%",
        marginTop: 20,
        justifyContent:"space-between"
    },
    orderid: {
        color: COLOR.grey_8,
        fontFamily: FONT.Roboto_Regular,
        fontSize: 12,
        fontWeight: '400',

    },
    idno: {
        color: COLOR.black_2,
        fontFamily: FONT.Roboto_Regular,
        fontSize: 12,
        fontWeight: '400',
        marginLeft: 10,
        width: '40%',

    },
    total: {
        color: COLOR.black_2,
        fontFamily: FONT.Roboto_Regular,
        fontSize: 12,
        fontWeight: '400',
        textAlignVertical: 'center'

    },
    cardView: {
        width: "90%",
        marginHorizontal: '5%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor:'#D2D2D2',
        height: 100,
        marginTop: "5%",
    },
    TextView: {
        flexDirection: 'row',
        marginTop: '2%',
        marginLeft: '5%'
    },
    nameheading: {
        fontSize: 14,
        color: COLOR.black_2,
        fontWeight: '400',
        fontFamily: FONT.Roboto_Regular
    },
    name: {
        fontSize: 14,
        color: COLOR.black_2,
        fontWeight: '400',
        fontFamily: FONT.Roboto_Medium
    },
    ordertext: {
        fontSize: 14,
        color: COLOR.black_2,
        fontWeight: '400',
        fontFamily: FONT.Roboto_Medium,
        marginLeft:"5%",
        marginVertical:"5%"
    },
    ButtonContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: COLOR.primary,
        borderRadius: 15,
        marginTop:"20%"
  
    },
    buttonText: {
        color: COLOR.primary
    },
    shipedimage:{
        width:198,
        height:12,
        alignSelf:'center'
    },
    textshipView:{
        width:199,
        alignSelf:'center',
        flexDirection:'row',
        marginBottom:"5%"
    },
    orderplace:{
        fontSize: 10,
        color: COLOR.black_2,
        fontWeight: '400',
        fontFamily: FONT.Roboto_Medium,
       marginRight:'8%',
       alignSelf:'center',
       textAlign: "center"
    
    },
    orderplace3:{
        fontSize: 10,
        color: COLOR.black_2,
        fontWeight: '400',
        fontFamily: FONT.Roboto_Medium,
       marginLeft:'10%',
       alignSelf:'center',
       textAlign: "center"
    
    },
    orderplace4:{
        fontSize: 10,
        color: COLOR.black_2,
        fontWeight: '400',
        fontFamily: FONT.Roboto_Medium,
       marginLeft:'10%',
       alignSelf:'center',
       textAlign: "center"
    
    },
    orderplace1:{
        fontSize: 10,
        color: COLOR.black_2,
        fontWeight: '400',
        fontFamily: FONT.Roboto_Medium,
        marginLeft:'5%',
        textAlign: "center"
    
    },
    bottomview:{
        height:'45%',
      
        justifyContent:"flex-end"
    }
})
export default style;