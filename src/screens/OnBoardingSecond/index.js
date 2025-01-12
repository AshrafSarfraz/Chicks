import { View, Text, Dimensions, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { styles } from './styles';
import { COLOR, FONT } from '../../data/StyleGuides';
import { SCREEN } from '../../data/enums';
import BotttomHeight from '../../components/reuseables/BotttomHeight';
import { useSelector } from 'react-redux';
const { width } = Dimensions.get('window');


const data = [
  { id: '1', imageUrl: require('../../Assets/images/burger.png') },
  { id: '2', imageUrl: require('../../Assets/images/burger.png') },
  { id: '3', imageUrl: require('../../Assets/images/burger.png') },
  // Add more data items as needed
];

export default function OnBoardingSecond({ navigation }) {
  const thememode = useSelector((state) => state.theme.mode)
  const renderItem = ({ item }) => (
    <Image style={styles.flatimage} source={item.imageUrl} />
  );


  return (
    <View style={[styles.container, { backgroundColor: thememode === 'light' ? COLOR.white : COLOR.black }]}>
      <ScrollView>

        <View style={styles.headercontainer}>
          <Text style={styles.headerText}>CHUNKY CHICKEN</Text>
          <Image style={styles.qrcodeIcon} source={require('../../Assets/images/cc.png')} />
          <View style={styles.locationContainer}>
            <Image style={styles.locationImage} source={require('../../Assets/icons/location.png')} />
            <Text style={styles.locationText1}>Your  Chunky chicken is Lorem ipsum dolor sit amet cons. </Text>
          </View>

        </View>


        <View style={[styles.lastcontainer, { backgroundColor: thememode === 'light' ? COLOR.white : COLOR.darkprimary },{paddingVertical:thememode==='light'? null : 10}]}>
          <View style={styles.locationContainerblack}>
            <Image style={styles.locationImage} source={require('../../Assets/icons/redlocation.png')} />
            <Text style={[styles.locationTextis, { color: thememode === 'light' ? COLOR.black : COLOR.white }]}>Your Chunky chicken is </Text>
          </View>

          <Text style={[styles.locationText2, { color: thememode === 'light' ? COLOR.black : COLOR.white }]}>Lorem ipsum dolor sit amet cons.</Text>
          <Text style={[styles.heading1, { color: thememode === 'light' ? COLOR.black : COLOR.white }]}>OUR PLACE</Text>
          <Text style={styles.heading2}>OR YOURS?</Text>

          <TouchableOpacity onPress={() => navigation.navigate(SCREEN.Signin)} style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.mycontainer, { backgroundColor: thememode === 'light' ? COLOR.white : '#0E0E0E' }]}>
          <View style={styles.contentContainer}>
            <Text style={[styles.titleText,{color:thememode==='light'?COLOR.black : COLOR.white_7}]}>FINGER LICKIN’ VALUE OFFERS</Text>
            <Text style={[styles.descriptionText,{color:thememode==='light'?COLOR.black : COLOR.white_7}]}>Fresh offers from CHUNKY CHICKEN, pick up today</Text>
          </View>
          <View>
            <FlatList
              data={data}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              contentContainerStyle={styles.flatcontainer}
              horizontal
            />
          </View>
        </View>
        <BotttomHeight />
      </ScrollView>

    </View>
  )
}