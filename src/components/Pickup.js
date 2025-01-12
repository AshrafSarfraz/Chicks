import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList,Image } from 'react-native';
import { COLOR, FONT } from '../data/StyleGuides';
import { SCREEN } from '../data/enums';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const data = [
  {
    id: '1',
    title: 'Krunch Burger',
    description: 'Krunch fillet, spicy mao, lettuce, sandwiched between a sesame seed bun',
    image: require('../Assets/images/Home/deal2.png'), // Replace with the actual image path
    price: '$150',
    points:'30 points Reward',
  },
  {
    id: '2',
    title: 'Zingeratha',
    description: 'Lorem ipsum dolor sit amet consectetur. Tempus scelerisque ullamcorper....',
    image: require('../Assets/images/Home/deal7.png'), // Replace with the actual image path
    price: '$150',
    points:'30 points Reward',

  },
   {
    id: '1',
    title: 'Krunch Burger',
    description: 'Krunch fillet, spicy mao, lettuce, sandwiched between a sesame seed bun',
    image: require('../Assets/images/Home/deal2.png'), // Replace with the actual image path
    price: '$150',
    points:'',

  },
  {
    id: '1',
    title: 'Krunch Burger',
    description: 'Krunch fillet, spicy mao, lettuce, sandwiched between a sesame seed bun',
    image: require('../Assets/images/Home/deal2.png'), // Replace with the actual image path
    price: '$150',
    points:'',

  },
  {
    id: '1',
    title: 'Krunch Burger',
    description: 'Krunch fillet, spicy mao, lettuce, sandwiched between a sesame seed bun',
    image: require('../Assets/images/Home/deal2.png'), // Replace with the actual image path
    price: '$150',
    points:'',

  },
];

const Pickup = ({}) => {
  const [selectedTab, setSelectedTab] = useState('everydayValue');
  const thememode = useSelector((state)=>state.theme.mode);
const navigation = useNavigation()
  const showComponent = (tab) => {
    setSelectedTab(tab);
  };


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate(SCREEN.SingleItem)} style={[styles.itemContainer,{backgroundColor:thememode==='light' ? COLOR.grey: COLOR.darkprimary}]}>
       <View style={styles.textContainer}>
        <Text style={[styles.title2,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>{item.title}</Text>
        <Text style={[styles.description,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>{item.description}</Text>
        <Text style={styles.customize}>CUSTOMIZE</Text>
        <View style={styles.con}>
  <Text style={[styles.priceText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>{item.price}</Text>
{
  item.points ===  '' ? (
    null
  ):(
    <View style={styles.pointsContainer}>
    <Text style={styles.pointsText}>{item.points}</Text>
  </View>
  )
}
</View>
      </View>
      <Image resizeMode='contain' source={item.image} style={styles.image2} />
    
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, selectedTab === 'everydayValue' && styles.selectedButton]}
          onPress={() => showComponent('everydayValue')}
        >
          <Text style={[styles.text,{color:thememode==='light' ? COLOR.black:COLOR.white}]}>Everyday Value</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, selectedTab === 'alaCarteCombos' && styles.selectedButton]}
          onPress={() => showComponent('alaCarteCombos')}
        >
          <Text style={[styles.text,{color:thememode==='light' ? COLOR.black:COLOR.white}]}>Ala-Carte-&-Combos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, selectedTab === 'promotion' && styles.selectedButton]}
          onPress={() => showComponent('promotion')}
        >
          <Text style={[styles.text,{color:thememode==='light' ? COLOR.black:COLOR.white}]}>Promotion</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.component}>
        {selectedTab === 'everydayValue' && <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.itemcontainer}
    />}
        {selectedTab === 'alaCarteCombos' && <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.itemcontainer}
    />}
        {selectedTab === 'promotion' && <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.itemcontainer}
    />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:'3%',
    marginHorizontal:'3%'
  
  },
  button: {
    alignItems: 'center',
  },
  selectedButton: {
    borderBottomWidth: 2,
    borderBottomColor: COLOR.primary
  },
  component: {
  },text:{
    fontSize:14,fontFamily:FONT.Urbanist_Medium,color:COLOR.black
  },
  itemcontainer: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    height: 120,
    width: 335,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: COLOR.grey,
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 8,
  },
  itemcontainer: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    height: 120,
    width: '98%',
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
    alignSelf:'center'
  },
  image2: {
    width: 120,
    height: 120,
    marginRight:'3%'
  },
  textContainer: {
    flex: 1,
    padding: 8,
    marginLeft:"2%",
    marginTop:"2%"
  },
  title2: {
    fontSize: 14,
    fontFamily:FONT.Urbanist_SemiBold,
    color:COLOR.black
  },
  description: {
    fontSize: 8,
    fontFamily:FONT.Urbanist_Regular,
    color:COLOR.black,
    width:'95%'
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 8,
  },customize:{
    fontSize: 14,
    fontFamily:FONT.Urbanist_SemiBold,
    color:COLOR.primary,
    marginTop:'5%'
  },
  con: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  priceText: {
    fontSize: 14,
    color: COLOR.black,
    fontFamily: FONT.Urbanist_SemiBold,
  },
  pointsContainer: {
    backgroundColor: '#D56E65',
    padding: 5,
    borderRadius: 5,
    marginRight: '8%',
  },
  pointsText: {
    fontSize: 10,
    color: COLOR.white,
    fontFamily: FONT.Urbanist_SemiBold,
  },
});

export default Pickup;
