import React,{useState} from "react";
import {  Text, View, Image,ScrollView, TextInput } from 'react-native'
import styles from './style'
import CheckoutHeader from "../../components/reuseables/CheckoutHeader";
import Button from "../../components/reuseables/Button";
import { useNavigation } from "@react-navigation/native";
import BotttomHeight from "../../components/reuseables/BotttomHeight";
import { COLOR, FONT } from "../../data/StyleGuides";
import { SCREEN } from "../../data/enums";
import { useSelector } from "react-redux";


const AddAddress = () => {
    const naviagtion = useNavigation();
const thememode = useSelector((state)=>state.theme.mode);
    const [mailvale, setmailvale] = useState({
      passFocus: false,
      idFocus: false,
    })
    const [First, setFirst] = useState({
      passFocus: false,
      idFocus: false,
    })
    const [Last, setLast] = useState({
      passFocus: false,
      idFocus: false,
    })
    const [Streat, SetStreat] = useState({
      passFocus: false,
      idFocus: false,
    })
    const [Option, setOption] = useState({
      passFocus: false,
      idFocus: false,
    })
    const [City, setCity] = useState({
      passFocus: false,
      idFocus: false,
    })
    const [State, setState] = useState({
      passFocus: false,
      idFocus: false,
    })
    const [Zip, setZip] = useState({
      passFocus: false,
      idFocus: false,
    })
    const [Phone, setPhone] = useState({
      passFocus: false,
      idFocus: false,
    })





    const handleChangemail = (mail, mailvale) => { setmailvale((prevState) => ({ ...prevState, [mail]: mailvale })) };
    const handleChangeFirst = (mail, First) => { setFirst((prevState) => ({ ...prevState, [mail]: First })) };
    const handleChangeLast = (mail, Last) => { setLast((prevState) => ({ ...prevState, [mail]: Last })) };
    const handleChangeStreat = (mail, Streat) => { SetStreat((prevState) => ({ ...prevState, [mail]: Streat })) };
    const handleChangeOption = (mail, Option) => { setOption((prevState) => ({ ...prevState, [mail]: Option })) };
    const handleChangeCity = (mail, City) => { setCity((prevState) => ({ ...prevState, [mail]: City })) };
    const handleChangeState = (mail, State) => { setState((prevState) => ({ ...prevState, [mail]: State })) };
    const handleChangeZip = (mail, Zip) => { setZip((prevState) => ({ ...prevState, [mail]: Zip })) };
    const handleChangePhone = (mail, Phone) => { setPhone((prevState) => ({ ...prevState, [mail]: Phone })) };

    return (
        <View style={[[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]]}>
            <ScrollView>
        <CheckoutHeader title={'Add Address'} titlestyle={styles.titllestyel} />
 
        <View style={styles.inputContainer}>
  <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Country or region</Text>
  <TextInput placeholder="United States" placeholderTextColor={thememode==='lgiht'?COLOR.black:COLOR.white} style={[styles.input, mailvale.idFocus && styles.focusedInput,{backgroundColor:thememode==='light'?COLOR.white:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]}
  onFocus={() => handleChangemail('idFocus', true)}
  onBlur={() => handleChangemail('idFocus', false)}  />
</View>

<View style={styles.inputContainerSecond}>
  <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>First Name</Text>
  <TextInput 
  style={[styles.input, First.idFocus && styles.focusedInput,{backgroundColor:thememode==='light'?COLOR.white:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]}
  onFocus={() => handleChangeFirst('idFocus', true)}
  onBlur={() => handleChangeFirst('idFocus', false)}
  />
</View>


<View style={styles.inputContainerSecond}>
  <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Last Name</Text>
  <TextInput  style={[styles.input, Last.idFocus && styles.focusedInput,{backgroundColor:thememode==='light'?COLOR.white:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]}
  onFocus={() => handleChangeLast('idFocus', true)}
  onBlur={() => handleChangeLast('idFocus', false)}/>
</View>


<View style={styles.inputContainerSecond}>
  <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Street Address</Text>
  <TextInput style={[styles.input, Streat.idFocus && styles.focusedInput,{backgroundColor:thememode==='light'?COLOR.white:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]}
  onFocus={() => handleChangeStreat('idFocus', true)}
  onBlur={() => handleChangeStreat('idFocus', false)}/>
</View>


<View style={styles.inputContainerSecond}>
  <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Street Address 2 (Optional)</Text>
  <TextInput style={[styles.input, Option.idFocus && styles.focusedInput,{backgroundColor:thememode==='light'?COLOR.white:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]}
  onFocus={() => handleChangeOption('idFocus', true)}
  onBlur={() => handleChangeOption('idFocus', false)} />
</View>


<View style={styles.inputContainerSecond}>
  <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>City</Text>
  <TextInput style={[styles.input, City.idFocus && styles.focusedInput,{backgroundColor:thememode==='light'?COLOR.white:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]}
  onFocus={() => handleChangeCity('idFocus', true)}
  onBlur={() => handleChangeCity('idFocus', false)}/>
</View>


<View style={styles.inputContainerSecond}>
  <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>State/Province/Region</Text>
  <TextInput style={[styles.input, State.idFocus && styles.focusedInput,{backgroundColor:thememode==='light'?COLOR.white:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]}
  onFocus={() => handleChangeState('idFocus', true)}
  onBlur={() => handleChangeState('idFocus', false)} />
</View>


<View style={styles.inputContainerSecond}>
  <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Zip Code</Text>
  <TextInput style={[styles.input, Zip.idFocus && styles.focusedInput,{backgroundColor:thememode==='light'?COLOR.white:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]}
  onFocus={() => handleChangeZip('idFocus', true)}
  onBlur={() => handleChangeZip('idFocus', false)} keyboardType="numeric" />
</View>


<View style={styles.inputContainerSecond}>
  <Text style={[styles.label,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Phone Number</Text>
  <TextInput  style={[styles.input, Phone.idFocus && styles.focusedInput,{backgroundColor:thememode==='light'?COLOR.white:COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]}
  onFocus={() => handleChangePhone('idFocus', true)}
  onBlur={() => handleChangePhone('idFocus', false)} keyboardType="numeric" />
</View>

<Button marginTop={'10%'} title={'Add Address'} onPress={()=>naviagtion.navigate(SCREEN.DrawerNavigation)}/>
        <BotttomHeight/>
        </ScrollView>
     
    </View>
    )
}

export default AddAddress;