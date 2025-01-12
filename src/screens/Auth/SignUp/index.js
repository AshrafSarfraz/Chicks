import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { ChunkyChicken } from '../../../data/Images'
import BotttomHeight from '../../../components/reuseables/BotttomHeight'
import { styles } from './styles'
import Input from '../../../components/reuseables/Input'
import CustomCheckbox from '../../../components/reuseables/CheckBox'
import { COLOR } from '../../../data/StyleGuides'
import Button from '../../../components/reuseables/Button'
import CheckoutHeader from '../../../components/reuseables/CheckoutHeader'
import { SCREEN } from '../../../data/enums'
import { useNavigation } from '@react-navigation/native'
import { Calendar } from 'react-native-calendars'
import { useSelector } from 'react-redux'
import { ColorProperties } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'

export default function SignUp() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [NextDoorid, setNextDoorid] = useState(null)
  const [NextMail, setNextMail] = useState(null)
  const [Nextdate, setNextdate] = useState(null)
  const [values, setValues] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [valup, setValup] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [valuecon, setValuecon] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [mailvale, setmailvale] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [datevalue, setdatevalue] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [Nextvalue, setNextvalue] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [NextLocate, setNextLocate] = useState({
    passFocus: false,
    idFocus: false,
  })

  const thememode = useSelector((state)=>state.theme.mode);
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordVisiblec, setPasswordVisiblec] = useState(false)
  const [password, setpassword] = useState(null)
  const [passwordc, setpasswordc] = useState(null)
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible)
  }
  const togglePasswordc = () => {
    setPasswordVisiblec(!passwordVisiblec)
  }
  const handleChange = (name, value) => { setValues((prevState) => ({ ...prevState, [name]: value })) };
  const handleChangemail = (mail, mailvale) => { setmailvale((prevState) => ({ ...prevState, [mail]: mailvale })) };
  const handleChangedate = (date, datevalue) => { setdatevalue((prevState) => ({ ...prevState, [date]: datevalue })) };
  const handleChangeLocate = (Locate, NextLocate) => { setNextLocate((prevState) => ({ ...prevState, [Locate]: NextLocate })) };
  const handleChangecon = (conf, valuecon) => { setValuecon((prevState) => ({ ...prevState, [conf]: valuecon })) };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  const handleDayPress = (day) => {
    const clickedDate = day.dateString;
    setNextdate(clickedDate);
    closeModal(); 
  };

  return (
    <View style={[styles.Container,{backgroundColor:thememode === 'light' ? COLOR.white : COLOR.black}]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={[styles.backIcon,{tintColor:thememode==='light' ? COLOR.black : COLOR.white}]} source={require('../../../Assets/images/Backicon.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView>

        <View style={styles.container}>
          <Image style={styles.image} source={ChunkyChicken} />
          <Text style={[styles.welcomeText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Welcome!</Text>
          <Text style={[styles.signInText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Sign Up to continue</Text>
          <View style={styles.inputContainer}>
    
            <Input
              onChange={(text) => setNextDoorid(text)}
              placeholder={'Name'}
              placeholderColor={values.idFocus ? COLOR.primary : COLOR.grey_1}
              style={[styles.input, values.idFocus && styles.focusedInput]}
              onFocus={() => handleChange('idFocus', true)}
              onBlur={() => handleChange('idFocus', false)}
              addLeft={<Image source={require('../../../Assets/images/Nameicon.png')} style={[styles.leftIcon, { tintColor: values.idFocus ? COLOR.primary : COLOR.grey_1 }]} />}
            />
         
            <Input
              onChange={(text) => setNextMail(text)}
              placeholder={'Luke.Skywalker@domain.com'}
              placeholderColor={mailvale.idFocus ? COLOR.primary : COLOR.grey_1}
              style={[styles.input, mailvale.idFocus && styles.focusedInput]}
              onFocus={() => handleChangemail('idFocus', true)}
              onBlur={() => handleChangemail('idFocus', false)}
              addLeft={<Image source={require('../../../Assets/images/Malilcon.png')} style={[styles.leftIcon1, { tintColor: mailvale.idFocus ? COLOR.primary : COLOR.grey_1 }]} />}
            />
            <TouchableOpacity style={{width:'100%'}}  onPress={openModal}>
            <Input
              onChange={(text) => setNextdate(text)}
              placeholder={'Date of Birth'}
              editable={false}
              value={Nextdate}
              placeholderColor={datevalue.idFocus ? COLOR.primary : COLOR.grey_1}
              style={[styles.input, datevalue.idFocus && styles.focusedInput]}
              onFocus={() => handleChangedate('idFocus', true)}
              onBlur={() => handleChangedate('idFocus', false)}
              addLeft={<TouchableOpacity onPress={openModal}><Image source={require('../../../Assets/images/dateicon.png')} style={[styles.leftIcon, { tintColor: datevalue.idFocus ? COLOR.primary : COLOR.grey_1 }]} /></TouchableOpacity>}
            />
            </TouchableOpacity >
            <Input
              onChange={(text) => setNextLocate(text)}
              placeholder={'Located Area'}
              placeholderColor={NextLocate.idFocus ? COLOR.primary : COLOR.grey_1}
              style={[styles.input, NextLocate.idFocus && styles.focusedInput]}
              onFocus={() => handleChangeLocate('idFocus', true)}
              onBlur={() => handleChangeLocate('idFocus', false)}
              addLeft={<Image source={require('../../../Assets/images/Discovery1.png')} style={[styles.leftIcon, { tintColor: NextLocate.idFocus ? COLOR.primary : COLOR.grey_1 }]} />}
            />
            <Input
              onChange={(text) => setpassword(text)}
              placeholder={'Password'}
              placeholderColor={values.passFocus ? COLOR.primary : COLOR.grey_1}
              style={[styles.input, values.passFocus && styles.focusedInput]}
              onFocus={() => handleChange('passFocus', true)}
              onBlur={() => handleChange('passFocus', false)}
              addLeft={<Image source={require('../../../Assets/icons/Lock.png')} style={[styles.passwordIcon, { tintColor: values.passFocus ? COLOR.primary : COLOR.grey_1 }]} resizeMode='contain' />}
              secureText={!passwordVisible}
              onRightPress={togglePassword}
              addRight={passwordVisible ? <Image source={require('../../../Assets/icons/show.png')}style={[styles.passwordIcon,{tintColor:thememode==='light'?COLOR.black:COLOR.grey}]} /> :<Image source={ require('../../../Assets/icons/Hide.png')} style={styles.passwordIcon} resizeMode='contain' />}
            />
            <Input
              onChange={(text) => setpasswordc(text)}
              placeholder={'Confirm Password'}
              placeholderColor={valuecon.passFocus ? COLOR.primary : COLOR.grey_1}
              style={[styles.input, valuecon.passFocus && styles.focusedInput]}
              onFocus={() => handleChangecon('passFocus', true)}
              onBlur={() => handleChangecon('passFocus', false)}
              addLeft={<Image source={require('../../../Assets/icons/Lock.png')} style={[styles.passwordIcon, { tintColor: valuecon.passFocus ? COLOR.primary : COLOR.grey_1 }]} resizeMode='contain' />}
              secureText={!passwordVisiblec}
              onRightPress={togglePasswordc}
              addRight={passwordVisiblec ?<Image source={ require('../../../Assets/icons/show.png')}style={[styles.passwordIcon,{tintColor:thememode==='light'?COLOR.black:COLOR.grey}]}/>:<Image source={ require('../../../Assets/icons/Hide.png')} style={styles.passwordIcon} resizeMode='contain' />}
            />
          </View>
        </View>

        <Button onPress={() => navigation.navigate(SCREEN.ProfileSetup)} marginTop={'10%'} title={'Sign Up'} />
        <View style={styles.footerContainer}>
          <Text style={[styles.footerText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Already have an account?</Text>
          <TouchableOpacity style={styles.footerLinkContainer} onPress={() => navigation.navigate(SCREEN.Signin)}>
            <Text style={styles.footerLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <BotttomHeight />
      </ScrollView>
      <Modal
        visible={modalVisible}
        transparent
        animationType='fade'
        onRequestClose={closeModal}
      >
        <TouchableOpacity style={styles.modalContainer} onPress={closeModal}>
          <View style={styles.contentContainer}>
            <Calendar style={{ width: "100%", height: 300 }}
              markedDates={{
                [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
              }}

              theme={{
                textDayFontFamily: 'LexendSemiBold',
                todayTextColor: 'black',
                'stylesheet.calendar.header': {
                  dayHeader: {
                    color: 'black',
                    fontSize: 14,
                    fontFamily: 'LexendBold',

                  },
                },
                selectedDayTextColor: 'white',
                selectedDayBackgroundColor:COLOR.primary
              }}
              // onDayPress={day => {
              //   const clickedDate = day.dateString;
              //   setSelected(clickedDate);
              // }}
              
              onDayPress={handleDayPress}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}