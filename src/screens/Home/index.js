import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,ScrollView,Modal,TextInput } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';

import HomeDelivery from '../../components/HomeDelivery';
import MapView, { Marker } from 'react-native-maps';
import Delivery from '../../components/Delivery';
import Button from '../../components/reuseables/Button';
import { useSelector } from 'react-redux';


const Home = ({ navigation }) => {
const thememode = useSelector((state)=>state.theme.mode);
  const [selectedButton, setSelectedButton] = useState(2);
const [first, setfirst] = useState(false)
  const handleButtonPress = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const [isVisible, setIsVisible] = useState(false);
  
  const openModal = () => {
    setIsVisible(true);
  };
  
  const closeModal = () => {
    setIsVisible(false);
  };

    const initialRegion = {
      latitude: 37.7749, 
      longitude: -122.4194, 
      latitudeDelta: 0.0922, 
      longitudeDelta: 0.0421,
    };


  return (
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
      <ScrollView>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.drawerIcon}>
          <Image style={[styles.drawerImage,{tintColor:thememode==='light' ? COLOR.black : COLOR.white}]} source={require('../../Assets/images/Home/Lines.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.addressContainer,{borderColor:thememode==='light' ? COLOR.grey_1:COLOR.darkprimary},{backgroundColor:thememode==='light'? COLOR.locationview : COLOR.darkprimary}]} onPress={openModal}>
          <Image style={[styles.addressIcon,{tintColor:thememode==='light'? COLOR.black : COLOR.white}]} source={require('../../Assets/images/Home/loc.png')} />
          <Text style={[styles.addressText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>No Address Selected</Text>
        </TouchableOpacity>

        <Image style={styles.logoImage} source={require('../../Assets/images/chunkychicken.png')} />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => handleButtonPress(1)}
          style={[styles.button, selectedButton === 1 && styles.selectedButton,{backgroundColor:thememode==='light' ? COLOR.grey: COLOR.darkprimary}]}
        >
          <Image style={styles.buttonImage} source={require('../../Assets/images/Home/kisspng-pizza.png')} />
          <Text style={[styles.buttonText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Delivery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleButtonPress(2)}
          style={[styles.button, selectedButton === 2 && styles.selectedButton,{backgroundColor:thememode==='light' ? COLOR.grey: COLOR.darkprimary}]}
        >
          <Image style={styles.buttonImage} source={require('../../Assets/images/Home/delivery.png')} />
          <Text style={[styles.buttonText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Pickup</Text>
        </TouchableOpacity>
      </View>

      {selectedButton === 1 && <HomeDelivery />}
      {selectedButton === 2 && <Delivery/>}

{/* {selectedButton === 2 && first ? <Pickup /> : selectedButton === 2 && !first && <Delivery onPress={() => setfirst(true)} />} */}


      <View style={{height:100}}/>
      </ScrollView>
      <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView,{backgroundColor:thememode==='light'?COLOR.white:COLOR.darkprimary}]}>
        <TouchableOpacity style={styles.ToucCross} onPress={closeModal}>
        <Image source={require('../../Assets/images/crossicon.png')} style={styles.imagemodal}/>
        </TouchableOpacity>
            <Text style={[styles.Cancel,{color:thememode==='light'?COLOR.black:COLOR.white}]}>
            Select Your Location for Delvery
            </Text>
           
          <TextInput style={[styles.Textinput,{backgroundColor:thememode==='light'?'#FAFAFA':COLOR.darkprimary},{color:thememode==='light'?COLOR.black:COLOR.white}]} placeholder="Search Your Location" placeholderTextColor={thememode==='light'?COLOR.black_2:COLOR.white}  />
         <TouchableOpacity style={styles.Fluettouch}>
         <Image source={require('../../Assets/images/fluent.png')} style={styles.fluenticon}/>
         </TouchableOpacity>
          <Image source={require('../../Assets/images/Mapicons.png')} style={styles.mapicon}/>

          <TouchableOpacity style={styles.store}>
          <Text style={styles.no}>
          No Store Found
          </Text>
          <Image source={require('../../Assets/images/Vector.png')} style={styles.vector}/>
          </TouchableOpacity>
          <View style={styles.locationview}>
          <MapView
           style={styles.map} initialRegion={initialRegion}>
          {/* Example marker */}
          <Marker
            coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
            title="Marker Title"
            description="Marker Description"
          />
        </MapView>
        </View>
          <View style={styles.ButtonsViewCon}>
                <Button title={'Confirm Location'} ButtonContainer={styles.Buttoncontainermodal} onPress={closeModal}/>

            </View>
        </View>
      </View>
    </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLOR.white
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5%',
    marginTop: '5%',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  drawerIcon: {},
  drawerImage: {
    height: 24,
    width: 24,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 38,
    width: 190,
    borderWidth: 0.5,
    borderColor: COLOR.grey_1,
    borderRadius: 5,
   
  },
  addressIcon: {
    height: 16,
    width: 12,
    marginLeft: '5%',
  },
  addressText: {
    fontSize: 12,
    fontFamily: FONT.Urbanist_Regular,
    color: COLOR.black,
    marginLeft: '5%',
  },
  logoImage: {
    height: 31,
    width: 55,
  },

  buttonRow: {
    flexDirection: 'row',
    alignSelf:'center',
    marginTop:"5%"
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    margin: 10,
    borderRadius: 10,
    height:54,
    width:140,
    backgroundColor:COLOR.grey
  },
  selectedButton: {
    borderWidth: 1,
    borderColor: COLOR.primary,
  },
  buttonImage: {
    height: 20,
    width: 20,
  },
  buttonText: {
    fontSize: 18,
    fontFamily:FONT.Urbanist_Bold,
    color:COLOR.black,
    marginLeft:'5%',
   
  },
  componentContainer: {
    marginTop: 20,
  },
  // modal style 
  centeredView: {
    flex: 1,
    justifyContent:'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingHorizontal:'5%',
    alignItems: 'center',
    elevation: 5,
    height:418,
    width:"100%",
  
  },
  imagemodal:{
  width:22,
  height:22,
  alignSelf:'center',
  justifyContent:'center',
  marginTop:3,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:14,
    color:COLOR.black_2,
    fontWeight:"400",
    fontFamily:FONT.Roboto_Medium,
   
  },
  modalText1: {
    marginBottom: 15,
    fontSize:14,
    color:COLOR.black_2,
    fontWeight:"400",
    fontFamily:FONT.Roboto_Medium,
    alignSelf:'flex-start'
   
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttonmodal: {
    borderRadius: 5,
    padding: 10,
    width: 100,
    alignItems: 'center',
  },
  
  buttonTextmodal: {
    color: 'white',
    fontWeight: 'bold',
  },
  ButtonCancelmodal: {
    height: 50,
    width: 150,
     backgroundColor: COLOR.white,
    alignSelf: 'flex-end'
  },
  Buttoncontainermodal: {
    height: 50,
    width:'100%',
    alignSelf: 'flex-end'
  },
  canceltextmodal: {
    color: COLOR.black,
    fontFamily: FONT.Roboto_Medium,
    fontSize: 16,
    fontWeight: '600',
  
  
  },
  Cancel:{
    color: COLOR.black,
    fontFamily: FONT.Urbanist_Bold,
    fontSize: 18,
    fontWeight: '600',
    marginBottom:"10%"
  },
  ButtonsViewCon: {
    width: "100%",
    marginTop: 10,
    justifyContent: 'space-between',
  
  
  },
  Textinput:{
    width:"100%",
    backgroundColor:'#FAFAFA',
    borderRadius:15,
    color:COLOR.black,
    borderWidth:1,
    borderColor:'#949494',
    paddingLeft:10
  },
  ToucCross:{
    width:28,height:28,
    alignSelf:"flex-end",
    backgroundColor:COLOR.primary,
  borderRadius:3,
  marginVertical:"5%"
  
  },
  // mapstyle
  map: {
    ...StyleSheet.absoluteFillObject,
    
  },
  overlay: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
    
    borderRadius: 10,
  },
  overlayText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationview:{
    width:"100%",
    height:150,
    borderRadius:20,
    marginVertical:"4%"
  },
  mapicon:{
    width:24,
    height:24,
    position:'absolute',
   top:180,
   zIndex:1,
   right:20
  },
  fluenticon:{
    width:24,
    height:24,
    alignSelf:'center'
   
  },
  Fluettouch:{
    width:30,
    height:30,
    borderRadius:30,
    position:'absolute',
   top:290,
   zIndex:1,
   right:20,
   backgroundColor:COLOR.white,
   alignSelf:'center',
   justifyContent:"center"
  },
  store:{
    width:120,
    height:30,
    position:'absolute',
   top:220,
   zIndex:1,
   right:100,
   backgroundColor:COLOR.primary,
   alignSelf:'center',
   justifyContent:"center"
  },
  no:{
    fontSize:14,
    fontWeight:'400',
    color:COLOR.white,
    fontFamily:FONT.Urbanist_Regular,
    alignSelf:'center'
  },
  vector:{
    position:"absolute",
    zIndex:1,
    width:35,
    height:18,
    top:30,
    right:40
  }
  });
  
 
export default Home;
