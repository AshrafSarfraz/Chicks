// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLOR.white
  },
  title: {
    fontSize: 20,
    fontFamily: FONT.Roboto_Bold,
    color: COLOR.black,
    marginLeft: '5%',
    marginTop: '8%',
  },
  accountContainer: {
    height: 74,
    backgroundColor: "#EBC7C3",
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: 50,
    width: 50,
    marginLeft: '5%',
  },
  textContainer: {
    marginLeft: '5%',
    bottom: '1%',
  },
  name: {
    fontSize: 16,
    fontFamily: FONT.Roboto_Bold,
    color: COLOR.black,
  },
  email: {
    fontSize: 12,
    fontFamily: FONT.Roboto_Regular,
    color: COLOR.black,
  },
  penIcon: {
    height: 30,
    width: 30,
    marginLeft: 'auto',
    marginRight: '5%',
  },
  line: {
    height: 1,
    width: '90%',
    marginTop: '5%',
    alignSelf: 'center',
  },
  passwordChangeContainer: {
    height: 30,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
  },
  passwordIcon: {
    height: 30,
    width: 30,
  },
  changePasswordText: {
    fontSize: 14,
    fontFamily: FONT.Roboto_Medium,
    color: COLOR.black,
    marginLeft: '5%',
  },
  arrowIcon: {
    height: 20,
    width: 20,
    marginLeft: 'auto',
  },
  touchicon:{
    height: 30,
    width: 30,
    marginLeft: 'auto',
    marginRight: '5%',
  },
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
    height:190,
    width:"90%",
    marginHorizontal:"5%"
  },
  imagemodal:{
width:"110%",
marginVertical:"5%",
height: 0.6,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:14,
    color:COLOR.black_2,
    fontWeight:"400",
    fontFamily:FONT.Roboto_Regular,
   
  },
  modalText1: {
    marginBottom: 15,
    fontSize:14,
    color:COLOR.black_2,
    fontWeight:"400",
    fontFamily:FONT.Roboto_Medium,
    alignSelf:'flex-start'
   
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
    marginLeft:'5%'
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
    color: COLOR.primary,
    fontFamily: FONT.Roboto_Bold,
    fontSize: 16,
    fontWeight: '600',
},
ButtonsView1: {
    flexDirection: 'row',
    width: "100%",
    marginTop: 20,
    justifyContent: 'space-between',
  
    marginRight:'10%'

},
Textinput:{
    width:"100%",
    backgroundColor:'#FAFAFA',
    borderRadius:15,
    color:COLOR.black
},
starView:{
    flexDirection:'row',
    alignSelf:'center'
},
Buttoncontainer:{
  height:50,
  width:140,
  marginLeft:'5%'
},

});
