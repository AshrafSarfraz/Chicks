import React from "react";
import {Text,View,StyleSheet} from 'react-native'
import { COLOR, FONT } from "../../data/StyleGuides";

const style = StyleSheet.create({
    container:{
        flex:1,
backgroundColor:COLOR.white
    },
    titlecolor:{
        color:COLOR.primary,
        marginLeft:"28%"
    },
  
        itemContainer: {
            height: 123,
            width: '90%',
            marginBottom: 16,
            borderRadius: 8,
            backgroundColor: COLOR.gray_236,
            elevation: 2,
            alignSelf: 'center',
            flexDirection:"row",
            marginHorizontal:"5%",
            marginTop:10
    
        },
        Chunky:{
            fontSize:15,
            fontWeight:'400',
            color:COLOR.primary,
            fontFamily:FONT.Urbanist_Medium,
            marginLeft:'5%',
            marginVertical:"5%"
        },
        krunchiamge:{
            width:120,
            height:120,
            alignSelf:"center",
            justifyContent:'center',
            marginLeft:"1%"
            
        },
        ChunkyView:{
            width:"60%",
            height:"90%",
            marginVertical:'2%',
            justifyContent:'space-around',
           
        },
        Fillet:{
            fontSize:15,
            fontWeight:'400',
            color:COLOR.black,
            fontFamily:FONT.Urbanist_Regular,
        },
        iamgeView:{
            height:120,
            width:"80%",
            alignSelf:'center',
            justifyContent:'center',
            backgroundColor:"Red",
            marginTop:'20%'

        },
       
        
       ///  scannner style
       camera: {
        height:50,
        width:'100%',
      },
      marker: {
        borderColor: '#3498db',
        borderRadius: 10,
        borderWidth: 2,
      },
      scanAgain: {
        backgroundColor: '#3498db',
        padding: 15,
        margin: 20,
        borderRadius: 10,
      },
      scanAgainText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      },
      outerveiw:{
        marginTop:"10%"
      }
    
    
})
export default style;