import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLOR, FONT, width } from '../../data/StyleGuides';
import { SCREEN } from '../../data/enums';
import Button from './Button';
import { useSelector } from 'react-redux';


const data = [
  {
    id: '1',
    title: 'Grilled Chicken',
    title2: 'Pasta',
    name: 'John Deo',
    name2: 'Clark',
    image: require('../../Assets/images/Swap/Grill.png'), // Replace with the actual image path
    image2: require('../../Assets/images/Swap/Pasta.png'), // Replace with the actual image path
    rating: '4.3',
    person1: require('../../Assets/images/Swap/p1.png'),
    person2: require('../../Assets/images/Swap/p2.png'),

  },

];



const dataReceve = [
  {
    id: '1',
    title: 'Grilled Chicken',
    title2: 'Pasta',
    name: 'John Deo',
    name2: 'Clark',
    image: require('../../Assets/images/Swap/Grill.png'), // Replace with the actual image path
    image2: require('../../Assets/images/Swap/Pasta.png'), // Replace with the actual image path
    rating: '4.3',
    person1: require('../../Assets/images/Swap/p1.png'),
    person2: require('../../Assets/images/Swap/p2.png'),

  },

];
const dataComp = [
  {
    id: '1',
    title: 'Grilled Chicken',
    title2: 'Pasta',
    name: 'John Deo',
    name2: 'Clark',
    imagegril: require('../../Assets/images/Swap/Grill.png'), // Replace with the actual image path
    image2: require('../../Assets/images/Swap/Pasta.png'), // Replace with the actual image path
    rating: '4.3',
    person1: require('../../Assets/images/Swap/p1.png'),
    person2: require('../../Assets/images/Swap/p2.png'),
    image: require('../../Assets/images/Lineimage.png'),
    days: 'Today'

  },
  {
    id: '2',
    title: 'Grilled Chicken',
    title2: 'Pasta',
    name: 'John Deo',
    name2: 'Clark',
    imagegril: require('../../Assets/images/Swap/Grill.png'), // Replace with the actual image path
    image2: require('../../Assets/images/Swap/Pasta.png'), // Replace with the actual image path
    rating: '4.3',
    person1: require('../../Assets/images/Swap/p1.png'),
    person2: require('../../Assets/images/Swap/p2.png'),
    image: require('../../Assets/images/Lineimage.png'),
    days: '5/7/23'

  },
  {
    id: '3',
    title: 'Grilled Chicken',
    title2: 'Pasta',
    name: 'John Deo',
    name2: 'Clark',
    imagegril: require('../../Assets/images/Swap/Grill.png'), // Replace with the actual image path
    image2: require('../../Assets/images/Swap/Pasta.png'), // Replace with the actual image path
    rating: '4.3',
    person1: require('../../Assets/images/Swap/p1.png'),
    person2: require('../../Assets/images/Swap/p2.png'),
    image: require('../../Assets/images/Lineimage.png'),
    days: '4/7/23'

  },

];
const SwapComponent = ({ }) => {
  const [selectedTab, setSelectedTab] = useState('everydayValue');
  const navigation = useNavigation()
  const thememode = useSelector((state) => state.theme.mode);
  const [swap, setswap] = useState(true)
  const showComponent = (tab) => {
    setSelectedTab(tab);
  };

  // Send data function
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(SCREEN.SingleItem)} style={[styles.itemContainer,{backgroundColor:thememode==='light'?COLOR.white :COLOR.darkprimary}]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: "5%", marginTop: '5%' }}>
        <View style={{}}>
          <Image style={{ height: 70, width: 70, alignSelf: 'center' }} source={item.image} />
          <Text style={[{ fontSize: 14, fontFamily: FONT.Roboto_Medium, color: COLOR.black, marginTop: '5%' },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '4%', }}>
            <Image style={{ height: 14, width: 14 }} source={item.person1} />
            <Text style={[{ fontSize: 10, fontFamily: FONT.Roboto_Medium, color: COLOR.black },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.name}</Text>
            <Image style={{ height: 9, width: 9 }} source={require('../../Assets/images/Swap/star.png')} />

            <Text style={[{ fontSize: 8, fontFamily: FONT.Roboto_Medium, color: COLOR.black },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.rating}</Text>

          </View>

        </View>
        <Image style={{ height: 24, width: 24 }} source={require('../../Assets/images/Swap/swap.png')} />
        <View style={{ width: '30%' }}>
          <Image style={{ height: 70, width: 70, alignSelf: 'center' }} source={item.image2} />
          <Text style={[{ fontSize: 14, fontFamily: FONT.Roboto_Medium, color: COLOR.black, marginTop: '5%', alignSelf: 'center' },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.title2}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '4%', width: 75 }}>
            <Image style={{ height: 14, width: 14 }} source={item.person2} />
            <Text style={[{ fontSize: 10, fontFamily: FONT.Roboto_Medium, color: COLOR.black },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.name2}</Text>
            <Image style={{ height: 9, width: 9 }} source={require('../../Assets/images/Swap/star.png')} />

            <Text style={[{ fontSize: 8, fontFamily: FONT.Roboto_Medium, color: COLOR.black },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.rating}</Text>

          </View>

        </View>
      </View>

    </TouchableOpacity>
  );

  // Received data fuction
  const renderItemRecevied = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(SCREEN.SingleItem)} style={[styles.itemContainerRe,{backgroundColor:thememode==='light'?COLOR.white :COLOR.darkprimary}]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: "5%", marginTop: '5%' }}>
        <View style={{}}>
          <Image style={{ height: 70, width: 70, alignSelf: 'center' }} source={item.image} />
          <Text style={[{ fontSize: 14, fontFamily: FONT.Roboto_Medium, color: COLOR.black, marginTop: '5%' },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '4%', }}>
            <Image style={{ height: 14, width: 14 }} source={item.person1} />
            <Text style={[{ fontSize: 10, fontFamily: FONT.Roboto_Medium, color: COLOR.black },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.name}</Text>
            <Image style={{ height: 9, width: 9 }} source={require('../../Assets/images/Swap/star.png')} />

            <Text style={[{ fontSize: 8, fontFamily: FONT.Roboto_Medium, color: COLOR.black },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.rating}</Text>

          </View>

        </View>
        <Image style={{ height: 24, width: 24 }} source={require('../../Assets/images/Swap/swap.png')} />
        <View style={{ width: '30%' }}>
          <Image style={{ height: 70, width: 70, alignSelf: 'center' }} source={item.image2} />
          <Text style={[{ fontSize: 14, fontFamily: FONT.Roboto_Medium, color: COLOR.black, marginTop: '5%', alignSelf: 'center' },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.title2}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '4%', width: 75 }}>
            <Image style={{ height: 14, width: 14 }} source={item.person2} />
            <Text style={[{ fontSize: 10, fontFamily: FONT.Roboto_Medium, color: COLOR.black },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.name2}</Text>
            <Image style={{ height: 9, width: 9 }} source={require('../../Assets/images/Swap/star.png')} />

            <Text style={[{ fontSize: 8, fontFamily: FONT.Roboto_Medium, color: COLOR.black },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.rating}</Text>

          </View>

        </View>


      </View>
      {swap ? <View style={styles.ButtonsView}>
        <Button title={'Cancel'} ButtonContainer={[styles.buttonContainercan,{backgroundColor:thememode==='light'?COLOR.white : COLOR.darkprimary},{ borderColor:thememode==='light'?COLOR.white : COLOR.primary}]} ButtonText={styles.buttontextcan} />
        <Button title={'Accept'} ButtonContainer={styles.buttoncontainer} onPress={() => setswap(false)} />
      </View> :
        <Button title={'Swap Complete'} ButtonContainer={styles.buttonContainerSwap} ButtonText={styles.buttontextswap} onPress={() => navigation.navigate(SCREEN.GrilledChicken)} />}
    </TouchableOpacity>

  );
  // Completed data
  const renderItemComp = ({ item }) => (
    <View>

      <View style={styles.Lineiamge}>
        <Text style={styles.orderid}>
          {item.days}
        </Text>
        <Image source={item.image} style={styles.line} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate(SCREEN.SingleItem)} style={[styles.itemContainerRe,{backgroundColor:thememode==='light'?COLOR.white :COLOR.darkprimary}]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: "5%", marginTop: '5%' }}>
          <View style={{}}>
            <Image style={{ height: 70, width: 70, alignSelf: 'center' }} source={item.imagegril} />
            <Text style={[{ fontSize: 14, fontFamily: FONT.Roboto_Medium, color: COLOR.black, marginTop: '5%' },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '4%', }}>
              <Image style={{ height: 14, width: 14 }} source={item.person1} />
              <Text style={[{ fontSize: 10, fontFamily: FONT.Roboto_Medium, color: COLOR.black },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.name}</Text>
              <Image style={{ height: 9, width: 9 }} source={require('../../Assets/images/Swap/star.png')} />

              <Text style={[{ fontSize: 8, fontFamily: FONT.Roboto_Medium, color: COLOR.black },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.rating}</Text>

            </View>

          </View>
          <Image style={{ height: 24, width: 24 }} source={require('../../Assets/images/Swap/swap.png')} />
          <View style={{ width: '30%' }}>
            <Image style={{ height: 70, width: 70, alignSelf: 'center' }} source={item.image2} />
            <Text style={[{ fontSize: 14, fontFamily: FONT.Roboto_Medium, color: COLOR.black, marginTop: '5%', alignSelf: 'center' },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.title2}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '4%', width: 75 }}>
              <Image style={{ height: 14, width: 14 }} source={item.person2} />
              <Text style={[{ fontSize: 10, fontFamily: FONT.Roboto_Medium, color: COLOR.black },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.name2}</Text>
              <Image style={{ height: 9, width: 9 }} source={require('../../Assets/images/Swap/star.png')} />

              <Text style={[{ fontSize: 8, fontFamily: FONT.Roboto_Medium, color: COLOR.black },{color:thememode==='light'?COLOR.black : COLOR.white}]}>{item.rating}</Text>

            </View>

          </View>


        </View>
        <View style={styles.ButtonsView}>
          <Button title={'Rate Meal'} ButtonContainer={[styles.buttonContainerComp,{backgroundColor:thememode==='light'?COLOR.white :COLOR.darkprimary}]} ButtonText={styles.buttontextComp} onPress={() => setIsVisible(true)} />

        </View>
      </TouchableOpacity>
    </View>
  );



  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };


  return (
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, selectedTab === 'everydayValue' && styles.selectedButton]}
          onPress={() => showComponent('everydayValue')}
        >
          <Text style={[styles.text, selectedTab === 'everydayValue' && styles.selectedText]}>Sent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, selectedTab === 'alaCarteCombos' && styles.selectedButton]}
          onPress={() => showComponent('alaCarteCombos')}
        >
          <Text style={[styles.text, selectedTab === 'alaCarteCombos' && styles.selectedText]}>Received</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, selectedTab === 'promotion' && styles.selectedButton]}
          onPress={() => showComponent('promotion')}
        >
          <Text style={[styles.text, selectedTab === 'promotion' && styles.selectedText]}>Completed</Text>
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
          data={dataReceve}
          renderItem={renderItemRecevied}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.itemcontainer}
        />}
        {selectedTab === 'promotion' &&

          <FlatList
            data={dataComp}
            renderItem={renderItemComp}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.itemcontainer}
          />}
      </View>


      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView,{backgroundColor:thememode==='light' ? COLOR.white : '#4A4A4A'}]}>
            <Text style={[styles.Cancel,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
              Rate Order
            </Text>
            <Image source={require('../../Assets/images/Lineimage.png')} style={styles.imagemodal} />
            <Text style={[styles.modalText,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Would you like to rate the order?</Text>
            <View style={styles.starView}>
              <Image source={require('../../Assets/images/star1.png')} style={{ width: 32, height: 32 }} />
              <Image source={require('../../Assets/images/star1.png')} style={{ width: 32, height: 32 }} />
              <Image source={require('../../Assets/images/star1.png')} style={{ width: 32, height: 32 }} />
              <Image source={require('../../Assets/images/star1.png')} style={{ width: 32, height: 32 }} />
              <Image source={require('../../Assets/images/star.png')} style={{ width: 32, height: 32 }} />
            </View>
            <Text style={[styles.modalText1,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
              Your experience
            </Text>
            <TextInput style={styles.Textinput} placeholder="type here" />
            <View style={styles.ButtonsView1}>
              <Button title={'Cancel'} ButtonContainer={[styles.ButtonCancelmodal,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.white}]} ButtonText={[styles.canceltextmodal,{color:thememode==='light' ? COLOR.white : COLOR.black}]} onPress={closeModal} />
              <Button title={'Submit'} ButtonContainer={styles.Buttoncontainermodal} onPress={closeModal} />

            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: "6%"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '3%',
    marginHorizontal: '7%',
    borderBottomWidth: 1,
    borderColor: COLOR.grey,
    height: 27

  },
  button: {
    alignItems: 'center',
    width: 100
  },
  selectedButton: {
    borderBottomWidth: 2,
    borderBottomColor: COLOR.primary,
  },
  component: {
  }, text: {
    fontSize: 14, fontFamily: FONT.Roboto_Regular, color: COLOR.grey_1
  },
  itemcontainer: {
    padding: 16,
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
    height: 138,
    width: '98%',
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: COLOR.white,
    elevation: 2,
    alignSelf: 'center',

  },
  itemContainerRe: {
    height: 205,
    width: '98%',
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: COLOR.white,
    elevation: 2,
    alignSelf: 'center',

  },
  image2: {
    width: 120,
    height: 120,
    marginRight: '3%'
  },
  textContainer: {
    flex: 1,
    padding: 8,
    marginLeft: "2%",
    marginTop: "2%"
  },
  title2: {
    fontSize: 14,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black
  },
  description: {
    fontSize: 8,
    fontFamily: FONT.Urbanist_Regular,
    color: COLOR.black,
    width: '95%'
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 8,
  }, customize: {
    fontSize: 14,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.primary,
    marginTop: '5%'
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
  ButtonsView: {
    flexDirection: "row",
    width: "90%",
    marginHorizontal: "5%",
    justifyContent: 'space-between',
    marginTop: '8%'
  },
  buttonContainercan: {
    width: '40%',
    height: 40,
    backgroundColor: COLOR.white,
   

  },
  buttontextcan: {
    color: COLOR.primary
  },
  buttoncontainer: {
    width: '40%',
    height: 40
  },
  buttonContainerComp: {
    height: 40,
    backgroundColor: COLOR.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR.primary,
    width: "100%"

  },
  buttonContainerSwap: {
    height: 40,
    backgroundColor: COLOR.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR.primary,
    width: "90%",
    marginHorizontal: "5%",
    marginTop: "7%"

  },
  buttontextComp: {
    color: COLOR.primary
  },
  buttontextswap: {
    color: COLOR.primary,
    fontWeight: "700"
  },
  Lineiamge: {
    width: "90%",
    marginHorizontal: '5%',
    flexDirection: 'row',
    height: 20,

  },
  line: {
    width: "85%",
    marginTop: 7,
    marginLeft: 7,
  },
  orderid: {
    color: COLOR.grey_8,
    fontFamily: FONT.Roboto_Regular,
    fontSize: 12,
    fontWeight: '400',

  },
  ///  modal style

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
    height: 320,
    width: "90%",
    marginHorizontal: "5%"
  },
  imagemodal: {
    width: "100%",
    marginVertical: "5%"
  },
  modalText: {
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
    width: '48%',
    backgroundColor: COLOR.white,
    alignSelf: 'flex-end'
  },
  Buttoncontainermodal: {
    height: 50,
    width: '48%',
    alignSelf: 'flex-end'
  },
  canceltextmodal: {
    color: COLOR.black,
    fontFamily: FONT.Roboto_Medium,
    fontSize: 16,
    fontWeight: '600',


  },
  Cancel: {
    color: COLOR.black,
    fontFamily: FONT.Roboto_Bold,
    fontSize: 16,
    fontWeight: '600',
  },
  ButtonsView1: {
    flexDirection: 'row',
    width: "100%",
    marginTop: 10,
    justifyContent: 'space-between',
    alignSelf:"center",
    marginTop:"3%"
  

  },
  Textinput: {
    width: "100%",
    backgroundColor: '#FAFAFA',
    borderRadius: 15,
    color: COLOR.black,
    paddingLeft:10,
    marginBottom:"2%"
  },
  starView: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  selectedText: {
    color: COLOR.primary
  }
});

export default SwapComponent;
