// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselItem: {
    width: 335,
    height: 229,
    backgroundColor: 'white', // Set your background color
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 335,
    height: 177,
  },
  textContainer: {
    padding: 10,
  },
  text1: {
    fontSize: 14,
fontFamily:FONT.Urbanist_Bold,
color:COLOR.black
  },
  text2: {
    fontSize: 14,
    fontFamily:FONT.Urbanist_Bold,
    color:COLOR.primary
  },
  paginationContainer: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop:'43%',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: -19,
    backgroundColor: 'red', // Set your pagination dot color
  },
  lastcontainer: {
    marginTop: '5%',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:'5%',
    marginTop:'10%'
  },
  locationImage: {
    height: 24,
    width: 24,
  },
  locationText1: {
    fontSize: 10,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.white,
  },
  locationText2: {
    fontSize: 16,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
    marginLeft: '2%',
    alignSelf: 'center',
    marginTop: '2%',
    borderBottomWidth: 1,
    borderColor: COLOR.primary,
    height: 28,
  },
  heading1: {
    fontSize: 40,
    fontFamily: FONT.Urbanist_Bold,
    color: COLOR.black,
    marginLeft: '2%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  heading2: {
    fontSize: 40,
    fontFamily: FONT.Urbanist_Bold,
    color: COLOR.primary,
    marginLeft: '2%',
    alignSelf: 'center',
    marginTop: '1%',
  },
  orderButton: {
    height: 50,
    width: 182,
    backgroundColor: COLOR.primary,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '8%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderButtonText: {
    fontSize: 14,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.white,
  },
  headercontainer: {
    height: 130,
    backgroundColor: COLOR.primary,
  },
  headerText: {
    fontSize: 16,
    fontFamily: FONT.Roboto_Bold,
    color: COLOR.white,
    alignSelf: 'center',
    marginTop: '5%',
  },
  qrcodeIcon: {
    height: 38,
    width: 73,
    position: 'absolute',
    right: 20,
    top: 15,
  },
  welcomeContainer: {
    marginLeft: '5%',
    marginTop: '8%',
  },
  welcomeTitle: {
    fontSize: 18,
    fontFamily: FONT.Urbanist_Bold,
    color: COLOR.white,
  },
  signUpText: {
    fontSize: 14,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.white,
    textDecorationLine: 'underline',
    marginTop: '3%',
  },
  carouselContainer: {
    top: '20%',
  },chips:{
    height:90,width:72,position:'absolute',right: 20,bottom:10
  },  locationContainerblack: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  locationTextis: {
    fontSize: 12,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
    marginLeft: '2%',
  },
  mycontainer: {
    height: 389,
    backgroundColor: COLOR.white,
    marginLeft: '6%',
    marginTop: '10%',
  },
  contentContainer: {
    marginLeft: '5%',
    marginTop: '5%',
  },
  titleText: {
    color: COLOR.black,
    fontSize: 16,
    fontFamily: FONT.Urbanist_Bold,
  },
  descriptionText: {
    color: COLOR.black,
    fontSize: 13,
    fontFamily: FONT.Urbanist_Regular,
  },
  flatimage: {
    height: 236,
    width: 258,
    marginLeft:20,
    marginRight:10
  },flatcontainer:{
    marginTop:'5%'
  }
});
