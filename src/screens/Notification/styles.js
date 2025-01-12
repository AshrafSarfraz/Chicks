// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLOR.white
  },
 

  todayText: {
    fontSize: 12,
    fontFamily: FONT.Roboto_Regular,
    color: COLOR.grey_1,
    marginLeft: '7%',
    marginTop: '7%',
  },
  Boxcontainer: {
    height: 72,
    width: '85%',
    backgroundColor: COLOR.white,
    elevation: 2,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop:10
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5%',
  },
  icon: {
    height: 40,
    width: 40,
  },
  textContainer: {
    marginLeft: '5%',
  },
  titleText: {
    fontSize: 14,
    fontFamily: FONT.Roboto_Bold,
    color: COLOR.black,
  },
  descriptionText: {
    fontSize: 12,
    fontFamily: FONT.Roboto_Regular,
    color: COLOR.grey_1,
    marginTop: 5,
  },
});
