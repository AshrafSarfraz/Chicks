
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


const AccountCreated = () => {
  const thememode = useSelector((state)=>state.theme.mode)
  const navigation = useNavigation();
  const [cont,setcont] = useState(false);
 
  return (
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
    <CheckoutHeader title={'Profile Setup'} />

      <View style={styles.Profile_View}>
      <View style={styles.Circular_View}>
          <Image source={require('../../Assets/images/SuccesState.png')} style={styles.User_Image} />
        </View>
      
      </View>
      <View style={styles.bottomView}>
      
           <Text style={[styles.ProfileText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
           Account Created
           </Text>
           <Text style={[styles.Upload,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Your account is created. A verification has sent to{"\n"}                           your email address.</Text>
      <TouchableOpacity    activeOpacity={0.5}
     >
    
    </TouchableOpacity>
    </View>
    <View style={styles.btnsView}>
    <Button title={"Skip"} onPress={()=>navigation.navigate(SCREEN.DrawerNavigation)} />
  
    <Button title={"Go To Email"} ButtonContainer={[styles.Buttoncontainer,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]} ButtonText={styles.btnText} />
    </View>
     </View>
 
  )
}

export default AccountCreated;




