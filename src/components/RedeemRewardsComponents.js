import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from './reuseables/Button';
import CompleteOrder from './reuseables/CompleteOrder';
import CancelOrder from './reuseables/CancelOrder';
import { COLOR, FONT } from '../data/StyleGuides';
import RedeemComponent from './reuseables/RedeemComponent';
import HowComponent from './reuseables/HowComponent';
import { SCREEN } from '../data/enums';
import { useSelector } from 'react-redux';


const data = [
    {
        name: 'Krunch Burger',
        detail: 'Krunch fillet, spicy mao, lettuce, sandwiched \n between a sesame seed bun',
        title: 'CUSTOMIZE',
       

    },
    {
        name: 'Krunch Burger',
        detail: 'Krunch fillet, spicy mao, lettuce, sandwiched \n between a sesame seed bun',
        title: 'CUSTOMIZE',
       

    },
    {
        name: 'Krunch Burger',
        detail: 'Krunch fillet, spicy mao, lettuce, sandwiched \n between a sesame seed bun',
        title: 'CUSTOMIZE',
       

    },
    {
        name: 'Krunch Burger',
        detail: 'Krunch fillet, spicy mao, lettuce, sandwiched \n between a sesame seed bun',
        title: 'CUSTOMIZE',
       

    },
    {
        name: 'Krunch Burger',
        detail: 'Krunch fillet, spicy mao, lettuce, sandwiched \n between a sesame seed bun',
        title: 'CUSTOMIZE',
       

    },

];



const RedeemRewardsComponents = ({ }) => {
    const [selectedTab, setSelectedTab] = useState('everydayValue');
    const navigation = useNavigation()
    const thememode = useSelector((state)=>state.theme.mode);
    const showComponent = (tab) => {
        setSelectedTab(tab);
    };

    const open= ()=>{
        navigation.navigate(SCREEN.TabNavigation,{Pro:true})
         }

    const renderItem = ({ item }) => (
      
           
        <TouchableOpacity style={[styles.itemContainer,{backgroundColor:thememode==='light'?COLOR.gray_236 : COLOR.darkprimary}]}>
         <Image source={require('../Assets/images/kurchBurger.png')} style={styles.krunchiamge} />           
        <View style={styles.ChunkyView}>
          <View style={styles.ButtontextVeiw}>
          <Text style={[styles.Kurnch,{color:thememode==='light'?COLOR.black : COLOR.white}]}>
            {item.name}
          </Text>
          <Button title={'30 points Reward'} ButtonContainer={styles.thirtybutton} ButtonText={styles.buttonText} />
          </View>
          <Text style={[styles.Fillet,{color:thememode==='light'?COLOR.black : COLOR.white}]}>
            {item.detail}
          </Text>
          <Text style={styles.Customize}>
            {item.title}
          </Text>
          <Button title={'Clam'} ButtonContainer={styles.Clam} onPress={open}/>
        </View>
        </TouchableOpacity>
       
    );
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, selectedTab === 'everydayValue' && styles.selectedButton]}
                    onPress={() => showComponent('everydayValue')}
                >
                    <Text style={[styles.text,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Earn</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedTab === 'alaCarteCombos' && styles.selectedButton]}
                    onPress={() => showComponent('alaCarteCombos')}
                >
                    <Text style={[styles.text,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>Redeem</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedTab === 'promotion' && styles.selectedButton]}
                    onPress={() => showComponent('promotion')}
                >
                    <Text style={[styles.text,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>How it Work</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.component}>
                {selectedTab === 'everydayValue' && 
                <View style={{marginBottom:"10%"}}>
                 <Text style={styles.Chunky}>
                 Chunky Chicken Promos
                 </Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.itemcontainer}
                />
                </View>
                }
                {selectedTab === 'alaCarteCombos' &&

                    <View>
                    <Text style={styles.Chunky}>
                    Chunky Chicken Rewards
                    </Text>
                      <RedeemComponent/>
                    </View>
                }
                {selectedTab === 'promotion' &&

                <View>
                <Text style={styles.Chunky}>
                How to Earn Chunky chicken rewards points
                </Text>
                  <HowComponent/>
                </View>
                }


            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "2%"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '3%',
        marginHorizontal: '7%',
        borderBottomWidth: 1,
        borderColor: COLOR.grey,
        height: 27,
        
    },
    button: {
        alignItems: 'center',
        width: 100
    },
    selectedButton: {
        height:28,
        borderBottomWidth: 2,
        borderBottomColor: COLOR.primary,
      
    },
    component: {
    }, text: {
        fontSize: 14, fontFamily: FONT.Roboto_Regular, color: COLOR.black
    },
    itemcontainer: {
        padding: 16,
    },

    itemContainer: {
        height: 138,
        width: '98%',
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: COLOR.gray_236,
        elevation: 2,
        alignSelf: 'center',
        flexDirection:"row"

    },
    Chunky:{
        fontSize:15,
        fontWeight:'400',
        color:COLOR.primary,
        fontFamily:FONT.Urbanist_Medium,
        marginLeft:'5%',
        marginVertical:"5%"
    },
    krunchiamge:{
        width:69,
        height:69,
        alignSelf:"center",
        justifyContent:'center',
        marginLeft:"3%"
    },
    ChunkyView:{
        width:"65%",
        height:"100%",
        marginHorizontal:"5%"
    },
    ButtontextVeiw:{
        flexDirection:'row',
        height:50,
        justifyContent:'space-between'
    },
    thirtybutton:{
        width:110,
        height:25,
        backgroundColor:'rgba(182, 52, 41, 0.61);',
        borderRadius:5,
    },
    buttonText:{
        fontSize:10,
        fontWeight:'500',

    },
    Kurnch:{
        fontSize:14,
        fontWeight:'600',
        color:COLOR.black,
        fontFamily:FONT.Urbanist_Medium,
        alignSelf:'flex-end',
        marginBottom:"5%"
   
    },
    Fillet:{
        fontSize:8,
        fontWeight:'400',
        color:COLOR.black,
        fontFamily:FONT.Urbanist_Regular,
    },
    Customize:{
        fontSize:14,
        fontWeight:'600',
        color:COLOR.primary,
        fontFamily:FONT.Urbanist_Medium,
        marginVertical:5,
    },
    Clam:{
        width:110,
        height:25,
        backgroundColor:COLOR.primary,
        borderRadius:5,
        alignSelf:'flex-start'
    }
    

});

export default RedeemRewardsComponents;
