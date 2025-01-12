
import React, { useState, useRef } from "react";
import { Text, View, TextInput, ScrollView } from 'react-native';
import styles from './style';
import CheckoutHeader from "../../../components/reuseables/CheckoutHeader";
import Button from "../../../components/reuseables/Button";
import BotttomHeight from "../../../components/reuseables/BotttomHeight";
import { COLOR } from "../../../data/StyleGuides";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../../data/enums";
import { useSelector } from "react-redux";

const Email = () => {
  const navigation = useNavigation();
  const thememode = useSelector((state)=>state.theme.mode);
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRef = useRef(Array(4).fill(null));
  const [showError, setShowError] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);

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

  const handleInputFocus = (index) => {
    setFocusedIndex(index);
  };

  return (
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
      <CheckoutHeader title={'Forgot Password'} />
      <ScrollView>
        <Text style={[styles.enter,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
          Enter the email address for which you forgot the{'\n'}password. We will send an OTP to the email.
        </Text>

        <View style={styles.inputContainer}>
          {otp.map((pin, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRef.current[index] = ref)}
              style={[
                styles.Otp,
                {
                  borderColor: focusedIndex === index ? COLOR.primary :thememode==='light' ? '#FAFAFA':COLOR.darkprimary,
                  backgroundColor:thememode==='light'? '#FAFAFA' : COLOR.darkprimary,
                  color:thememode==='light' ? COLOR.black : COLOR.white
                },
              ]}
              value={pin}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={(event) => handleOtpKeyPress(event, index)}
              maxLength={1}
              keyboardType="numeric"
              autoFocus={index === 0}
              onFocus={() => handleInputFocus(index)}
            />
          ))}
        </View>

        <View style={styles.bottomView}>
          <Button title={'Verify'} ButtonContainer={styles.Buttoncontaienr} onPress={() => navigation.navigate(SCREEN.ForgotPassword)} />
        </View>
        <BotttomHeight />
      </ScrollView>
    </View>
  );
};

export default Email;
