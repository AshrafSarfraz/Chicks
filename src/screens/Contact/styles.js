// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';

const styles = StyleSheet.create({
  headertxt:{
    fontSize:18,
    fontFamily:FONT.Roboto_Bold,
    color:COLOR.black,
  },
  whiteBack:{
    height:35,width:35
  },
  header:{
    flexDirection:'row',
    marginLeft:'5%',
    marginTop:'5%',
    alignItems:'center',
    width:'60%',
    justifyContent:'space-between'
  },
  inputContainer: {
    marginLeft: '9%',
    marginTop: '5%',
  },
  inputGroup: {
    marginBottom: '5%',
  },
  label: {
    fontSize: 15,
    color: COLOR.black,
  },
  input: {
    height: 45,
    width: 145,
    borderWidth: 1,
    borderColor: COLOR.grey_1,
    borderRadius: 10,
    marginTop: '2%',
    color: 'black',
    paddingLeft:10,
  },
  largeInput: {
    height: 45,
    width: 300,
    borderWidth: 1,
    borderColor: COLOR.grey_1,
    borderRadius: 10,
    marginTop: '2%',
    color: 'black',
    paddingLeft:10,
  },
  characterCount: {
    fontSize: 15,
    color: COLOR.grey_1,
    marginTop: '2%',
    marginLeft: 'auto',
    marginRight: '9%',
  },
  line: {
    height: 1,
    width: 240,
    marginLeft: '10%',
    marginTop: '5%',
  },
  sectionTitle: {
    fontSize: 15,
    color: COLOR.black,
    marginTop: '10%',
    marginLeft: '9%',
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    marginLeft: '9%',
    marginTop: '3%',
    alignItems: 'center',
  },
  icon: {
    height: 17,
    width: 17,
  },
  infoText: {
    fontSize: 15,
    color: COLOR.grey_1,
    width: '80%',
    marginLeft: '5%',
  },largeInput2:{
    height:119,width:300,borderWidth:1,borderColor:COLOR.grey_1,borderRadius:10,marginTop:'2%',color:'black',
    paddingLeft:10
  },container:{
    flex:1,
    backgroundColor:COLOR.white
  }

});


export default styles