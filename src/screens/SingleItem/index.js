import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Animated, FlatList } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';
import { SCREEN } from '../../data/enums';
import Button from '../../components/reuseables/Button';
import BotttomHeight from '../../components/reuseables/BotttomHeight';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

export default function SingleItem() {
  const [heart, setheart] = useState()
  const navigation = useNavigation()
  const thememode = useSelector((state)=>state.theme.mode);
  const scrollY = useRef(new Animated.Value(0)).current;
  const imageSize = scrollY.interpolate({
    inputRange: [0, 200], 
    outputRange: [279, 100], 
    extrapolate: 'clamp',
  });
  const [data, setData] = useState([
    { id: '1', title: 'Pepsi Regular', description: '$50', imageUrl: require('../../Assets/images/pepsi.png'), plus: 0, add: true },
    { id: '2', title: '7up Regular', description: '$50', imageUrl: require('../../Assets/images/sprite.png'), plus: 0, add: true },
    { id: '3', title: 'Miranda Regular', description: '$50', imageUrl: require('../../Assets/images/fants.png'), plus: 0, add: true },
    { id: '4', title: 'Mineral Water', description: '$50', imageUrl: require('../../Assets/images/water.png'), plus: 0, add: true },
    // Add more items as needed
  ]);
  const [data1, setData1] = useState([
    { id: '1', title: 'Pepsi Regular', description: '$50', imageUrl: require('../../Assets/images/pepsi.png'), plus: 0, add: true },
    { id: '2', title: '7up Regular', description: '$50', imageUrl: require('../../Assets/images/sprite.png'), plus: 0, add: true },
    { id: '3', title: 'Miranda Regular', description: '$50', imageUrl: require('../../Assets/images/fants.png'), plus: 0, add: true },
    { id: '4', title: 'Mineral Water', description: '$50', imageUrl: require('../../Assets/images/water.png'), plus: 0, add: true },
    // Add more items as needed
  ]);
  

  const deleteItem = (itemId) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === itemId) {
          const newPlus = item.plus - 1;
          return {
            ...item,
            plus: newPlus,
            add: newPlus === 0 ? true : item.add,
          };
        }
        return item;
      })
    );
  };
  const deleteItem1 = (itemId) => {
    setData1((prevData) =>
      prevData.map((item) => {
        if (item.id === itemId) {
          const newPlus = item.plus - 1;
          return {
            ...item,
            plus: newPlus,
            add: newPlus === 0 ? true : item.add,
          };
        }
        return item;
      })
    );
  };

  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer,{backgroundColor:thememode==='light' ? COLOR.grey : COLOR.darkprimary}]}>
      <Image style={styles.itemImage} source={item.imageUrl} />
      <View style={styles.itemDetails}>
        <Text style={[styles.itemTitle,{color:thememode==='light'? COLOR.black : COLOR.white}]}>{item.title}</Text>
        <Text style={[styles.itemDescription,{color:thememode==='light'? COLOR.black : COLOR.white}]}>{item.description}</Text>
      </View>
      {item.add ? (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setData((prevData) =>
              prevData.map((i) =>
                i.id === item.id ? { ...i, plus: i.plus + 1 ,add:false } : i
              )
            );
          }}
        >
          <Text style={styles.addButtonLabel}>Add</Text>
        </TouchableOpacity>
      ) : (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <Image
              source={require('../../Assets/images/Cart/delete.png')}
              style={[styles.deletiamge,{tintColor:thememode==='light'? COLOR.black: COLOR.white}]}
            />
          </TouchableOpacity>
          <Text style={[styles.one,{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.plus}</Text>
          <TouchableOpacity
            style={styles.touchplus}
            onPress={() => {
              setData((prevData) =>
                prevData.map((i) =>
                  i.id === item.id ? { ...i, plus: i.plus + 1 } : i
                )
              );
            }}
          >
            <Text style={[styles.Plus,{color:thememode==='light'?COLOR.black : COLOR.white}]}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  const renderItem1 = ({ item }) => (
    <View style={[styles.itemContainer,{backgroundColor:thememode==='light' ? COLOR.grey : COLOR.darkprimary}]}>
      <Image style={styles.itemImage} source={item.imageUrl} />
      <View style={styles.itemDetails}>
        <Text style={[styles.itemTitle,{color:thememode==='light'? COLOR.black : COLOR.white}]}>{item.title}</Text>
        <Text style={[styles.itemDescription,{color:thememode==='light'? COLOR.black : COLOR.white}]}>{item.description}</Text>
      </View>
      {item.add ? (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setData1((prevData) =>
              prevData.map((i) =>
                i.id === item.id ? { ...i, plus: i.plus + 1 ,add:false } : i
              )
            );
          }}
        >
          <Text style={styles.addButtonLabel}>Add</Text>
        </TouchableOpacity>
      ) : (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => deleteItem1(item.id)}>
            <Image
              source={require('../../Assets/images/Cart/delete.png')}
              style={styles.deletiamge}
            />
          </TouchableOpacity>
          <Text style={styles.one}>{item.plus}</Text>
          <TouchableOpacity
            style={styles.touchplus}
            onPress={() => {
              setData1((prevData) =>
                prevData.map((i) =>
                  i.id === item.id ? { ...i, plus: i.plus + 1 } : i
                )
              );
            }}
          >
            <Text style={styles.Plus}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  const toogleHeart = () => {
    setheart(!heart)
  }

  return (
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={[styles.backButton,{tintColor:thememode==='light' ? COLOR.black : COLOR.white}]} source={require('../../Assets/icons/blackback.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toogleHeart}>
          <Image style={[styles.heartButton,{tintColor:!heart&&thememode==='light' ? COLOR.black : COLOR.primary}]} source={heart ? require('../../Assets/icons/redheart.png') : require('../../Assets/icons/blackheart.png')} />
        </TouchableOpacity>
      </View>
      <View style={[styles.cardContainer,{backgroundColor:thememode==='light' ? COLOR.grey : COLOR.black}]}>

        <Animated.Image
          resizeMode='contain'
          style={[styles.image, { height: imageSize, width: imageSize }]}
          source={require('../../Assets/images/Home/deal2.png')}
        />
      </View>
      <ScrollView

        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
        scrollEventThrottle={16}
        style={{ flex: 1 }}


      >
        <View style={[styles.detailsContainer,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
          <Text style={[styles.title,{color:thememode==='light'? COLOR.black : COLOR.white}]}>Krunch Burger</Text>
          <Text style={[styles.description,{color:thememode==='light'? COLOR.black : COLOR.white}]}>
            Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun
          </Text>
          <View style={styles.con}>
            <Text style={[styles.priceText,{color:thememode==='light'? COLOR.black : COLOR.white}]}>Choose an option</Text>

            <View style={styles.pointsContainer}>
              <Text style={[styles.pointsText,{color:thememode==='light'? COLOR.black : COLOR.white}]}>30 points Reward</Text>
            </View>

          </View>
          <View style={[styles.container2,,{backgroundColor:thememode==='light'? COLOR.grey : COLOR.darkprimary}]}>
            <Text style={[styles.title2,{color:thememode==='light'? COLOR.black : COLOR.white}]}>Krunch Burger</Text>
            <View style={styles.priceContainer2}>
              <Text style={[styles.priceText2,,{color:thememode==='light'? COLOR.black : COLOR.white}]}>$150</Text>
              <Image style={styles.dotIcon2} source={require('../../Assets/icons/dot.png')} />
            </View>
          </View>

          <View style={styles.con}>
            <Text style={[styles.priceText,{color:thememode==='light'? COLOR.black : COLOR.white}]}>Add a soft drink</Text>
            <Text style={[styles.priceText,{color:thememode==='light'? COLOR.black : COLOR.white}]}>Optional</Text>
          </View>
          <View>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              contentContainerStyle={styles.flatListContainer}
            />
            <View style={styles.con}>
              <Text style={[styles.priceText,{color:thememode==='light'? COLOR.black : COLOR.white}]}>Add Ons</Text>
              <Text style={[styles.priceText,{color:thememode==='light'? COLOR.black : COLOR.white}]}>Optional</Text>
            </View>
            <FlatList
            data={data1}
            keyExtractor={(item) => item.id}
            renderItem={renderItem1}
            contentContainerStyle={styles.flatListContainer}
          />
            <Button onPress={() => navigation.navigate(SCREEN.CheckoutCart)} title={'Next'} />
            <View style={{ height: 90 }} />
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
    height: 423,
    width: '92%',
    backgroundColor: COLOR.grey,
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: '5%',
    position: 'absolute',
    zIndex: -1
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '10%',
    marginTop: '10%',
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
    height: 279,
    width: 279,
    alignSelf: 'center',
    bottom: '2%'
  },
  detailsContainer: {
    backgroundColor: COLOR.white,
    // elevation: 10,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    flex: 1,
    marginTop: '100%',
    zIndex: 2,
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
    marginHorizontal: "5%"
  },
  priceText: {
    fontSize: 16,
    color: COLOR.black,
    fontFamily: FONT.Urbanist_SemiBold,
  },
  pointsContainer: {
    backgroundColor: '#D56E65',
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
  container3: {
    height: 20,
    width: 335,
    backgroundColor: COLOR.grey,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginTop: '5%',
  },
  flatListContainer: {
    paddingHorizontal: 16,
    marginTop: '5%'
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
    fontFamily: FONT.Urbanist_Regular,
    color: COLOR.black
  },
  itemDescription: {
    fontSize: 14,
    fontFamily: FONT.Urbanist_Regular,
    color: COLOR.black,
    marginTop: 5
  },
  addButton: {
    backgroundColor: COLOR.primary, // Change the background color as needed
    justifyContent: 'center',
    alignItems: 'center',
    height: 31,
    width: 68,
    borderRadius: 5,
    marginRight: '5%'
  },
  addButtonLabel: {
    color: '#fff', // Change the text color as needed
    fontWeight: 'bold',
  },
  deletiamge:{
    width:24,
    height:24,
    marginRight:8,
    tintColor:COLOR.black,
    marginTop:5,
  },
  one:{
    color:COLOR.black,
  marginHorizontal:12,
  marginTop:5
  },
  Plus:{
    fontSize:18,
    color:COLOR.black,
    marginBottom:5
  },
  touchplus:{
    marginRight:12,
    marginLeft:12
  }
});
