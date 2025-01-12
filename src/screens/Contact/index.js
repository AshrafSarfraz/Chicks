import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput,ScrollView } from 'react-native';
import { COLOR } from '../../data/StyleGuides';
import styles from './styles';
import Button from '../../components/reuseables/Button';
import BotttomHeight from '../../components/reuseables/BotttomHeight';
import { SCREEN } from '../../data/enums';
import { useSelector } from 'react-redux';

const Contact = ({ navigation }) => {
  const thememode = useSelector((state)=>state.theme.mode);
  return (
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
      <ScrollView>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        {thememode==='light'?  <Image style={styles.whiteBack} source={require('../../Assets/icons/whiteBack.png')}/> : <Image style={styles.whiteBack} source={require('../../Assets/images/termdark.png')} />}
        </TouchableOpacity>
        <Text style={[styles.headertxt,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Contact us</Text>
      </View>

      <View style={[styles.inputContainer,{alignItems:'center',flexDirection:'row'}]}>
        <View style={styles.inputGroup}>
          <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>First name</Text>
          <TextInput style={[styles.input,{color:thememode==='light'?COLOR.black:COLOR.white}]} />
        </View>

        <View style={[styles.inputGroup,{marginLeft:10}]}>
          <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Last name</Text>
          <TextInput style={[styles.input,{color:thememode==='light'?COLOR.black:COLOR.white}]} />
        </View>
      </View>

      <View style={[styles.inputContainer,{marginTop:'1%'}]}>
        <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Email</Text>
        <TextInput style={[styles.largeInput,{color:thememode==='light'?COLOR.black:COLOR.white}]} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Message</Text>
        <TextInput textAlignVertical='top' multiline numberOfLines={5} style={[styles.largeInput2,{color:thememode==='light'?COLOR.black:COLOR.white}]} />
        <Text style={[styles.characterCount,{color:thememode==='light' ? COLOR.grey_1 : COLOR.white}]}>1-1000</Text>
      </View>

      <Image style={styles.line} source={require('../../Assets/images/Line1.png')} />

      <Text style={[styles.sectionTitle,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Contact information</Text>

      <View style={styles.infoRow}>
        <Image resizeMode='contain' style={[styles.icon,{tintColor:thememode==='light' ? COLOR.black : COLOR.white}]} source={require('../../Assets/icons/blackloc.png')} />
        <Text style={[styles.infoText,{color:thememode==='light' ? COLOR.grey_1 : COLOR.white}]}>
          Lorem ipsum dolor sit amet consectetur. Elementum
        </Text>
      </View>

      <View style={styles.infoRow}>
        <Image resizeMode='contain' style={[styles.icon,{tintColor:thememode==='light' ? COLOR.black : COLOR.white}]} source={require('../../Assets/icons/blackphone.png')} />
        <Text style={[styles.infoText,{color:thememode==='light' ? COLOR.grey_1 : COLOR.white}]}>+45 71 98 78 02</Text>
      </View>

      <View style={styles.infoRow}>
        <Image resizeMode='contain' style={[styles.icon,{tintColor:thememode==='light' ? COLOR.black : COLOR.white}]} source={require('../../Assets/icons/blackmail.png')} />
        <Text style={[styles.infoText,{color:thememode==='light' ? COLOR.grey_1 : COLOR.white}]}>danilo@uscreen.tv</Text>
      </View>
      <Button marginTop={'10%'} title={'Send Message'} onPress={()=>navigation.navigate(SCREEN.DrawerNavigation)}/>
      <BotttomHeight/>
      </ScrollView>

    </View>
    
  );
};

export default Contact;
