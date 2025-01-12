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
});
