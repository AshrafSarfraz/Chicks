import React from 'react';
import { View, Text, TouchableOpacity, Image,ScrollView } from 'react-native';
import styles from './styles';
import BotttomHeight from '../../components/reuseables/BotttomHeight';
import { useSelector } from 'react-redux';
import { COLOR } from '../../data/StyleGuides';


const Privacy = ({ navigation }) => {
  const thememode = useSelector((state)=>state.theme.mode);
  return (
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
      <ScrollView>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        {thememode==='light'?  <Image style={styles.whiteBack} source={require('../../Assets/icons/whiteBack.png')}/> : <Image style={styles.whiteBack} source={require('../../Assets/images/termdark.png')} />}
        </TouchableOpacity>
        <Text style={[styles.headertxt,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Privacy Policy</Text>
      </View>
<Text style={[styles.txt,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus vel diam gravida malesuada amet conden at. Dolor orci etiam sed id facilisis viverra purus eu turpis. Condimentum dui ultricies diam sed nulla tortor. Habitasse mattis cursus eu euismod.</Text>
<Text style={[styles.txt,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus vel diam gravida malesuada amet conden at. Dolor orci etiam sed id facilisis viverra purus eu turpis. Condimentum dui ultricies diam sed nulla tortor. Habitasse mattis cursus eu euismod.</Text>

   
   

      <BotttomHeight/>
      </ScrollView>

    </View>
    
  );
};

export default Privacy;
