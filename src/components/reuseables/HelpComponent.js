import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLOR, FONT, width } from '../../data/StyleGuides';
import { SCREEN } from '../../data/enums';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from './Button';
import CompleteOrder from './CompleteOrder';
import CancelOrder from './CancelOrder';
import FaqComponent from './FaqComponent';
import ContactComponent from './ContactComponent';


const data = [
    {
        orderid: 'Order ID',
        idno: '#123456',
        date: '07/07/2023 - 12:30 AM',
        total: 'Total',
        price: "$70",

    },

];



const HelpComponent = ({ }) => {
    const [selectedTab, setSelectedTab] = useState('alaCarteCombos');
    const navigation = useNavigation()
    const showComponent = (tab) => {
        setSelectedTab(tab);
    };


    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.orderView}>
                <Text style={styles.orderid}>
                    {item.orderid}
                </Text>
                <Text style={styles.idno}>
                    {item.idno}
                </Text>
                <Text style={styles.orderid}>
                    {item.date}
                </Text>
            </View>
            <View style={styles.orderView}>
                <Text style={styles.total}>
                    {item.total}
                </Text>
                <Text style={styles.price}>
                    {item.price}
                </Text>
               
            </View>
            <View style={styles.ButtonsView}>
               <Button title={'Cancel Order'} ButtonContainer={styles.ButtonCancel} ButtonText={styles.canceltext} />
               <Button title={'View Details'} ButtonContainer={styles.Buttoncontainer} onPress={()=>navigation.navigate(SCREEN.OrderDetails)}/>
               
            </View>


        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
           
                <TouchableOpacity
                    style={[styles.button, selectedTab === 'alaCarteCombos' && styles.selectedButton]}
                    onPress={() => showComponent('alaCarteCombos')}
                >
                    <Text style={[styles.text,selectedTab === 'alaCarteCombos' && styles.selectedText]}>FAQs</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedTab === 'promotion' && styles.selectedButton]}
                    onPress={() => showComponent('promotion')}
                >
                    <Text style={[styles.text,selectedTab === 'promotion' && styles.selectedText]}>Contact us</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.component}>
               
                {selectedTab === 'alaCarteCombos' && 

<View>
    <FaqComponent/>
             </View>
                }
                {selectedTab === 'promotion' &&
                
                <View>
                  <ContactComponent/>
                </View>
                }


            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        width: 160
    },
    selectedButton: {
        borderBottomWidth: 2,
        borderBottomColor: COLOR.primary,
    },
    component: {
    }, text: {
        fontSize: 14, fontFamily: FONT.Roboto_Medium, color: COLOR.grey_1
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
    orderView: {
        flexDirection: 'row',
        width: "90%",
        marginHorizontal: "5%",
        marginTop: 10,
    },
    orderid: {
        color: COLOR.grey_8,
        fontFamily: FONT.Roboto_Regular,
        fontSize: 12,
        fontWeight: '400',

    },
    idno:{
        color: COLOR.black_2,
        fontFamily: FONT.Roboto_Regular,
        fontSize: 12,
        fontWeight: '400',
        marginLeft:10,
        width:'40%',
        
    },
    total:{
        color: COLOR.black_2,
        fontFamily: FONT.Roboto_Regular,
        fontSize: 12,
        fontWeight: '400',
        textAlignVertical:'center'
       
    },
    price:{
        color: COLOR.black_2,
        fontFamily: FONT.Roboto_Bold,
        fontSize: 24,
        fontWeight: '600',
        marginLeft:10,
    },
    ButtonsView: {
        flexDirection: 'row',
        width: "90%",
        marginHorizontal: "5%",
        marginTop: 10,
        justifyContent:'space-between'
    },
    ButtonCancel:{
        height:50,
        width:140,
        backgroundColor:COLOR.white,
        borderColor:COLOR.primary,
        borderWidth:1,
    },
    Buttoncontainer:{
        height:50,
        width:140,
    },
    canceltext:{
        color: COLOR.primary,
        fontFamily: FONT.Roboto_Medium,
        fontSize: 16,
        fontWeight: '600',

       
    },selectedText:{
        color:COLOR.primary
    }

});

export default HelpComponent;
