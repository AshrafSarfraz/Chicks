import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const CheckoutHeader = ({title,titlestyle}) => {
    const navigation = useNavigation()
    const thememode = useSelector((state)=>state.theme.mode);
  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image style={[styles.backIcon,{tintColor:thememode==='light' ? COLOR.black : COLOR.white}]} source={require('../../Assets/icons/blackback.png')} />
        </TouchableOpacity>
        <Text style={[styles.titleText,titlestyle,{color:thememode==='light' ? COLOR.black:COLOR.white}]}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
    marginLeft: '5%',
  },
  backIcon: {
    height: 24,
    width: 24,
  },
  titleText: {
    fontSize: 16,
    fontFamily: FONT.Roboto_Bold,
    color: COLOR.black,
    marginLeft: '5%',
  },
});

export default CheckoutHeader;
