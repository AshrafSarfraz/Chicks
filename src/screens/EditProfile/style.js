import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Fonts} from '../../Themes/Fonts';
import {Colors} from '../../Themes/Colors';
import { COLOR, FONT } from '../../data/StyleGuides';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLOR.white
  },

  Circular_View: {
    marginTop:"5%",
    width:90,
    height:90,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor:COLOR.gray_236,
    borderRadius: 90,
    alignItems: 'center',
    marginBottom:"10%",
    marginTop:"7%"
  },
  Icon_Image: {
    width:90,
    height: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
  },
 

  Add_Image: {
    width: 20,
    height: 20,
  },

  Edit_Icon: {
    width: 24,
    height: 24,
  },
  EditButton: {
    position: 'absolute',
    top:87,
    left:'56%',
    width: 25,
    height: 25,
  },
  User_Name:{
    fontSize:14,
    fontWeight:"500",
    fontFamily:FONT.Roboto_Bold,
    color:COLOR.black,
    marginLeft:"5%"
  },
  containerinput:{
    width:"28%",
    flexDirection:"row",
    height:51,
    borderRadius:12,
    backgroundColor: COLOR.grey_03,
    marginTop:"2.5%",
    justifyContent:'center'
  },
  inputs:{
    width:"90%",
    marginHorizontal:"5%",
    flexDirection:"row",
    justifyContent:'space-between'
  },
  inputno:{
    width:"68%"
  },
  savebutton:{
    marginTop:"5%"
  },
  ImageStyling: {
    width: 90,
    height: 90,
    borderRadius:90
  },

 
});

export default style;