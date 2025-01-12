// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR } from '../../data/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginTop: '30%',
    alignItems: 'center',
  },
  chickenLogo: {
    height: 154,
    width: 152,
  },
  chunkyChicken: {
    height: 124,
    width: 220,
    marginTop: '20%',
  },
  con: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  priceText: {
    fontSize: 14,
    color: COLOR.black,
    fontFamily: FONT.Urbanist_SemiBold,
  },
  pointsContainer: {
    backgroundColor: COLOR.primary,
    padding: 5,
    borderRadius: 5,
    marginRight: '8%',
  },
  pointsText: {
    fontSize: 10,
    color: COLOR.white,
    fontFamily: FONT.Urbanist_SemiBold,
  },
  deletiamge:{
    width:24,
    height:24,
  }
});
