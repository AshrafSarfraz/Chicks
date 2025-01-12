import React from "react";
import { Text, View, StyleSheet } from 'react-native'
import { COLOR, FONT } from "../../data/StyleGuides";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white
    },

    CardView1: {
       height:40,
        width: '90%',
        borderRadius: 10,
       marginHorizontal:"5%"
        
    },
    CardView: {
        height:60,
        flexDirection:'row',
        width:"90%",
        marginHorizontal:"5%",
         flexDirection:'row',
         alignSelf:'center',
        
       
     },
    FlatouterView: {
        marginTop: 15,
        height: 219,
        width: '90%',
        marginHorizontal: '5%',
        borderRadius: 10,
        backgroundColor: COLOR.lightRed_F2,
        marginVertical: 10,
    },
    TextView:{
        marginLeft:"5%",
        width:"70%",
        alignSelf:'center'
    },
    name:{
        color: COLOR.black_2,
        fontFamily: FONT.Roboto_Medium,
        fontSize: 16,
        fontWeight: '500',
        textAlignVertical:'center'
    },
    chickennaem:{
        color: COLOR.grey_8,
        fontFamily: FONT.Roboto_Regular,
        fontSize: 10,
        fontWeight: '400',
    },
    Quentity:{
        color: COLOR.grey_8,
        fontFamily: FONT.Roboto_Regular,
        fontSize: 14,
        fontWeight: '400',
        textAlignVertical:"center"
    },
    orderView: {
        flexDirection: 'row',
        width: "100%",
        marginTop: 10,
        justifyContent:'space-between'
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
    imageVeiw:{


    },
    image:{
        width:40,
        height:40,
        alignSelf:'center'
    },
    TotalView: {
        flexDirection: 'row',
        width: "90%",
        marginHorizontal: "5%",
        justifyContent: 'flex-end',

    },
    total: {
        color: COLOR.black_2,
        fontFamily: FONT.Roboto_Regular,
        fontSize: 12,
        fontWeight: '400',
        textAlignVertical: 'center'

    },
    price: {
        color: COLOR.black_2,
        fontFamily: FONT.Roboto_Bold,
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 10,
    },
    ButtonsView: {
        flexDirection: 'row',
        width: "90%",
        marginHorizontal: "5%",
        marginTop: 10,
        justifyContent: 'space-between',
        height: 250,
        alignSelf: 'flex-end',

    },
    ButtonsView1: {
        flexDirection: 'row',
        width: "100%",
        marginTop: 10,
        justifyContent: 'space-between',
      
        marginRight:'10%'

    },
    ButtonCancel: {
        height: 50,
        width: 155,
        backgroundColor: COLOR.white,
        borderColor: COLOR.primary,
        borderWidth: 1,
        alignSelf: 'flex-end'
    },
    Buttoncontainer: {
        height: 50,
        width: 140,
        alignSelf: 'flex-end',
        marginLeft:"5%"
    },
    canceltext: {
        color: COLOR.primary,
        fontFamily: FONT.Roboto_Medium,
        fontSize: 16,
        fontWeight: '600',


    },

    /// modal styla
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
        height:220,
        width:"90%",
        marginHorizontal:"5%"
      },
      imagemodal:{
width:"100%",
marginVertical:"5%"
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize:14,
        color:COLOR.black_2,
        fontWeight:"400",
        fontFamily:FONT.Roboto_Medium,
       
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      },
      button: {
        borderRadius: 5,
        padding: 10,
        width: 100,
        alignItems: 'center',
      },
      
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      ButtonCancelmodal: {
        height: 50,
        width: 135,
         backgroundColor: COLOR.white,
        alignSelf: 'flex-end',
        marginLeft:"5%"
    },
    Buttoncontainermodal: {
        height: 50,
        width: 150,
        alignSelf: 'flex-end'
    },
    canceltextmodal: {
        color: COLOR.black,
        fontFamily: FONT.Roboto_Medium,
        fontSize: 16,
        fontWeight: '600',


    },
    Cancel:{
        color: COLOR.black,
        fontFamily: FONT.Roboto_Bold,
        fontSize: 16,
        fontWeight: '600',
    }

})
export default style;