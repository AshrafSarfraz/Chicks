import React from 'react';
import { View, Text, TouchableOpacity, Image,ScrollView } from 'react-native';
import styles from './styles';
import BotttomHeight from '../../components/reuseables/BotttomHeight';
import { useSelector } from 'react-redux';
import { COLOR } from '../../data/StyleGuides';

const About = ({ navigation }) => {
  const thememode = useSelector((state)=>state.mode);
  return (
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
      <ScrollView>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={[styles.whiteBack,{tintColor:thememode==='light' ? COLOR.black: COLOR.white}]} source={require('../../Assets/icons/whiteBack.png')} />
        </TouchableOpacity>
        <Text style={[styles.headertxt,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>About us page</Text>
      </View>
<Text style={[styles.txt,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the
industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it tomake a type specimen book. </Text>
   
   
<Text style={[styles.txt,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the
industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it tomake a type specimen book. </Text>

<Text style={[styles.txt,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the
industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it tomake a type specimen book. </Text>
  
      <BotttomHeight/>
      </ScrollView>

    </View>
    
  );
};

export default About;
