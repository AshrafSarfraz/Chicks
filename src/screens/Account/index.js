import { View,Image, StatusBar, TouchableOpacity, Text,FlatList ,ScrollView,Modal,TextInput} from 'react-native';
import React,{useEffect,useState} from 'react';
import { COLOR, FONT } from '../../data/StyleGuides';
import { ChunkyChicken, ChunkyChickenWhiteBackground } from '../../data/Images';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from '../../data/enums';
import SimpleCheckbox from '../../components/reuseables/SimpleCheckBox';
import Button from '../../components/reuseables/Button';
import BotttomHeight from '../../components/reuseables/BotttomHeight';
import CheckoutHeader from '../../components/reuseables/CheckoutHeader';
import { useSelector } from 'react-redux';



const CounterButtons = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(0);
   
  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
  };

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };


  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity style={{right: '20%',}} onPress={decrement}>
        <Image source={require('../../Assets/images/Cart/Minus.png')} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.qty}>{quantity}</Text>
      <TouchableOpacity style={{left: '20%',}} onPress={increment}>
        <Image source={require('../../Assets/images/Cart/plus.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};


const data = [
  { id: '1', title: 'Pasta', quantity: '$20', imageUrl: require('../../Assets/images/Cart/image3.png') },
  { id: '2', title: 'Noodles', quantity: '$15', imageUrl: require('../../Assets/images/Cart/image31.png') },
  { id: '3', title: 'Macaroni', quantity: '$20', imageUrl: require('../../Assets/images/Cart/image37.png') },

  // Add more items as needed
];


export default function Account() {

    const navigation = useNavigation();
    const thememode = useSelector((state)=>state.theme.mode);
    const [isVisible, setIsVisible] = useState(false);
  
    const openModal = () => {
      setIsVisible(true);
    };
  
    const closeModal = () => {
      setIsVisible(false);
    };
  
    const renderItem = ({ item }) => (
      <View style={styles.row}>
        <SimpleCheckbox/>
        <Image source={item.imageUrl } style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title} >{item.title}</Text>
          <Text style={styles.price}>{item.quantity}</Text>
        </View>
        <CounterButtons />
      </View>
    );
  return (
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
      <StatusBar backgroundColor={COLOR.white}/>
      <ScrollView>

      <Text style={[styles.title,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Account</Text>

<View style={styles.accountContainer}>
  <Image style={styles.profileImage} source={require('../../Assets/images/Account/profile.png')} />
  <View style={styles.textContainer}>
    <Text style={styles.name}>Clark Luis</Text>
    <Text style={styles.email}>clark_luis113@gmail.com</Text>
  </View>
  <TouchableOpacity onPress={()=>navigation.navigate(SCREEN.EditProfile)} style={styles.touchicon}>
  <Image style={styles.penIcon} source={require('../../Assets/images/Account/pen.png')} />
  </TouchableOpacity>
</View>
<Image style={styles.line} source={require('../../Assets/images/Account/line.png')} />

<TouchableOpacity style={styles.passwordChangeContainer} onPress={()=>navigation.navigate(SCREEN.Email)}>
  <Image style={styles.passwordIcon} source={require('../../Assets/images/Account/changepassword.png')} />
  <Text style={[styles.changePasswordText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Change Password</Text>
  <Image style={styles.arrowIcon} source={require('../../Assets/images/Account/leftarrow.png')} />
</TouchableOpacity>

<TouchableOpacity style={styles.passwordChangeContainer} onPress={()=>navigation.navigate(SCREEN.PaymentMethod)}>
  <Image style={styles.passwordIcon} source={require('../../Assets/images/Account/wallet.png')} />
  <Text style={[styles.changePasswordText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>My Wallet</Text>
  <Image style={styles.arrowIcon} source={require('../../Assets/images/Account/leftarrow.png')} />
</TouchableOpacity>


<TouchableOpacity onPress={()=>navigation.navigate(SCREEN.SwapRequest)} style={styles.passwordChangeContainer}>
  <Image style={styles.passwordIcon} source={require('../../Assets/images/Account/swap.png')} />
  <Text style={[styles.changePasswordText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Swap Request</Text>
  <Image style={styles.arrowIcon} source={require('../../Assets/images/Account/leftarrow.png')} />
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate(SCREEN.Notification)} style={styles.passwordChangeContainer}>
  <Image style={styles.passwordIcon} source={require('../../Assets/images/Account/Notify.png')} />
  <Text style={[styles.changePasswordText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Notifications</Text>
  <Image style={styles.arrowIcon} source={require('../../Assets/images/Account/leftarrow.png')} />
</TouchableOpacity>


<TouchableOpacity onPress={()=>navigation.navigate(SCREEN.LiveChat)}  style={styles.passwordChangeContainer}>
  <Image style={styles.passwordIcon} source={require('../../Assets/images/Account/Help.png')} />
  <Text style={[styles.changePasswordText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Help</Text>
  <Image style={styles.arrowIcon} source={require('../../Assets/images/Account/leftarrow.png')} />
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate(SCREEN.Terms)} style={styles.passwordChangeContainer}>
  <Image style={styles.passwordIcon} source={require('../../Assets/images/Account/Terms.png')} />
  <Text style={[styles.changePasswordText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Terms of Use</Text>
  <Image style={styles.arrowIcon} source={require('../../Assets/images/Account/leftarrow.png')} />
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate(SCREEN.Privacy)}  style={styles.passwordChangeContainer}>
  <Image style={styles.passwordIcon} source={require('../../Assets/images/Account/Privacy.png')} />
  <Text style={[styles.changePasswordText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Privacy Policy</Text>
  <Image style={styles.arrowIcon} source={require('../../Assets/images/Account/leftarrow.png')} />
</TouchableOpacity>

<TouchableOpacity onPress={openModal} style={styles.passwordChangeContainer}>
  <Image style={styles.passwordIcon} source={require('../../Assets/images/Account/logoout.png')} />
  <Text style={[styles.changePasswordText,{color:'#E40000',fontSize:14}]}>Log out</Text>
  <Image style={styles.arrowIcon} source={require('../../Assets/images/Account/leftarrow.png')} />
</TouchableOpacity>




    <BotttomHeight/>
    </ScrollView>
    <Modal
      animationType='fade'
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView, { backgroundColor: thememode === 'light' ? COLOR.white : '#303030' }]}>
            <Text style={styles.Cancel}>
            Log out
            </Text>
            <Image source={require('../../Assets/images/Lineimage.png')} style={styles.imagemodal}/>
          <Text style={[styles.modalText,{color:thememode==='light'?COLOR.black_2: COLOR.white}]}>You are attempting to log out.</Text>
      

          <View style={styles.ButtonsView1}>
                <Button title={'Cancel'} ButtonContainer={styles.ButtonCancelmodal} ButtonText={styles.canceltextmodal}  onPress={closeModal}/>
                <Button title={'Log out'} ButtonContainer={styles.Buttoncontainer} onPress={()=>navigation.navigate(SCREEN.Signin)}/>

            </View>
        </View>
      </View>
    </Modal>
    </View>
  );
}
