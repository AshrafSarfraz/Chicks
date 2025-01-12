import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet,FlatList,ScrollView } from 'react-native';
import { COLOR, FONT } from '../data/StyleGuides';
import BotttomHeight from './reuseables/BotttomHeight';
import { SCREEN } from '../data/enums';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const data = [
  { id: '1', title: 'Krunch Burger', image: require('../Assets/images/Home/deal2.png') ,price:'$150'},
  { id: '2', title: 'Mighty Zinger', image: require('../Assets/images/Home/deal5.png') ,price:'$250'},
  { id: '3', title: 'Mighty Zinger', image: require('../Assets/images/Home/deal5.png') ,price:'$250' },
  // Add more items as needed
];

const data2 = [
  { id: '1', title: 'Crispy Duo Box',desc:'Turn up the tun with 5 pcs hot&Crispy chicken + T large........', image: require('../Assets/images/Home/deal2.png'),price:'$250' },
  { id: '2', title: 'Krunch Burger',desc:'Turn up the tun with 5 pcs hot&Crispy chicken + T large........', image: require('../Assets/images/Home/deal2.png'),price:'$250' },
  { id: '3', title: 'Krunch Burger',desc:'Turn up the tun with 5 pcs hot&Crispy chicken + T large........', image: require('../Assets/images/Home/deal2.png'),price:'$250' },

  // Add more items as needed
];








export default function Delivery({onPress}) {

const navigation = useNavigation()
const thememode = useSelector((state)=>state.theme.mode);
  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={2} onPress={()=>navigation.navigate(SCREEN.SingleItem)} style={[styles.itemContainer,{backgroundColor:thememode==='light' ? COLOR.grey: COLOR.darkprimary}]}>
      <Text style={[styles.itemTitle,{color:thememode==='light' ? COLOR.black: COLOR.white}]}>{item.title}</Text>
      <View style={styles.priceTagContainer}>
      <Text style={styles.priceTagText}>{item.price}</Text>
    </View>
      <Image resizeMode='contain' style={styles.itemImage} source={item.image} />
    </TouchableOpacity>
  );


  const renderItem2 = ({ item }) => (
    <View style={[styles.itemContainer2,{backgroundColor:thememode==='light' ? COLOR.grey: COLOR.darkprimary}]}>
      <View style={styles.itemContent2}>
        <Image resizeMode='contain' style={styles.itemImage2} source={item.image} />
        <View style={styles.textContainer2}>
          <Text style={[styles.itemTitle2,{color:thememode==='light' ? COLOR.black: COLOR.white}]}>{item.title}</Text>
          <Text style={[styles.itemDesc2,{color:thememode==='light' ? COLOR.black: COLOR.white}]}>{item.desc}</Text>
        </View>
      </View>
      <View style={styles.priceContainer2}>
        <Text style={[styles.itemPrice2,{color:thememode==='light' ? COLOR.black: COLOR.white}]}>{item.price}</Text>
        <TouchableOpacity style={styles.viewButton2}>
          <Text style={styles.viewButtonText2}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );


  return (
    <View style={styles.container}>
      <ScrollView>

      <Text style={[styles.headerText,{color:thememode==='light' ? COLOR.black:COLOR.white}]}>What’s New</Text>
      <ImageBackground style={styles.imageBackground} source={require('../Assets/images/Home/Rectangle.png')}>
        <TouchableOpacity style={styles.reorderButton}>
          <Text style={styles.reorderButtonText}>REORDER</Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.menuRow}>
        <Text style={[styles.menuText,{color:thememode==='light' ? COLOR.black:COLOR.white}]}>Explore Menu</Text>
        <TouchableOpacity onPress={()=>navigation.navigate(SCREEN.HomePick)}>
        <Text style={[styles.viewAllText,{color:thememode==='light' ? COLOR.black:COLOR.white}]}>View All</Text>

        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        <View style={[styles.categoryBox,{backgroundColor:thememode==='light' ? COLOR.grey: COLOR.darkprimary}]}>
          <Text style={[styles.categoryText,{color:thememode==='light' ? COLOR.black: COLOR.white}]}>Everyday Value</Text>
          <Image style={styles.categoryImage} source={require('../Assets/images/Home/burger.png')} />
        </View>
        <View style={styles.categoryBoxWithMargin}>
          <View style={[styles.categoryBoxSmall,{backgroundColor:thememode==='light' ? COLOR.grey: COLOR.darkprimary}]}>
            <Text style={[styles.categoryText,{width:'60%'},{color:thememode==='light' ? COLOR.black: COLOR.white}]}>Ala-Carte-&-Combos</Text>
            <Image style={[styles.categoryImagesmall,{bottom:5}]} source={require('../Assets/images/Home/deal1.png')} />
          </View>
          <View style={[styles.categoryBoxSmall, { marginTop: '4%' },{backgroundColor:thememode==='light' ? COLOR.grey: COLOR.darkprimary}]}>
            <Text style={[styles.categoryText,{color:thememode==='light' ? COLOR.black: COLOR.white}]}>Promotion</Text>
            <Image style={[styles.categoryImagesmall,{bottom:5}]} source={require('../Assets/images/Home/burger.png')} />
          </View>
        </View>
        <View style={styles.categoryBoxWithMargin}>
          <View style={[styles.categoryBoxSmall,{backgroundColor:thememode==='light' ? COLOR.grey: COLOR.darkprimary}]}>
            <Text style={[styles.categoryText,{color:thememode==='light' ? COLOR.black: COLOR.white}]}>Signature-Boxes</Text>
            <Image resizeMode='contain' style={[styles.categoryImage,{bottom:5}]} source={require('../Assets/images/Home/deal3.png')} />
          </View>
          <View style={[styles.categoryBoxSmall, { marginTop: '4%' },{backgroundColor:thememode==='light' ? COLOR.grey: COLOR.darkprimary}]}>
            <Text style={[styles.categoryText,{color:thememode==='light' ? COLOR.black: COLOR.white}]}>Sharing</Text>
            <Image style={styles.categoryImage} source={require('../Assets/images/Home/deal4.png')} />
          </View>
        </View>
      </View>
      <Text style={[styles.BestText,{color:thememode==='light' ? COLOR.black:COLOR.white}]}>Best Deals</Text>
      <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    />
     <Text style={[styles.BestText,{color:thememode==='light' ? COLOR.black:COLOR.white}]}>Best Deals</Text>
      <FlatList
      data={data2}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem2}
    />
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 16,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
    marginLeft: '5%',
    marginTop: '2%',
  },
  imageBackground: {
    height: 135,
    width: '95%',
    alignSelf: 'center',
    marginLeft: '5%',
    marginTop: '2%',
  },
  reorderButton: {
    height: 31,
    backgroundColor: COLOR.primary,
    width: '95%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reorderButtonText: {
    fontSize: 16,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.white,
  },
  menuText: {
    fontSize: 16,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
  },
  viewAllText: {
    fontSize: 12,
    fontFamily: FONT.Roboto_Regular,
    color: COLOR.black,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginHorizontal: '4%',
    marginTop: '5%',
  },
  categoryBox: {
    height: 181,
    width: 107,
    backgroundColor: COLOR.grey,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 11,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
    marginTop: '10%',
    marginLeft: '8%',
  },
  categoryImage: {
    height: 53,
    width: 84,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 15,
  },
  categoryBoxWithMargin: {
    marginLeft: '2%',
  },
  categoryBoxSmall: {
    height: 87,
    width: 107,
    backgroundColor: COLOR.grey,
    borderRadius: 10,
  },
  categoryImagesmall: {
    height: 42,
    width: 66,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 15,
  },BestText:{
    fontSize: 16,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
    marginLeft:'5%',
    marginTop:'4%'
  },
  itemContainer: {
    height: 165,
    width: 140,
    backgroundColor: '#ececec',
    borderRadius: 10,
    alignItems: 'center',
    marginLeft:15,
    marginTop:15,
    marginRight:10
  },
  itemImage: {
    height: 102,
    width: 102,
    position:'absolute',
    bottom:5
  },
  itemTitle: {
    fontSize: 16,
 fontFamily:FONT.Urbanist_SemiBold,
 color:COLOR.black,
 marginTop:'8%'
  },

  itemContainer2: {
    height: 84,
    width: 250,
    backgroundColor: COLOR.grey,
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 15,
    marginRight: 10,
  },
  itemContent2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5%',
    marginTop: '2%',
  },
  itemImage2: {
    height: 54,
    width: 66,
  },
  textContainer2: {
    marginLeft: '3%',
  },
  itemTitle2: {
    fontSize: 12,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.black,
  },
  itemDesc2: {
    fontSize: 10,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.black,
    width: '60%',
  },
  priceContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5%',
    marginHorizontal: '30%',
    alignSelf: 'flex-end',
    left: 48,
    marginTop: '2%',
  },
  itemPrice2: {
    fontSize: 10,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.black,
    width: '60%',
  },
  viewButton2: {
    height: 16,
    width: 42,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLOR.primary,
    borderRadius: 3,
  },
  viewButtonText2: {
    fontSize: 10,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.primary,
  },
  priceTagContainer: {
    height: 20,
    width: 52,
    backgroundColor: COLOR.primary,
    position: 'absolute',
    right: 0,
    top: 40,
  },
  priceTagText: {
    fontSize: 14,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.white,
    marginLeft: '8%',
  },
});