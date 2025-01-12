// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLOR.white
  },

  txt:{
    fontSize:14,fontFamily:FONT.Roboto_Medium,color:COLOR.black,marginLeft:'5%',marginTop:"8%"
  },
  cntainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: '0%',
    marginTop: '5%',
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: '3%',
    marginLeft: '6%',
  },
  label: {
    fontSize: 14,
    fontFamily: FONT.Roboto_Medium,
    color: COLOR.black,
  },
  input: {
    height: 48,
    width: 150,
    backgroundColor: COLOR.grey,
    borderRadius: 10,
    marginTop: '5%',
    color:COLOR.black,paddingLeft:10
  },
  inputContainer2: {
    flex: 1,
    marginHorizontal: '3%',
    marginRight: '6%',
  },
  inputContainerpho: {
    flex: 1,
    marginHorizontal: '3%',
    marginRight: '6%',
    marginLeft:"7%",
    marginTop:'5%'
  },
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
