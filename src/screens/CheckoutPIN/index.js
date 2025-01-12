import { View,StatusBar, TouchableOpacity, Text, FlatList, ScrollView,TextInput,Modal,Image} from 'react-native';
import React, { useRef, useState } from 'react';
import { COLOR, FONT } from '../../data/StyleGuides';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from '../../data/enums';
import Button from '../../components/reuseables/Button';
import BotttomHeight from '../../components/reuseables/BotttomHeight';
import CheckoutHeader from '../../components/reuseables/CheckoutHeader';
import OTPTextInput from 'react-native-otp-textinput';
import { useSelector } from 'react-redux';

export default function CheckoutPIN() {
  const [modalVisible, setModalVisible] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRef = useRef(Array(4).fill(null));
  const [showError, setShowError] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  const handleOtpChange = (value, index) => {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;

      if (value && index < inputRef.current.length - 1) {
        inputRef.current[index + 1].focus();
      }

      if (newOtp.every((pin) => pin !== '')) {
        setShowError(false);
      } else {
        setShowError(true);
      }

      return newOtp;
    });
  };

  const handleOtpKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  const navigation = useNavigation();
const thememode = useSelector((state)=>state.theme.mode);
  return (
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
      <StatusBar backgroundColor={COLOR.white} />
      <ScrollView>
        <CheckoutHeader title={'Enter PIN'} />
        <Text style={[styles.txt,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Enter pin to confirm your payment.</Text>
       { /*<View>
          <OTPTextInput
            textInputStyle={styles.otpInput}
            containerStyle={styles.otpContainer}
            tintColor={COLOR.primary}
            value={otp}
          />
       </View>*/}

       <View style={styles.inputContainer}>
       {otp.map((pin, index) => (
         <TextInput
           key={index}
           ref={(ref) => (inputRef.current[index] = ref)}
           style={[
             styles.Otp,
             { borderColor: pin ? COLOR.primary :thememode==='light' ? '#FAFAFA':COLOR.darkprimary,backgroundColor:thememode==='light'?  '#FAFAFA':COLOR.darkprimary,color:thememode==='light'?black: COLOR.white},
           ]}
           value={pin}
           onChangeText={(value) => handleOtpChange(value, index)}
           onKeyPress={(event) => handleOtpKeyPress(event, index)}
           maxLength={1}
           keyboardType="numeric"
           autoFocus={index === 0}
         />
       ))}
     </View>
        <Button onPress={openModal} marginTop={'100%'} title={'Confirm Payment'} />
        <BotttomHeight />
      </ScrollView>
      <Modal
      visible={modalVisible}
      transparent
      animationType='fade'
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={[styles.contentContainer,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.modeldark}]}>
          <Image
            source={require('../../Assets/images/tick.png')} // Replace with your actual image path
            style={styles.image}
          />
          <Text style={[styles.title,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Payment Successful!</Text>
          <Text style={[styles.description,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Payment success!! Your order is placed successfully.</Text>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate(SCREEN.TrackOrder,setModalVisible(false))}>
            <Text style={styles.buttonText}>Track Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    </View>
  );
}
