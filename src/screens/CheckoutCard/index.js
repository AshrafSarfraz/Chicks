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


const data = [
  { id: '1', title: 'Pasta', quantity: '$20', imageUrl: require('../../Assets/images/Cart/image3.png') },
  { id: '2', title: 'Noodles', quantity: '$15', imageUrl: require('../../Assets/images/Cart/image31.png') },
  { id: '3', title: 'Macaroni', quantity: '$20', imageUrl: require('../../Assets/images/Cart/image37.png') },

  // Add more items as needed
];


export default function CheckoutCard() {

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
<CheckoutHeader title={'Choose Card'}/>
  <Text style={[{fontSize:14,fontFamily:FONT.Roboto_Medium,color:COLOR.black,marginLeft:'8%',marginTop:"8%"},{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Choose card to pay</Text>
 {thememode==='light' ? <TouchableOpacity style={styles.touchableOpacityContainer}>
      <Image   style={styles.cardImage} source={require('../../Assets/images/Card/MasterCard.png')} />
    </TouchableOpacity> 
    :
    <TouchableOpacity style={styles.touchableOpacityContainer}>
    <Image   style={styles.mastercardImage} source={require('../../Assets/images/masterdarkcard.png')} />
  </TouchableOpacity>
  
  }
    { thememode==='light' ? <TouchableOpacity style={styles.touchableOpacityContainer}>
      <Image  style={styles.cardImage} source={require('../../Assets/images/Card/Visa.png')} />
    </TouchableOpacity>:
    <TouchableOpacity style={styles.touchableOpacityContainer}>
      <Image  style={styles.mastercardImage} source={require('../../Assets/images/VisaDarkcard.png')} />
    </TouchableOpacity>
  }
    <TouchableOpacity style={styles.touchableOpacityContainer} onPress={()=>navigation.navigate(SCREEN.CheckoutDetails)}>
      <Image resizeMode='contain'  style={styles.cardImage2} source={require('../../Assets/images/Card/addNew.png')} />
    </TouchableOpacity>
    <View style={styles.totalContainer}>
      <Text style={styles.totalText}>TOTAL:</Text>
      <Text style={[styles.totalAmount,{color:thememode==='light' ? COLOR.black : COLOR.white}]}> $70</Text>
    </View>
    <Button onPress={()=>navigation.navigate(SCREEN.CheckoutPIN)} marginTop={'10%'} marginBottom={"10%"} title={'Continue'}/>
    <BotttomHeight/>
    </ScrollView>
    </View>
  );
}
