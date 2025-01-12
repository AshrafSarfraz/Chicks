import { View, StatusBar, TouchableOpacity, Text, FlatList, ScrollView, TextInput, Modal, Image } from 'react-native';
import React, { useState } from 'react';
import { COLOR, FONT } from '../../data/StyleGuides';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SCREEN } from '../../data/enums';
import Button from '../../components/reuseables/Button';
import BotttomHeight from '../../components/reuseables/BotttomHeight';
import CheckoutHeader from '../../components/reuseables/CheckoutHeader';
import OTPTextInput from 'react-native-otp-textinput';
import { useSelector } from 'react-redux';

export default function CheckoutDetails({navigation}) {
  // const { navigation } = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const thememode = useSelector((state)=>state.theme.mode);
  const [otp, setOtp] = useState('');
  const route = useRoute();
  // const { Noodles } = route.params;
  const Noodles = route.params?.Noodles || false;
  const openModal = () => {
    setModalVisible(true);
  
    if (Noodles) {
      setTimeout(() => {
        navigation.navigate(SCREEN.SwapRequest,setModalVisible(false));
      }, 2000);
    }
  };
  
  

  const closeModal = () => {
    setModalVisible(false);
  };

 

  return (
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
      <StatusBar backgroundColor={COLOR.white} />
      <ScrollView>
        <CheckoutHeader title={'Add Card Details'} onPress={() => navigation.goBack()} />
        <Text style={[styles.txt,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Add card details to pay</Text>
        <View style={styles.cntainer}>
          <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Card Number</Text>
            <TextInput style={[styles.input,{backgroundColor:thememode==='light'?COLOR.grey:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]} keyboardType='numeric' />
          </View>
          <View style={styles.inputContainer2}>
            <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Card Name</Text>
            <TextInput style={[styles.input,{backgroundColor:thememode==='light'?COLOR.grey:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]} />
          </View>
        </View>
        <View style={styles.cntainer}>
          <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>CVV</Text>
            <TextInput style={[styles.input,{backgroundColor:thememode==='light'?COLOR.grey:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]} keyboardType='numeric' />
          </View>
          <View style={styles.inputContainer2}>
            <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Expiry</Text>
            <TextInput style={[styles.input,{backgroundColor:thememode==='light'?COLOR.grey:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]} keyboardType='numeric' />
          </View>
        </View>




        <Text style={[styles.txt,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Add billing address to continue payement</Text>
        <View style={styles.cntainer}>
          <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>First Name</Text>
            <TextInput style={[styles.input,{backgroundColor:thememode==='light'?COLOR.grey:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]} />
          </View>
          <View style={styles.inputContainer2}>
            <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Last Name</Text>
            <TextInput style={[styles.input,{backgroundColor:thememode==='light'?COLOR.grey:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]} />
          </View>
        </View>
        <View style={styles.cntainer}>
          <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Address</Text>
            <TextInput style={[styles.input,{backgroundColor:thememode==='light'?COLOR.grey:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]} />
          </View>
          <View style={styles.inputContainer2}>
            <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Expiry</Text>
            <TextInput style={[styles.input,{backgroundColor:thememode==='light'?COLOR.grey:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]} keyboardType='numeric' />
          </View>
        </View>

        <View style={styles.cntainer}>
          <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>State</Text>
            <TextInput style={[styles.input,{backgroundColor:thememode==='light'?COLOR.grey:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]} />
          </View>
          <View style={styles.inputContainer2}>
            <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Zip Code</Text>
            <TextInput style={[styles.input,{backgroundColor:thememode==='light'?COLOR.grey:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]} />
          </View>
        </View>
        <View style={styles.inputContainerpho}>
          <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Add Phone Number</Text>
          <TextInput style={[styles.input,{backgroundColor:thememode==='light'?COLOR.grey:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]} keyboardType='numeric' />
        </View>
        <Button onPress={openModal} marginTop={'20%'} marginBottom={'10%'} title={'Confirm Payment'} />
        <BotttomHeight />
      </ScrollView>

      {Noodles === true ? <Modal
        visible={modalVisible}
        transparent
        animationType='fade'
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.contentContainer,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.darkprimary}]}>
            <Image
              source={require('../../Assets/images/tick.png')} // Replace with your actual image path
              style={styles.image}
            />
            <Text style={[styles.title,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Request Sent</Text>
            <Text style={[styles.description,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Your request for swap meal is sent.</Text>

          </View>
        </View>
      </Modal>
        :

        <Modal
          visible={modalVisible}
          transparent
          animationType='fade'
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={[styles.contentContainer,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.darkprimary}]}>
              <Image
                source={require('../../Assets/images/tick.png')} // Replace with your actual image path
                style={styles.image}
              />
              <Text style={[styles.title,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Payment Successful!</Text>
              <Text style={styles.description}>Payment success!! Your order is placed successfully.</Text>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(SCREEN.TrackOrder)}>
                <Text style={styles.buttonText}>Track Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>}
    </View>
  );
}
