import { View,Image, StatusBar, TouchableOpacity, Text,FlatList ,ScrollView, ImageBackground} from 'react-native';
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
import SelectCheckBox from '../../components/reuseables/SelectCheckBox';
import { useSelector } from 'react-redux';



const CounterButtons = () => {
const thememode = useSelector((state)=>state.theme.mode)
  const [quantity, setQuantity] = useState(0);
  const [showDecrementIcon, setShowDecrementIcon] = useState(false);

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
    setShowDecrementIcon(true);
  };

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setShowDecrementIcon(false);
  };

  const handleCheckboxPress = () => {
    setSelected(!selected);
    onCheckboxChange(!selected); 
  };

  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity style={{right: '20%',}} onPress={decrement}>
      { showDecrementIcon ?   <View style={styles.boxredminos}>
      <View style={styles.grayview}>
      </View>
      </View>
       : <Image source={require('../../Assets/images/Cart/Minus.png')} style={styles.icon} />}
      </TouchableOpacity>
      <Text style={[styles.qty,{color:thememode==='light'?COLOR.black:COLOR.white}]}>{quantity}</Text>
      <TouchableOpacity style={{left: '20%',}} onPress={increment}>
        <Image source={require('../../Assets/images/Cart/plus.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};





export default function CheckoutCart() {
  const [checkbox,setCheckbox]= useState(true)
const navigation = useNavigation();
const thememode = useSelector((state)=>state.theme.mode)
const [data, setData] = useState([
  { id: '1', title: 'Pasta', quantity: '$20', imageUrl: require('../../Assets/images/Cart/image3.png'), isChecked: true },
  { id: '2', title: 'Noodles', quantity: '$15', imageUrl: require('../../Assets/images/Cart/image31.png'), isChecked: true },
  { id: '3', title: 'Macaroni', quantity: '$20', imageUrl: require('../../Assets/images/Cart/image37.png'), isChecked: true },

]);
const [count, setCount] = useState(true);
const [isAnyItemUnchecked, setIsAnyItemUnchecked] = useState(false);

const Box = ()=>{
setCount(!count)
handleCheckboxPress("selectAll")
}
const handleCheckboxPress = (itemId) => {
  console.log("line 71:: ", itemId);
  if (itemId === 'selectAll') {
    setIsAnyItemUnchecked(!isAnyItemUnchecked)
    console.log('Toggle "Select all items"', count, itemId);
    setCount(!count);
    setData((prevData) =>
      prevData.map((item) => ({ ...item, isChecked: !count }))
    );
  } else {
    console.log('Toggle individual item:', itemId);
    setIsAnyItemUnchecked(!isAnyItemUnchecked)
    setData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }
};


const renderItem = ({ item }) => (
  <View style={[styles.row,{backgroundColor:thememode==='light'? COLOR.white : COLOR.darkprimary}]}>
    <TouchableOpacity onPress={() => {handleCheckboxPress(item.id)}} style={item.isChecked ? styles.checkbox : styles.checkboxpast}>
      <Image source={item.isChecked ? require('../../Assets/images/graybox.png') : require('../../Assets/images/tickse.png')} style={styles.boxsize} />
    </TouchableOpacity>
    <Image source={item.imageUrl} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={[styles.title,,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>{item.title}</Text>
      <Text style={styles.price}>{item.quantity}</Text>
    </View>
  <CounterButtons/>
  </View>
);


const Deletfuction = () => {
  if (count === false) {

    navigation.navigate(SCREEN.NoCartFound);
    console.log('yesdelete');
  } else {

    const updatedData = data.filter(item => item.isChecked);

    setData(updatedData);
    console.log('Items deleted:', updatedData);
  }
};


  return (
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
      <StatusBar backgroundColor={COLOR.white}/>
      <ScrollView>
<CheckoutHeader title={'Cart'}/>

      <View style={styles.row}>
      <TouchableOpacity style={{width:20,marginRight:"5%",marginLeft:"5%"}} onPress={Box}>
        {count ? <Image source={require('../../Assets/images/graybox.png')} style={styles.boxsize}/>
        :
         <View style={styles.boxred}>
         <Image source={require('../../Assets/images/tickse.png')} style={styles.tick}/>
         </View>}
        </TouchableOpacity>
       {count ? <Text style={[styles.text,,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Select all items</Text>
       :
        <Text style={[styles.text,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Deselect all items</Text>}
       <TouchableOpacity
  onPress={Deletfuction}
  style={styles.touchimage}>
  {isAnyItemUnchecked ? <Image source={ require('../../Assets/images/delteshow.png')} style={[styles.imagedelete,{tintColor:thememode==='light' && isAnyItemUnchecked?COLOR.black:COLOR.white}]}/>:<Image source={ require('../../Assets/images/Cart/delete.png') } style={[styles.imagedelete,{tintColor:thememode==='light'?COLOR.gray_236:COLOR.grey_1}]} />}
</TouchableOpacity>

      </View>
     <View>
     <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      // Add additional FlatList props as needed
    />
     </View>
     <View style={styles.totalContainer}>
      <Text style={styles.totalText}>TOTAL:</Text>
      <Text style={[styles.totalAmount,,{color:thememode==='light' ? COLOR.black : COLOR.white}]}> $70</Text>
    </View>

    <View style={styles.deliveryAddressContainer}>
      <Text style={[styles.deliveryAddressText,,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Delivery Address</Text>
      <TouchableOpacity onPress={()=>navigation.navigate(SCREEN.CheckoutDetails)}>
      <Image style={styles.penIcon} source={require('../../Assets/images/Cart/pen.png')} />
      </TouchableOpacity>
    </View>

    <View style={styles.addressContainer}>
      <View style={styles.addressInnerContainer}>
        <Text style={styles.addressText}>2464 Royal Ln. Mesa, New Jersey</Text>
      </View>
    </View>
    <Button onPress={()=>navigation.navigate(SCREEN.CheckoutCard)} marginTop={'10%'} marginBottom={'20%'} title={'Place Order'}/>
    <BotttomHeight/>
    </ScrollView>

    </View>
  );
}









