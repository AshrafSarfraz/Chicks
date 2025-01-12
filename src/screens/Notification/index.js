import { View,Image, StatusBar, TouchableOpacity, Text,FlatList ,ScrollView} from 'react-native';
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
import SwapComponent from '../../components/reuseables/SwapComponent';
import { useSelector } from 'react-redux';



const CounterButtons = () => {
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





export default function Notification() {

    const navigation = useNavigation();
    const thememode = useSelector((state)=>state.theme.mode);
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
<CheckoutHeader title={'Notification'}/>
<Text style={[styles.todayText,{color:thememode==='light' ? COLOR.grey_1 : COLOR.white}]}>Today</Text>
<TouchableOpacity style={[styles.Boxcontainer,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.darkprimary}]}>
  <View style={styles.rowContainer}>
    <Image style={styles.icon} source={require('../../Assets/icons/order.png')} />
    <View style={styles.textContainer}>
      <Text style={[styles.titleText,{color:thememode==='light'?COLOR.black: COLOR.white}]}>Order Delivered</Text>
      <Text style={[styles.descriptionText,{color:thememode==='light'?COLOR.grey_1: COLOR.white}]}>Your order is delivered to your location.</Text>
    </View>
  </View>
</TouchableOpacity>


<TouchableOpacity  style={[styles.Boxcontainer,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.darkprimary}]}>
  <View style={styles.rowContainer}>
    <Image style={styles.icon} source={require('../../Assets/icons/swap.png')} />
    <View style={styles.textContainer}>
      <Text style={[styles.titleText,{color:thememode==='light'?COLOR.black: COLOR.white}]}>Swap Complete</Text>
      <Text style={[styles.descriptionText,{color:thememode==='light'?COLOR.grey_1: COLOR.white}]}>Your swap is completed.</Text>
    </View>
  </View>
</TouchableOpacity>


<Text style={[styles.todayText,{color:thememode==='light' ? COLOR.grey_1 : COLOR.white}]}>09/07/2023</Text>
<TouchableOpacity  style={[styles.Boxcontainer,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.darkprimary}]}>
  <View style={styles.rowContainer}>
    <Image style={styles.icon} source={require('../../Assets/icons/swap.png')} />
    <View style={styles.textContainer}>
      <Text style={[styles.titleText,{color:thememode==='light'?COLOR.black: COLOR.white}]}>New Request</Text>
      <Text style={[styles.descriptionText,{color:thememode==='light'?COLOR.grey_1: COLOR.white}]}>You have a new request for swap.</Text>
    </View>
  </View>
</TouchableOpacity>


<TouchableOpacity  style={[styles.Boxcontainer,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.darkprimary}]}>
  <View style={styles.rowContainer}>
    <Image style={styles.icon} source={require('../../Assets/icons/persons.png')} />
    <View style={styles.textContainer}>
      <Text style={[styles.titleText,{color:thememode==='light'?COLOR.black: COLOR.white}]}>New Recipe</Text>
      <Text style={[styles.descriptionText,{color:thememode==='light'?COLOR.grey_1: COLOR.white}]}>New recipe uploaded in community.</Text>
    </View>
  </View>
</TouchableOpacity>


<Text style={[styles.todayText,{color:thememode==='light' ? COLOR.grey_1 : COLOR.white}]}>09/07/2023</Text>
<TouchableOpacity  style={[styles.Boxcontainer,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.darkprimary}]}>
  <View style={styles.rowContainer}>
    <Image style={styles.icon} source={require('../../Assets/icons/ticket.png')} />
    <View style={styles.textContainer}>
      <Text style={[styles.titleText,{color:thememode==='light'?COLOR.black: COLOR.white}]}>Credit card Connected</Text>
      <Text style={[styles.descriptionText,{color:thememode==='light'?COLOR.grey_1: COLOR.white}]}>Credit card has been linked.</Text>
    </View>
  </View>
</TouchableOpacity>


<TouchableOpacity  style={[styles.Boxcontainer,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.darkprimary}]}>
  <View style={styles.rowContainer}>
    <Image style={styles.icon} source={require('../../Assets/icons/person.png')} />
    <View style={styles.textContainer}>
      <Text style={[styles.titleText,{color:thememode==='light'?COLOR.black: COLOR.white}]}>Account setup completed</Text>
      <Text style={[styles.descriptionText,{color:thememode==='light'?COLOR.grey_1: COLOR.white}]}>Your account has been created.</Text>
    </View>
  </View>
</TouchableOpacity>
   <View style={{height:30}}/>
    <BotttomHeight/>
    </ScrollView>
    </View>
  );
}
