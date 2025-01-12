// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLOR.white
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:'3%',
    marginTop:"5%"
  },
  text: {
    fontSize:14,
    fontFamily:FONT.Roboto_Medium,
    color:COLOR.black,
  
  },
  touchimage:{
    marginLeft: 'auto', // This pushes the image to the end of the row
    width: 24, // Adjust the width as needed
    height: 24, // Adjust the height as 
    right:'13%'
  },
  imagedelete: {
    marginLeft: 'auto', // This pushes the image to the end of the row
    width: 24, // Adjust the width as needed
    height: 24, // Adjust the height as 
    right:'22%'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 10,
height:86,
marginTop:10,
width:'90%',
marginLeft:'5%',
borderRadius:5,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    marginRight: 'auto',
  },
  checkbox: {
    // Custom checkbox styles go here,

  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:"5%",
    paddingHorizontal:15,
    justifyContent:'space-between'
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  iconr: {
    width: 20,
    height: 20,
    marginLeft: 10,
    tintColor:COLOR.primary
  },
  
  title:{
    fontSize:16,
    fontFamily:FONT.Roboto_Bold,
    color:COLOR.black
  },price:{
    fontSize:15,
    fontFamily:FONT.Roboto_Medium,
    color:COLOR.primary
  },qty:{
    fontSize:16,
    fontFamily:FONT.Roboto_Medium,
    color:COLOR.black,
    textAlign:'center',
    left:'5%'
  },
  totalContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: '5%',
    alignItems: 'center',
    marginTop:5
  },
  totalText: {
    fontSize: 12,
    fontFamily: FONT.Roboto_Medium,
    color: COLOR.grey_1,
  },
  totalAmount: {
    fontSize: 22,
    fontFamily: FONT.Roboto_Bold,
    color: COLOR.black,
  },

  deliveryAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
    marginTop: '30%',
  },
  deliveryAddressText: {
    fontSize: 14,
    fontFamily: FONT.Roboto_Medium,
    color: COLOR.black,
  },
  penIcon: {
    height: 16,
    width: 16,
  },

  addressContainer: {
    height: 48,
    width: '85%',
    alignSelf: 'center',
    backgroundColor: COLOR.grey,
    borderRadius: 10,
    marginTop: '3%',
    justifyContent: 'center',
  },
  addressInnerContainer: {
    marginLeft: '5%',
  },
  addressText: {
    fontSize: 14,
    fontFamily: FONT.Roboto_Regular,
    color: COLOR.black,
  },
  boxsize:{
    width:16,
    height:16,
 
  },
  boxred:{
    width:16,
    height:16,
    borderRadius:2,
    backgroundColor:COLOR.primary,
    alignSelf:'center',
    justifyContent:'center'
  },
  tick:{
    width:10,
    height:10,
    alignSelf:'center',
    justifyContent:'center'
  },
  boxredminos:{
    width:16,
    height:16,
    borderRadius:2,
    backgroundColor:COLOR.primary,
    alignSelf:'center',
    justifyContent:'center'
  },
  grayview:{
    height:1,
    backgroundColor:COLOR.white,
    width:10,
    alignSelf:'center'
  },
  checkbox:{
    marginHorizontal:"5%"
  },
  checkboxpast:{
    width:16,
    height:16,
    borderRadius:2,
    backgroundColor:COLOR.primary,
    alignSelf:'center',
    justifyContent:'center',
    marginRight:"5%",
    marginLeft:'5%'
  },
});
