import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';
import BotttomHeight from '../../components/reuseables/BotttomHeight';
import { SCREEN } from '../../data/enums';
import Button from '../../components/reuseables/Button';
import MapView, { Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../../redux/themeSlice'

const DrawerContent = ({ navigation }) => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);

  const handleThemeChange = (newTheme) => {
    dispatch(setTheme(newTheme));
  };
  const [isVisible, setIsVisible] = useState(false);
  const [nit, setnit] = useState(false)
  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  const [isVisible1, setIsVisible1] = useState(false);

  const openModal1 = () => {
    setIsVisible1(true);
  };

  const closeModal1 = () => {
    setIsVisible1(false);
  };
  const initialRegion = {
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };


  return (
    <View style={[styles.container, { backgroundColor: themeMode === 'light' ? COLOR.primary : COLOR.black }]}>
      <ScrollView>
        <View style={styles.toggleVeiw}>
          <TouchableOpacity
            style={[styles.daytouch, { backgroundColor: themeMode === 'light'? COLOR.primary: COLOR.black }]}
            onPress={() => { handleThemeChange('light'), setnit(!nit) }}
          >
            <Text style={styles.Day}>Day</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.daytouch1, { backgroundColor: themeMode === 'dark' ? COLOR.primary : COLOR.black }]}
            onPress={() => { handleThemeChange('dark'), setnit(!nit) }}
          >
            <Text style={styles.Day1}>Night</Text>
          </TouchableOpacity>
        </View>
        <Image style={styles.profileImage} source={require('../../Assets/images/User.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Clark Luis</Text>
          <Text style={styles.email}>clark_luis113@gmail.com</Text>
          <Image style={styles.line} source={require('../../Assets/images/Line.png')} />
          <TouchableOpacity style={styles.favoriteContainer} onPress={() => navigation.navigate(SCREEN.SwapMeal)}>
            <Image resizeMode='contain' style={styles.heartIcon} source={require('../../Assets/images/SwapFood.png')} />
            <Text style={styles.favoriteText}>Swap Food</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(SCREEN.Favourites)} style={styles.favoriteContainer}>
            <Image resizeMode='contain' style={styles.heartIcon} source={require('../../Assets/icons/heart.png')} />
            <Text style={styles.favoriteText}>My Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(SCREEN.AddAddress)} style={styles.favoriteContainer}>
            <Image resizeMode='contain' style={styles.heartIcon} source={require('../../Assets/icons/loc.png')} />
            <Text style={styles.favoriteText}>My Address</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate(SCREEN.PaymentMethod)} style={styles.favoriteContainer}>
            <Image resizeMode='contain' style={styles.heartIcon} source={require('../../Assets/icons/Payment.png')} />
            <Text style={styles.favoriteText}>Payment Method</Text>
          </TouchableOpacity>
          

          <TouchableOpacity style={styles.favoriteContainer} onPress={() => navigation.navigate(SCREEN.MyOrders)}>
            <Image resizeMode='contain' style={styles.heartIcon} source={require('../../Assets/icons/orders.png')} />
            <Text style={styles.favoriteText}>My Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.favoriteContainer} onPress={openModal1}>
            <Image resizeMode='contain' style={styles.heartIcon} source={require('../../Assets/icons/loc.png')} />
            <Text style={styles.favoriteText}>Store Locator</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.favoriteContainer} onPress={() => navigation.navigate(SCREEN.OrderDetails)}>
            <Image resizeMode='contain' style={styles.heartIcon} source={require('../../Assets/icons/trackorder.png')} />
            <Text style={styles.favoriteText}>Track Order</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.favoriteContainer} onPress={() => navigation.navigate(SCREEN.Reviews)}>
            <Image resizeMode='contain' style={styles.heartIcon} source={require('../../Assets/icons/reviews.png')} />
            <Text style={styles.favoriteText}>Reviews</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.favoriteContainer} onPress={() => navigation.navigate(SCREEN.HomePick)}>
            <Image resizeMode='contain' style={styles.heartIcon} source={require('../../Assets/icons/ep_menu.png')} />
            <Text style={styles.favoriteText}>Explore Menu</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate(SCREEN.About)} style={styles.favoriteContainer}>
            <Image resizeMode='contain' style={styles.heartIcon} source={require('../../Assets/icons/info.png')} />
            <Text style={styles.favoriteText}>About Us</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate(SCREEN.Contact)} style={styles.favoriteContainer}>
            <Image resizeMode='contain' style={styles.heartIcon} source={require('../../Assets/icons/reviews.png')} />
            <Text style={styles.favoriteText}>Contact Us</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate(SCREEN.Help)} style={styles.favoriteContainer}>
          <Image resizeMode='contain' style={styles.heartIcon1} source={require('../../Assets/images/FQs.png')} />
          <Text style={styles.favoriteText}>FAQs</Text>
        </TouchableOpacity>

        </View>

        <TouchableOpacity onPress={openModal} style={styles.logoutButton}>
          <Image style={styles.logoutIcon} source={require('../../Assets/icons/logout.png')} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
        <View style={{ height: 100 }} />
      </ScrollView>
      <Modal
        animationType='fade'
        transparent={true}
        visible={isVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { backgroundColor: themeMode === 'light' ? COLOR.white : '#303030' }]}>
            <Text style={styles.Cancel}>
              Log out
            </Text>
            <Image source={require('../../Assets/images/Lineimage.png')} style={styles.imagemodal} />
            <Text style={[styles.modalText, { color: themeMode === 'light' ? COLOR.black : COLOR.white }]}>You are attempting to log out.</Text>


            <View style={styles.ButtonsViewLogout}>
              <Button title={'Cancel'} ButtonContainer={styles.ButtonCancelmodal} ButtonText={styles.canceltextmodal} onPress={closeModal} />
              <Button title={'Logout'} ButtonContainer={styles.Buttoncontainer} onPress={() => navigation.navigate(SCREEN.Signin)} />

            </View>
          </View>
        </View>
      </Modal>


      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible1}
        onRequestClose={closeModal1}
      >
        <View style={styles.centeredView1}>
          <View style={[styles.modalView1, { backgroundColor: themeMode === 'light' ? COLOR.white : COLOR.black }]}>
            <TouchableOpacity style={styles.ToucCross1} onPress={closeModal1}>
              <Image source={require('../../Assets/images/crossicon.png')} style={styles.imagemodal1} />
            </TouchableOpacity>
            <Text style={[styles.Cancel1, { color: themeMode === 'light' ? COLOR.black : COLOR.white }]}>
              Select Your Location for Delvery
            </Text>

            <TextInput style={styles.Textinput1} placeholder="Search Your Location" />
            <TouchableOpacity style={styles.Fluettouch}>
              <Image source={require('../../Assets/images/fluent.png')} style={styles.fluenticon} />
            </TouchableOpacity>
            <Image source={require('../../Assets/images/Mapicons.png')} style={styles.mapicon} />

            <TouchableOpacity style={styles.store}>
              <Text style={styles.no}>
                No Store Found
              </Text>
              <Image source={require('../../Assets/images/Vector.png')} style={styles.vector} />
            </TouchableOpacity>
            <View style={styles.locationview}>
              <MapView style={styles.map} initialRegion={initialRegion}>
                {/* Example marker */}
                <Marker
                  coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
                  title="Marker Title"
                  description="Marker Description"
                />
              </MapView>
            </View>
            <View style={styles.ButtonsView1}>
              <Button title={'Confirm Location'} ButtonContainer={styles.Buttoncontainermodal1} onPress={closeModal1} />

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
    backgroundColor: COLOR.primary,
  },
  profileImage: {
    height: 140,
    width: 140,
    margin: '7%',
  },
  textContainer: {
    marginLeft: '8%',
  },
  name: {
    fontSize: 16,
    fontFamily: FONT.Urbanist_Bold,
    color: COLOR.white,
  },
  email: {
    fontSize: 12,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.white,
    marginTop: '1%',
  },
  line: {
    height: 1,
    width: '90%',
    marginTop: '10%',
  },
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '8%',
  },
  heartIcon: {
    height: 24,
    width: 24,
  },
  heartIcon1: {
    height: 24,
    width: 24,
    tintColor:COLOR.white
  },
  favoriteText: {
    fontSize: 15,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.white,
    marginLeft: '8%',
  },
  logoutButton: {
    height: 44,
    width: 124,
    backgroundColor: COLOR.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: '8%',
    marginTop: '20%',
  },
  logoutIcon: {
    height: 24,
    width: 24,
    marginLeft: '10%',
  },
  logoutText: {
    fontFamily: FONT.Roboto_Medium,
    fontSize: 14,
    color: COLOR.primary,
    marginLeft: '5%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    height: 190,
    width: "90%",
    marginHorizontal: "5%"
  },
  imagemodal: {
    width: "110%",
    marginVertical: "5%",
    height: 0.6,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 14,
    color: COLOR.black_2,
    fontWeight: "400",
    fontFamily: FONT.Roboto_Regular,

  },
  modalText1: {
    marginBottom: 15,
    fontSize: 14,
    color: COLOR.black_2,
    fontWeight: "400",
    fontFamily: FONT.Roboto_Medium,
    alignSelf: 'flex-start'

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    borderRadius: 5,
    padding: 10,
    width: 100,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
ButtonCancelmodal: {
    height: 50,
    width: 135,
    backgroundColor: COLOR.white,
    alignSelf: 'flex-end',
    marginLeft:'5%'
  },
  Buttoncontainermodal: {
    height: 50,
    width: 150,
    alignSelf: 'flex-end'
  },
  canceltextmodal: {
    color: COLOR.black,
    fontFamily: FONT.Roboto_Medium,
    fontSize: 16,
    fontWeight: '600',


  },
  Cancel: {
    color: COLOR.primary,
    fontFamily: FONT.Roboto_Bold,
    fontSize: 16,
    fontWeight: '600',
  },
  ButtonsViewLogout: {
    flexDirection: 'row',
    width: "100%",
    marginTop: 20,
    justifyContent: 'space-between',
    marginRight: '10%'

  },
  Textinput: {
    width: "100%",
    backgroundColor: '#FAFAFA',
    borderRadius: 15,
    color: COLOR.black,
    paddingLeft: "5%",
  },
  starView: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  Buttoncontainer: {
    height: 50,
    width: 140,
    marginLeft:"5%"
  },
  toggleVeiw: {
    width: 88,
    height: 30,
    borderWidth: 1,
    borderColor: COLOR.white,
    flexDirection: "row",
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginRight: "5%",
    justifyContent: 'space-around',
    backgroundColor: COLOR.black

  },
  Day: {
    fontSize: 12,
    color: COLOR.white,
    textAlignVertical: 'center'
  },
  Day1: {
    fontSize: 12,
    color: COLOR.white,
    textAlignVertical: 'center',
    textAlign: "center",
    marginRight: "7%"
  },
  daytouch: {
    backgroundColor: COLOR.primary,
    width: "42%",
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: "4%",
    marginRight: "13%",

  },
  daytouch1: {
    backgroundColor: COLOR.primary,
    width: "42%",
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: "4%",
  },
  //\\\\\\\\\\\\\\\\\\ modal1 style 
  centeredView1: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView1: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%',
    alignItems: 'center',
    elevation: 5,
    height: 418,
    width: "100%",

  },
  imagemodal1: {
    width: 22,
    height: 22,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  modalText1: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 14,
    color: COLOR.black_2,
    fontWeight: "400",
    fontFamily: FONT.Roboto_Medium,

  },
  modalText1: {
    marginBottom: 15,
    fontSize: 14,
    color: COLOR.black_2,
    fontWeight: "400",
    fontFamily: FONT.Roboto_Medium,
    alignSelf: 'flex-start'

  },
  buttonContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button1: {
    borderRadius: 5,
    padding: 10,
    width: 100,
    alignItems: 'center',
  },

  buttonText1: {
    color: 'white',
    fontWeight: 'bold',
  },
  ButtonCancelmodal1: {
    height: 50,
    width: 150,
    backgroundColor: COLOR.white,
    alignSelf: 'flex-end'
  },
  Buttoncontainermodal1: {
    height: 50,
    width: '100%',
    alignSelf: 'flex-end'
  },
  canceltextmodal1: {
    color: COLOR.black,
    fontFamily: FONT.Roboto_Medium,
    fontSize: 16,
    fontWeight: '600',


  },
  Cancel1: {
    color: COLOR.black,
    fontFamily: FONT.Urbanist_Bold,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: "10%"
  },
  ButtonsView1: {
    width: "100%",
    marginTop: 10,
    justifyContent: 'space-between',


  },
  Textinput1: {
    width: "100%",
    backgroundColor: '#FAFAFA',
    borderRadius: 15,
    color: COLOR.black,
    borderWidth: 1,
    borderColor: '#949494',
    paddingLeft: "5%"

  },
  ToucCross1: {
    width: 28, height: 28,
    alignSelf: "flex-end",
    backgroundColor: COLOR.primary,
    borderRadius: 3,
    marginVertical: "5%"

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
  locationview: {
    width: "100%",
    height: 150,
    borderRadius: 20,
    marginVertical: "4%"
  },
  mapicon: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 180,
    zIndex: 1,
    right: 20
  },
  fluenticon: {
    width: 24,
    height: 24,
    alignSelf: 'center'

  },
  Fluettouch: {
    width: 30,
    height: 30,
    borderRadius: 30,
    position: 'absolute',
    top: 290,
    zIndex: 1,
    right: 20,
    backgroundColor: COLOR.white,
    alignSelf: 'center',
    justifyContent: "center"
  },
  store: {
    width: 120,
    height: 30,
    position: 'absolute',
    top: 220,
    zIndex: 1,
    right: 100,
    backgroundColor: COLOR.primary,
    alignSelf: 'center',
    justifyContent: "center"
  },
  no: {
    fontSize: 14,
    fontWeight: '400',
    color: COLOR.white,
    fontFamily: FONT.Urbanist_Regular,
    alignSelf: 'center'
  },
  vector: {
    position: "absolute",
    zIndex: 1,
    width: 35,
    height: 18,
    top: 30,
    right: 40
  }
});

export default DrawerContent;
