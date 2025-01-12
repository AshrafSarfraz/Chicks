// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../../data/StyleGuides';

export const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  marginTop:'55%'
  },
  
  footerText: {
    fontSize: 14,
    color: COLOR.grey_5,
    fontFamily: FONT.Urbanist_Regular,
  },
  
  footerLink: {
    fontSize: 14,
    color: COLOR.primary,
    fontFamily: FONT.Urbanist_SemiBold,
    marginLeft: '2%',
  },footerLinkContainer:{
    marginLeft:'2%'
  },
  container: {
    alignItems: 'center',
    marginTop: '20%',
  },
  image: {
    height: 61,
    width: 104,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
    marginTop: '2%',
  },
  signInText: {
    fontSize: 14,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.black,
    marginTop: '2%',
  },
  inputContainer: {
    marginTop: '15%',
  },
  input: {
    borderColor: COLOR.black,
    borderWidth: 0,
  },
  focusedInput: {
    borderWidth: 1,
    borderColor:COLOR.primary
  },
  leftIcon: {
    height: 24,
    width: 24,
  },
  passwordIcon: {
    height: 20,
    width: 20,
  },
  Container:{
    flex:1
  }
});
