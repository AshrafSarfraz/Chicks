import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import CheckoutHeader from '../../components/reuseables/CheckoutHeader';
import Input from '../../components/reuseables/Input';
import Button from '../../components/reuseables/Button';
import BotttomHeight from '../../components/reuseables/BotttomHeight';
import CountryPicker from 'react-native-country-picker-modal';
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from '../../data/enums';
import ProfileStack from '../../navigations/ProfileStack';
import DocumentPicker from 'react-native-document-picker';
import { useSelector } from 'react-redux';
import { COLOR } from '../../data/StyleGuides';

const EditProfile = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryCode, setCountryCode] = useState('FR');
  const [country, setCountry] = useState(null);
  const countryPickerRef = useRef(null);
  const [singleFile, setSingleFile] = useState('');
const [cont,setcont] = useState(false);


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

  
  const selectOneFile = async () => {
   
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
    });

      if (res.length > 0) {
        console.log('res : ' + JSON.stringify(res));
        console.log('URI : ' + res[0].uri);
        setSingleFile(res[0].uri);
        console.log('Type : ' + res[0].type);
        console.log('File Name : ' + res[0].name);
        console.log('File Size : ' + res[0].size);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled', 'File selection was canceled.');
      } else {
        Alert.alert('Error', 'An unknown error occurred: ' + JSON.stringify(err));
        throw err;
      }
    }
    setcont(true)
  };
const thememode = useSelector((state)=>state.theme.mode)
  return (
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
      <CheckoutHeader title={'Edit Profile'} onPress={()=>navigation.goBack()}/>
      <ScrollView>
        <View style={styles.Circular_View}>
        <Image
        source={{
          uri: singleFile,
        }}
        style={styles.ImageStyling}
      />
        </View>

        <TouchableOpacity style={styles.EditButton} activeOpacity={0.5}
        onPress={selectOneFile}>
          <Image source={require('../../Assets/images/Cameraicon.png')} style={styles.Edit_Icon} />
        </TouchableOpacity>

        <Text style={[styles.User_Name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Full Name</Text>
        <Input placeholder={'Clark Fox'} placeholderColor={thememode==='light'? COLOR.regentGrey : COLOR.white} />
        <Text style={[styles.User_Name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Email Address</Text>
        <Input placeholder={'calrk_fox@example.com'} placeholderColor={thememode==='light'? COLOR.regentGrey : COLOR.white} />
        <Text style={[styles.User_Name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Phone Number</Text>
        <View style={styles.inputs}>
        <TouchableOpacity style={styles.containerinput} onPress={handleDropdownPress}>
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
      
          <Input style={styles.inputno} placeholder={'(219) 555-0114'} keyboardType={'numeric'} placeholderColor={thememode==='light'? COLOR.regentGrey : COLOR.white} />
        </View>

        <Text style={[styles.User_Name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Address</Text>
        <Input placeholder={'2464 Royal Ln. Mesa, New Jersey 45463'} placeholderColor={thememode==='light'? COLOR.regentGrey : COLOR.white} />
        <Text style={[styles.User_Name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>City</Text>
        <Input placeholder={'Jersey City'} placeholderColor={thememode==='light'? COLOR.regentGrey : COLOR.white}/>
        <Text style={[styles.User_Name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>State</Text>
        <Input placeholder={'New Jersey'} placeholderColor={thememode==='light'? COLOR.regentGrey : COLOR.white}/>
        <Text style={[styles.User_Name.color,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Country</Text>
        <Input placeholder={'United States of America'} placeholderColor={thememode==='light'? COLOR.regentGrey : COLOR.white} />
       
      <Button title={'Save'} ButtonContainer={styles.savebutton} onPress={()=>navigation.goBack()} />
      <BotttomHeight />
      </ScrollView>
    </View>
  );
};

export default EditProfile;
