import React ,{useEffect,useRef}from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet,FlatList,ScrollView, TextInput } from 'react-native';
import { COLOR, FONT } from '../data/StyleGuides';
import BotttomHeight from './reuseables/BotttomHeight';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import MapCheckbox from './reuseables/MapCheckbox';
import Button from './reuseables/Button';
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from '../data/enums';
import { useSelector } from 'react-redux';
const data = [
  { id: '1', title: 'Krunch Burger', image: require('../Assets/images/Home/deal2.png') ,price:'$150'},
  { id: '2', title: 'Mighty Zinger', image: require('../Assets/images/Home/deal5.png') ,price:'$250'},
  { id: '3', title: 'Mighty Zinger', image: require('../Assets/images/Home/deal5.png') ,price:'$250' },
  // Add more items as needed
];

const data2 = [
  { id: '1', title: 'Crispy Duo Box',desc:'Turn up the tun with 5 pcs hot&Crispy chicken + T large........', image: require('../Assets/images/Home/deal2.png'),price:'$250' },
  { id: '2', title: 'Krunch Burger',desc:'Turn up the tun with 5 pcs hot&Crispy chicken + T large........', image: require('../Assets/images/Home/deal2.png'),price:'$250' },
  { id: '3', title: 'Krunch Burger',desc:'Turn up the tun with 5 pcs hot&Crispy chicken + T large........', image: require('../Assets/images/Home/deal2.png'),price:'$250' },

  // Add more items as needed
];


const renderItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemTitle}>{item.title}</Text>
    <View style={styles.priceTagContainer}>
    <Text style={styles.priceTagText}>{item.price}</Text>
  </View>
    <Image resizeMode='contain' style={styles.itemImage} source={item.image} />
  </View>
);

const renderItem2 = ({ item }) => (
  <View style={styles.itemContainer2}>
    <View style={styles.itemContent2}>
      <Image resizeMode='contain' style={styles.itemImage2} source={item.image} />
      <View style={styles.textContainer2}>
        <Text style={styles.itemTitle2}>{item.title}</Text>
        <Text style={styles.itemDesc2}>{item.desc}</Text>
      </View>
    </View>
    <View style={styles.priceContainer2}>
      <Text style={styles.itemPrice2}>{item.price}</Text>
      <TouchableOpacity style={styles.viewButton2}>
        <Text style={styles.viewButtonText2}>View</Text>
      </TouchableOpacity>
    </View>
  </View>
);



export default function HomeDelivery() {
const navigation= useNavigation();
const thememode= useSelector((state)=>state.theme.mode);
  const mapRef = useRef(null);
  const markerLocation = { latitude: 37.78825, longitude: -122.4324 };

  useEffect(() => {
    // Center the map on markerLocation when the component mounts
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        ...markerLocation,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>

      <Text style={[styles.headerText,{color:thememode==='light' ? COLOR.black:COLOR.white}]}>What’s New</Text>
      <ImageBackground style={styles.imageBackground} source={require('../Assets/images/Home/Rectangle.png')}>
        <TouchableOpacity style={styles.reorderButton}>
          <Text style={styles.reorderButtonText}>REORDER</Text>
        </TouchableOpacity>
      </ImageBackground>
     <Text style={[{fontSize:20,fontFamily:FONT.Urbanist_SemiBold,color:COLOR.black,alignSelf:"center",marginTop:"5%"},{color:thememode==='light' ? COLOR.black:COLOR.white}]}>Select Your Location for Delvery</Text>
     <TextInput placeholderTextColor={COLOR.grey_1} placeholder='Search Your Location' style={{height:50,width:'90%',borderWidth:1,alignSelf:'center',marginTop:'5%',borderRadius:10,borderColor:COLOR.grey_1,paddingLeft:20,fontFamily:FONT.Urbanist_Regular,fontSize:16,color:'black'}}/>
     <View style={{ height: 161, marginHorizontal: '5%', marginTop: '5%' }}>
      <MapView
        ref={mapRef}
        showsUserLocation
        showsMyLocationButton
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Marker */}
        <Marker coordinate={markerLocation} title="Marker Title" description="Marker Description" >
          <Image resizeMode='contain' style={{height:34,width:100}} source={require('../Assets/icons/noStore.png')}/>
        </Marker>
      </MapView>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',marginLeft:'5%',marginTop:'2%'}}>
<Image style={{height:24,width:24}} source={require('../Assets/icons/redlocation.png')}/>
<Text style={[{fontSize:16,fontFamily:FONT.Urbanist_Regular,color:COLOR.grey_1,marginLeft:'1%'},{color:thememode==='light' ? COLOR.grey_1: COLOR.white}]}>Raisanwalaa, Okara , punjab</Text>
    </View>
    <MapCheckbox/>

    <Button marginTop={'5%'} title={'Confirm Location'} onPress={()=>navigation.navigate(SCREEN.DrawerNavigation)}/>
    <BotttomHeight/>
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 16,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
    marginLeft: '5%',
    marginTop: '2%',
  },
  imageBackground: {
    height: 135,
    width: '95%',
    alignSelf: 'center',
    marginLeft: '5%',
    marginTop: '2%',
  },
  reorderButton: {
    height: 31,
    backgroundColor: COLOR.primary,
    width: '95%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reorderButtonText: {
    fontSize: 16,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.white,
  },
  menuText: {
    fontSize: 16,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
  },
  viewAllText: {
    fontSize: 12,
    fontFamily: FONT.Roboto_Regular,
    color: COLOR.black,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginHorizontal: '4%',
    marginTop: '5%',
  },
  categoryBox: {
    height: 181,
    width: 107,
    backgroundColor: COLOR.grey,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 11,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
    marginTop: '10%',
    marginLeft: '8%',
  },
  categoryImage: {
    height: 53,
    width: 84,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 15,
  },
  categoryBoxWithMargin: {
    marginLeft: '2%',
  },
  categoryBoxSmall: {
    height: 87,
    width: 107,
    backgroundColor: COLOR.grey,
    borderRadius: 10,
  },
  categoryImagesmall: {
    height: 42,
    width: 66,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 15,
  },BestText:{
    fontSize: 16,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
    marginLeft:'5%',
    marginTop:'4%'
  },
  itemContainer: {
    height: 165,
    width: 140,
    backgroundColor: '#ececec',
    borderRadius: 10,
    alignItems: 'center',
    marginLeft:15,
    marginTop:15,
    marginRight:10
  },
  itemImage: {
    height: 102,
    width: 102,
    position:'absolute',
    bottom:5
  },
  itemTitle: {
    fontSize: 16,
 fontFamily:FONT.Urbanist_SemiBold,
 color:COLOR.black,
 marginTop:'8%'
  },

  itemContainer2: {
    height: 84,
    width: 250,
    backgroundColor: COLOR.grey,
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 15,
    marginRight: 10,
  },
  itemContent2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5%',
    marginTop: '2%',
  },
  itemImage2: {
    height: 54,
    width: 66,
  },
  textContainer2: {
    marginLeft: '3%',
  },
  itemTitle2: {
    fontSize: 12,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.black,
  },
  itemDesc2: {
    fontSize: 10,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.black,
    width: '60%',
  },
  priceContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5%',
    marginHorizontal: '30%',
    alignSelf: 'flex-end',
    left: 48,
    marginTop: '2%',
  },
  itemPrice2: {
    fontSize: 10,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.black,
    width: '60%',
  },
  viewButton2: {
    height: 16,
    width: 42,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLOR.primary,
    borderRadius: 3,
  },
  viewButtonText2: {
    fontSize: 10,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.primary,
  },
  priceTagContainer: {
    height: 20,
    width: 52,
    backgroundColor: COLOR.primary,
    position: 'absolute',
    right: 0,
    top: 40,
  },
  priceTagText: {
    fontSize: 14,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.white,
    marginLeft: '8%',
  },
});