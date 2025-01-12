import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground,
    Alert,
  
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import React, { useRef, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import styles from './style';
import CheckoutHeader from '../../components/reuseables/CheckoutHeader';
import Input from '../../components/reuseables/Input';
import Button from '../../components/reuseables/Button';
import { SCREEN } from '../../data/enums';
import BotttomHeight from '../../components/reuseables/BotttomHeight';
import { useSelector } from 'react-redux';
import { COLOR } from '../../data/StyleGuides';



const ProfileSetup = () => {
 const navigation = useNavigation();
 const thememode = useSelector((state)=>state.theme.mode)
 const [isVisible, setIsVisible] = useState(false);
 const [selectedCountry, setSelectedCountry] = useState('');
 const [countryCode, setCountryCode] = useState('FR');
 const [country, setCountry] = useState(null);
 const countryPickerRef = useRef(null);

 const countrySelect = (country) => {
   setSelectedCountry(country);
   setCountryCode(country.cca2);
   setCountry(country);
   setIsVisible(false);
 };

 const handleDropdownPress = () => {
   setIsVisible(true);
   if (countryPickerRef.current) {
     // ...
   }
 };
    return (
        <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
            <CheckoutHeader title={'Profile Setup'} />
            <ScrollView>
              <View style={{height:29}}/>

                <Text style={[styles.User_Name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Full Name</Text>
                <Input placeholder={'Clark Fox'} placeholderColor={thememode==='light' ? COLOR.regentGrey : COLOR.white} />
                <Text style={[styles.User_Name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Email Address</Text>
                <Input placeholder={'calrk_fox@example.com'} placeholderColor={thememode==='light' ? COLOR.regentGrey : COLOR.white} />
                <Text style={[styles.User_Name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Phone Number</Text>
               <View style={styles.inputs} >
               <TouchableOpacity style={[styles.containerinput,{backgroundColor:thememode==='light' ? COLOR.grey_03:COLOR.darkprimary}]} onPress={handleDropdownPress}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
         
          <CountryPicker
            {...{
              countryCode,
              emojiStyle: { fontSize: 20, marginHorizontal: 3, marginTop: 5 },
            }}
            ref={countryPickerRef}
            visible={isVisible}
            onSelect={countrySelect}
            withFlag
            withCallingCode
            onClose={() => setIsVisible(false)}
            countryCode={countryCode}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginLeft: 1 }}>{country?.callingCode}</Text>
          <Image
          source={require('../../Assets/images/Dropflage.png')}
          style={{ width: 14, height: 14, marginRight: '5%' }}
        />
        </View>
      </TouchableOpacity>
               <Input style={styles.inputno} placeholder={'(219) 555-0114'} keyboardType={'numeric'} placeholderColor={thememode==='light' ? COLOR.regentGrey : COLOR.white}   />
               </View> 
                <Text style={[styles.User_Name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Address</Text>
                <Input placeholder={'address'} placeholderColor={thememode==='light' ? COLOR.regentGrey : COLOR.white} />
                <Text style={[styles.User_Name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>City</Text>
                <Input placeholder={'city name'} placeholderColor={thememode==='light' ? COLOR.regentGrey : COLOR.white} />
                <Text style={[styles.User_Name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>State</Text>
                <Input  placeholder={'state name'} placeholderColor={thememode==='light' ? COLOR.regentGrey : COLOR.white}/>
                <Text style={[styles.User_Name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Country</Text>
                <Input placeholder={'country name'} placeholderColor={thememode==='light' ? COLOR.regentGrey : COLOR.white}/>
                <Button title={'Continue'} onPress={()=>navigation.navigate(SCREEN.ProfilePicture)} ButtonContainer={styles.countinue} />
                <View style={{height:20}}/>
                <BotttomHeight/>
            </ScrollView>
        </View>
    );
};

export default ProfileSetup;