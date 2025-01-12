import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,ScrollView, FlatList } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';
import { SCREEN } from '../../data/enums';
import Button from '../../components/reuseables/Button';


export default function SingleItemFull({navigation}) {
  const data = [
    { id: '1', title: 'Pepsi Regular', description: '$50', imageUrl: require('../../Assets/images/pepsi.png') },
    { id: '2', title: '7up Regular', description: '$50', imageUrl: require('../../Assets/images/sprite.png') },
    { id: '2', title: 'Miranda Regular', description: '$50', imageUrl: require('../../Assets/images/fants.png') },
    { id: '2', title: 'Mineral Water', description: '$50', imageUrl: require('../../Assets/images/water.png') },

    // Add more items as needed
  ];
  
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImage} source={item.imageUrl } />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonLabel}>Add</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>

     <View style={[styles.cardContainer]}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <Image style={styles.backButton} source={require('../../Assets/icons/blackback.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.heartButton} source={require('../../Assets/icons/blackheart.png')} />
          </TouchableOpacity>
        </View>
        <Image resizeMode='contain' style={styles.image} source={require('../../Assets/images/Home/deal2.png')} />
      </View>
      <View style={styles.detailsContainer}>
       
        <Text style={styles.title}>Krunch Burger</Text>
        <Text style={styles.description}>
          Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun
        </Text>
        <View style={styles.con}>
  <Text style={styles.priceText}>Choose an option</Text>

</View>
<View style={styles.container2}>
      <Text style={styles.title2}>Krunch Burger</Text>
      <View style={styles.priceContainer2}>
        <Text style={styles.priceText2}>$150</Text>
        <Image style={styles.dotIcon2} source={require('../../Assets/icons/dot.png')} />
      </View>
    </View>

    <View  style={styles.con}>
  <Text style={styles.priceText}>Add a soft drink</Text>
    <Text style={styles.priceText}>Optional</Text>
</View>
<View>
<FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.flatListContainer}
    />
    <Button onPress={()=>navigation.navigate(SCREEN.CheckoutCart)} title={'Next'}/>

</View>
      </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  cardContainer: {
    height: 400,
    width: '92%',
    backgroundColor: COLOR.grey,
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: '5%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: '8%',
  },
  backButton: {
    height: 24,
    width: 24,
  },
  heartButton: {
    height: 24,
    width: 24,
  },
  image: {
    height: 137,
    width: 137,
    alignSelf: 'center',
    bottom:'15%'
  },
  detailsContainer: {
  height:500,
    backgroundColor: COLOR.white,
    // elevation: 10,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    bottom: '28%',
  },
  title: {
    fontSize: 24,
    color: COLOR.black,
    fontFamily: FONT.Urbanist_Bold,
    alignSelf: 'center',
    marginTop: '5%',
  },
  description: {
    fontSize: 16,
    color: COLOR.black,
    fontFamily: FONT.Urbanist_Medium,
    marginTop: '4%',
    marginLeft: '5%',
  },
  con: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginHorizontal:"5%"
  },
  priceText: {
    fontSize: 16,
    color: COLOR.black,
    fontFamily: FONT.Urbanist_SemiBold,
  },
  pointsContainer: {
    backgroundColor: COLOR.primary,
    padding: 5,
    borderRadius: 5,
  },
  pointsText: {
    fontSize: 10,
    color: COLOR.white,
    fontFamily: FONT.Urbanist_SemiBold,
  },
  container2: {
    height: 77,
    width: 335,
    backgroundColor: COLOR.grey,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginTop: '5%',
  },
  title2: {
    fontSize: 16,
    color: COLOR.black,
    fontFamily: FONT.Urbanist_Bold,
    marginLeft: '5%',
  },
  priceContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText2: {
    fontSize: 16,
    color: COLOR.black,
    fontFamily: FONT.Urbanist_SemiBold,
  },
  dotIcon2: {
    height: 16,
    width: 16,
    marginLeft: '10%',
  },
  flatListContainer: {
    paddingHorizontal: 16,
    marginTop:'5%'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    marginBottom: 16,
    backgroundColor: COLOR.grey, // Change the background color as needed
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemImage: {
    width: 36,
    height: 54,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  itemTitle: {
    fontSize: 14,
    fontFamily:FONT.Urbanist_Regular,
    color:COLOR.black
  },
  itemDescription: {
    fontSize: 14,
    fontFamily:FONT.Urbanist_Regular,
    color:COLOR.black,
    marginTop:5
  },
  addButton: {
    backgroundColor: COLOR.primary, // Change the background color as needed
    justifyContent: 'center',
    alignItems: 'center',
    height:31,
    width:68,
    borderRadius:5,
    marginRight:'5%'
  },
  addButtonLabel: {
    color: '#fff', // Change the text color as needed
    fontWeight: 'bold',
  },
});
