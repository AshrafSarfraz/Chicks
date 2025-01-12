
import React, { useState } from "react";
import { Image, Text, View, ScrollView } from 'react-native';
import styles from './style';
import CheckoutHeader from "../../../components/reuseables/CheckoutHeader";
import Input from "../../../components/reuseables/Input";
import Button from "../../../components/reuseables/Button";
import BotttomHeight from "../../../components/reuseables/BotttomHeight";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../../data/enums";
import { COLOR } from "../../../data/StyleGuides";
import { useSelector } from "react-redux";
import { State } from "react-native-gesture-handler";

const ForgotPassword = () => {
  const [values, setValues] = useState({
    passFocus: false,
    idFocus: false,
  });
  const thememode = useSelector((state)=>state.theme.mode);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisiblec, setPasswordVisiblec] = useState(false);
  const [password, setpassword] = useState(null);
  const [passwordc, setpasswordc] = useState(null);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordc = () => {
    setPasswordVisiblec(!passwordVisiblec);
  };

  const [valup, setValup] = useState({
    passFocus: false,
    idFocus: false,
  });

  const [valuecon, setValuecon] = useState({
    passFocus: false,
    idFocus: false,
  });

  const handleChange = (name, value) => {
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangecon = (conf, valuecon) => {
    setValuecon((prevState) => ({ ...prevState, [conf]: valuecon }));
  };

  const navigation = useNavigation();

  const isPasswordValid = () => {
    return password && password.length >= 8;
  };

  return (
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
      <CheckoutHeader title={'Forgot Password'} />
      <ScrollView>
        <Text style={[styles.enter,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
          Create a new password that is safer and easier to {"\n"} remember.
        </Text>
        <Text style={styles.Email}>
          Password
        </Text>
        <Input
          onChange={(text) => setpassword(text)}
          placeholder={'min. 8 characters'}
          placeholderColor={values.passFocus ? COLOR.primary : COLOR.grey_1}
          style={[styles.input, values.passFocus && styles.focusedInput]}
          onFocus={() => handleChange('passFocus', true)}
          onBlur={() => handleChange('passFocus', false)}
          secureText={!passwordVisible}
          onRightPress={togglePassword}
          addRight={passwordVisible ?<Image source={ require('../../../Assets/icons/show.png')} style={[styles.passwordIcon,{tintColor:thememode==='light'?COLOR.black:COLOR.grey}]}/> : <Image source={require('../../../Assets/icons/Hide.png')} style={styles.passwordIcon} resizeMode='contain' />}
        />
        {isPasswordValid() && (
          <Text style={styles.passwordHint}>
            Password is at least 8 characters long.
          </Text>
        )}

        <Text style={styles.Email}>
          Confirm Password
        </Text>
        <Input
          onChange={(text) => setpasswordc(text)}
          placeholder={'confirm password'}
          placeholderColor={valuecon.passFocus ? COLOR.primary : COLOR.grey_1}
          style={[styles.input, valuecon.passFocus && styles.focusedInput]}
          onFocus={() => handleChangecon('passFocus', true)}
          onBlur={() => handleChangecon('passFocus', false)}
          secureText={!passwordVisiblec}
          onRightPress={togglePasswordc}
          addRight={passwordVisiblec ? <Image source={require('../../../Assets/icons/show.png')} style={[styles.passwordIcon,{tintColor:thememode==='light'?COLOR.black:COLOR.grey}]} /> :<Image source={ require('../../../Assets/icons/Hide.png')} style={styles.passwordIcon} resizeMode='contain' />}
        />

        <BotttomHeight />
        <Button title={'Reset Password'} ButtonContainer={styles.Buttoncontaienr} onPress={() => navigation.navigate(SCREEN.PasswordRecovered)} />
      </ScrollView>
    </View>
  );
};

export default ForgotPassword;
