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
  itemcontainer: {
    width:'90%',
    marginHorizontal:"5%",
    height: 120,
    margin: 10,
    backgroundColor: COLOR.grey, // Replace with your 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
     borderRadius: 10,

  },
  image: {
    width: 102,
    height: 102,
    marginLeft: '5%',
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Urbanist-SemiBold', // Replace with your FONT.Urbanist_SemiBold
    color: 'black', // Replace with your COLOR.black
  },
  description: {
    fontSize: 8,
    fontFamily: 'Urbanist-Regular', // Replace with your FONT.Urbanist_Regular
    color: 'black', // Replace with your COLOR.black
    width: '80%',
    marginTop: '1%',
  },
  customizeText: {
    fontSize: 14,
    fontFamily: 'Urbanist-SemiBold', // Replace with your FONT.Urbanist_SemiBold
    color: 'red', // Replace with your COLOR.primary
    marginTop: '1%',
  },
  price: {
    fontSize: 14,
    fontFamily: 'Urbanist-SemiBold', // Replace with your FONT.Urbanist_SemiBold
    color: 'black', // Replace with your COLOR.black
    marginTop: '8%',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  headertxt:{
    fontSize:18,fontFamily:FONT.Roboto_Bold,color:COLOR.black,
  },
  whiteBack:{
    height:35,width:35
  },
  header:{
    flexDirection:'row',marginLeft:'5%',marginTop:'5%',alignItems:'center',width:'60%',justifyContent:'space-between'
  }

});
