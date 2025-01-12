// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLOR.white
  },
  touchableOpacityContainer: {
    marginTop: '5%',
  },
  cardImage: {
    height: 64,
    width: '85%',
    alignSelf: 'center',
  },
  cardImage2: {
    height: 64,
    width: '82%',
    alignSelf: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:'9%',
    marginTop:'85%'
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
  otpContainer: {
    marginHorizontal:'10%',marginTop:'10%'
  },
  otpInput: {
    height:48,width:60,backgroundColor:COLOR.grey,borderRadius:10,borderBottomWidth:1,borderWidth:1
  },txt:{
    fontSize:14,fontFamily:FONT.Roboto_Medium,color:COLOR.black,marginLeft:'8%',marginTop:"8%"
  },
  //
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal:"5%",
    marginTop:"20%"

},
Otp: {
    width: 60,
    height: 48,
    backgroundColor: COLOR.white,
    marginBottom: '2%',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
    elevation: 1,
    borderWidth: 2,
    fontSize: 16,
    color: COLOR.black
},
input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 16,
},
Footer: {
    flex: 0.3,
    justifyContent: 'flex-end'
},
button: {
    backgroundColor: COLOR.primary,
    width: '100%',
    alignSelf: "center",
    padding: '3%',
    borderRadius: 20,
},
buttonText: {
    color: COLOR.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
},
bottomView:{
    height:420,
   
    alignSelf:"flex-end",justifyContent:"flex-end",
    width:"100%"
},
// modal style 
modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
contentContainer: {
  width: 320,
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 20,
  alignItems: 'center',
},
image: {
  height: 60,
  width: 60,
},
title: {
  fontSize: 18,
fontFamily:FONT.Roboto_Bold,
color:COLOR.black,
marginTop:'5%'
},
description: {
  fontSize: 14,
  fontFamily:FONT.Roboto_Regular,
  color:COLOR.grey_1,
  marginTop:'3%',
  textAlign:'center'
},
button: {
  height: 45,
  width: 297,
  borderWidth: 1,
  borderColor: COLOR.primary,
  borderRadius: 5,
  marginTop: 20,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonText: {
  fontSize: 16,
  color:COLOR.primary,
  fontFamily:FONT.Roboto_Bold
},
});
