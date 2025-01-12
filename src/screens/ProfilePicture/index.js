
import { View, Text, FlatList, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import DocumentPicker from 'react-native-document-picker';

import { useNavigation } from '@react-navigation/native';
import CheckoutHeader from '../../components/reuseables/CheckoutHeader';
import Button from '../../components/reuseables/Button';
import { SCREEN } from '../../data/enums';
import { useSelector } from 'react-redux';
import { COLOR } from '../../data/StyleGuides';


const ProfilePicture = () => {
  const navigation = useNavigation();
  const [singleFile, setSingleFile] = useState('');
  const [notificationSwitchValue, setNotificationSwitchValue] = useState(false);
  const thememode = useSelector((state)=>state.theme.mode);
const [cont,setcont] = useState(false);
 

  const handleNotificationSwitch = () => {
    setNotificationSwitchValue((prevValue) => !prevValue);
  };

  const Reused = (index) => {
    if (index === 0) {
      navigation.navigate('Received_Gifts');
    } else if (index === 1) {
      navigation.navigate('Gender');
    }else if (index === 2) {
      navigation.navigate('Notifications');
    }else if (index === 3) {
      navigation.navigate('Privacy_Policies');
    }
     else {
      navigation.navigate('Details');
    }
  }





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
   
  return (
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
    <CheckoutHeader title={'Profile Setup'} />

      <View style={styles.Profile_View}>
      <View style={[styles.Circular_View,{backgroundColor:thememode==='light' ? COLOR.grey_9 : COLOR.darkprimary}]}>
          <Image source={require('../../Assets/images/UserIcon.png')} style={styles.User_Image} />

  <Image
            source={{
              uri: singleFile,
            }}
            style={styles.ImageStyling}
          />

         


        </View>
      
      </View>
      <View style={styles.bottomView}>
      
           <Text style={[styles.ProfileText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
           Profile Picture
           </Text>
           <Text style={[styles.Upload,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Upload your profile picture here</Text>
      <TouchableOpacity    activeOpacity={0.5}
      onPress={selectOneFile}>
     {cont ? <Text style={styles.Uploadbtn}>
     Change
     </Text>
      :
      <Text style={styles.Uploadbtn}>
      
      Upload</Text>}
    </TouchableOpacity>
    </View>
    <View style={styles.btnsView}>
   { cont ? <Button title={"Continue"} onPress={()=>navigation.navigate(SCREEN.AccountCreated)} />
   :
    <Button title={"Continue"} ButtonContainer={styles.Buttoncontainer} ButtonText={styles.btnText} />}
    </View>
     </View>
 
  )
}

export default ProfilePicture;




