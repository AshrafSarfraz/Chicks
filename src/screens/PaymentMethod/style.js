import React from "react";
import {Text,View,StyleSheet} from 'react-native'
import { COLOR, FONT } from "../../data/StyleGuides";

const style = StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:' rgba(251, 251, 251, 1)'

    },
   ChooseText:{
    fontSize:15,
    fontWeight:'500',
    fontFamily:FONT.Roboto_Regular,
    marginLeft:"5%",
    marginTop:"10%",
    marginBottom:'1%',
    color:COLOR.black
   },
   titilestye:{
      marginLeft:"25%"
   },
   CardVeiw:{
    marginTop:7,
    width:"90%",
    marginHorizontal:'5%',
    borderRadius:10,
    backgroundColor:COLOR.white,
    alignSelf:'center',
    justifyContent:'space-between',
    flexDirection:"row",
    height:60,
    marginTop:"3%"
   },
   Credit:{
    fontSize:16,
    fontWeight:'500',
    fontFamily:FONT.Roboto_Medium,
    marginLeft:"5%",
    color:COLOR.black,
    alignSelf:'center'
   },
   imagecard:{
    width:24,
    height:24,
    alignSelf:"center",marginRight:"5%"
   },
   imagecardp:{
    width:27,
    height:18,
    alignSelf:"center",marginRight:"5%"
   }
})
export default style;