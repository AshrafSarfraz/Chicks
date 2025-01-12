import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { ChunkyChicken } from '../../../data/Images'
import { COLOR, FONT } from '../../../data/StyleGuides'
import Input from '../../../components/reuseables/Input'
import CustomCheckbox from '../../../components/reuseables/CheckBox'
import Button from '../../../components/reuseables/Button'
import { styles } from './styles'
import { SCREEN } from '../../../data/enums'
import BotttomHeight from '../../../components/reuseables/BotttomHeight'
import { useSelector } from 'react-redux'
import { DarkTheme } from '@react-navigation/native'
export default function Signin({navigation}) {

  const themeMode = useSelector((state) => state.theme.mode);
  const [NextDoorid, setNextDoorid] = useState(null)

  const [values, setValues] = useState({
    passFocus: false,
    idFocus: false,
})
const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
const [password, setpassword] = useState(null)
const togglePassword = () => {
  setPasswordVisible(!passwordVisible)
}
const handleChange = (name: string, value: any) => { setValues((prevState) => ({ ...prevState, [name]: value })) };

  return (
    <View style={[styles.Container,{backgroundColor:themeMode === 'light' ? 'white' :COLOR.black}]}>
      <ScrollView>

   <View style={styles.container}>
  <Image style={styles.image} source={ChunkyChicken} />
  <Text style={[styles.welcomeText,{color:themeMode ==='light' ? COLOR.black:COLOR.white}]}>Welcome Back!</Text>
  <Text style={[styles.signInText,{color:themeMode==='light'? COLOR.black : COLOR.white}]}>Sign in with your account</Text>
  <View style={styles.inputContainer}>
    <Input
      onChange={(text) => setNextDoorid(text)}
      placeholder={'Luke.Skywalker@domain.com'}
      placeholderColor={values.idFocus ? COLOR.primary : COLOR.grey_1}
      style={[styles.input, values.idFocus && styles.focusedInput]}
      onFocus={() => handleChange('idFocus', true)}
      onBlur={() => handleChange('idFocus', false)}
      addLeft={<Image source={require('../../../Assets/icons/redmessage.png')} style={[styles.leftIcon,{tintColor:values.idFocus ? COLOR.primary : COLOR.grey_1 }]} />}
    />
   
    <Input
onChange={(text) => setpassword(text)}
placeholder={'Password'}
placeholderColor={values.passFocus ? COLOR.primary : COLOR.grey_1} 
style={[styles.input, values.passFocus && styles.focusedInput]}
onFocus={() => handleChange('passFocus', true)}
onBlur={() => handleChange('passFocus', false)}
addLeft={<Image source={require('../../../Assets/icons/Lock.png')}  style={[styles.passwordIcon,{tintColor:values.passFocus ? COLOR.primary : COLOR.grey_1 }]} resizeMode='contain' />}
secureText={!passwordVisible}
onRightPress={togglePassword}
addRight={passwordVisible ?<Image source={ require('../../../Assets/icons/show.png')} style={[styles.passwordIcon,{tintColor:themeMode==='light'?COLOR.black:COLOR.grey}]}/> : <Image source={ require('../../../Assets/icons/Hide.png')} style={styles.passwordIcon} resizeMode='contain' />}
/>
  </View>
</View>
<CustomCheckbox onPress={()=>navigation.navigate(SCREEN.Email)} />
<Button onPress={()=>navigation.navigate(SCREEN.DrawerNavigation)} marginTop={'10%'} title={'Sign In'}/>
<View style={styles.footerContainer}>
  <Text style={[styles.footerText,{color:themeMode === 'light' ? COLOR.black : COLOR.white}]}>Don’t have an account?</Text>
  <TouchableOpacity style={styles.footerLinkContainer} onPress={()=>navigation.navigate(SCREEN.SignUp)}>
    <Text style={styles.footerLink}>Sign Up</Text>
  </TouchableOpacity>
</View>
<BotttomHeight/>
</ScrollView>

    </View>
  )
}