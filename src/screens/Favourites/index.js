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

const data = [
  { id: '1', title: 'Krunch Burger', description: 'Krunch fillet, spicy mao, lettuce, sandwiched between a sesame seed bun', price: '$150', imageUrl: require('../../Assets/images/Home/deal2.png') },
  { id: '2', title: 'Zingeratha', description: 'Lorem ipsum dolor sit amet consectetur. Tempus scelerisque ullamcorper....', price: '$150', imageUrl: require('../../Assets/images/Home/deal7.png') },
  // Add more items as needed
];




export default function Favourites() {
  const thememode = useSelector((state)=>state.theme.mode);


  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (itemId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(itemId)
        ? prevFavorites.filter((id) => id !== itemId)
        : [...prevFavorites, itemId]
    );
  };

  const renderItem = ({ item }) => (
    <View style={[styles.itemcontainer,{backgroundColor:thememode==='light'?COLOR.white :COLOR.darkprimary}]}>
      <Image style={styles.image} source={ item.imageUrl } />
      <View style={styles.textContainer}>
        <Text style={[styles.title,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>{item.title}</Text>
        <Text style={[styles.description,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>{item.description}</Text>
        <Text style={styles.customizeText}>CUSTOMIZE</Text>
        <Text style={[styles.price,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.heartIcon} onPress={() => toggleFavorite(item.id)}>
        <Image
        resizeMode='contain'
          style={{ height: 24, width: 24 }}
          source={favorites.includes(item.id) ? require('../../Assets/icons/redheart.png') : require('../../Assets/icons/blackheart.png')}
        />
      </TouchableOpacity>
    </View>

  );

    const navigation = useNavigation();
 
  return (
    <View style={[styles.container,,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
      <StatusBar backgroundColor={COLOR.white}/>
      <ScrollView>
        <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        {thememode==='light'?  <Image style={styles.whiteBack} source={require('../../Assets/icons/whiteBack.png')}/> : <Image style={styles.whiteBack} source={require('../../Assets/images/termdark.png')} />}
  </TouchableOpacity> 
  <Text style={[styles.headertxt,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>My Favorites</Text>
        </View>
        <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{marginTop:'5%'}}
    />
    <BotttomHeight/>
    </ScrollView>
    </View>
  );
}
