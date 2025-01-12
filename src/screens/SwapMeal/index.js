import React, { useState } from "react";
import { ImageBackground, Text, View, Image, Modal, FlatList, TouchableOpacity,} from 'react-native'
import styles from './style'
import Button from "../../components/reuseables/Button";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../data/enums";
import { useSelector } from "react-redux";
import { COLOR } from "../../data/StyleGuides";

const SwapMeal = () => {
const navigation = useNavigation();
const thememode = useSelector((state)=>state.theme.mode)
    const Array =[
        {image:require("../../Assets/images/noddles.png"),personimage:require('../../Assets/images/Swap/p1.png'),ChickenName:'Noodles',personName:"John Deo",starimage:require('../../Assets/images/Swap/star.png'),Rating:'4.3'},
        {image:require("../../Assets/images/Riceimage.png"),personimage:require('../../Assets/images/Swap/p1.png'),ChickenName:'Fried Rice',personName:"William",starimage:require('../../Assets/images/Swap/star.png'),Rating:'4.3'},
        {image:require("../../Assets/images/Swap/Pasta.png"),personimage:require('../../Assets/images/Swap/p1.png'),ChickenName:'Pasta',personName:"Richard",starimage:require('../../Assets/images/Swap/star.png'),Rating:'4.3'},
        {image:require("../../Assets/images/Swap/Grill.png"),personimage:require('../../Assets/images/Swap/p1.png'),ChickenName:'Grilled Chicke',personName:"Herry",starimage:require('../../Assets/images/Swap/star.png'),Rating:'4.3'},
        {image:require("../../Assets/images/ChunkRoast.png"),personimage:require('../../Assets/images/Swap/p1.png'),ChickenName:'Chuck Roast',personName:"Watson",starimage:require('../../Assets/images/Swap/star.png'),Rating:'4.3'},
        {image:require("../../Assets/images/Cart/image37.png"),personimage:require('../../Assets/images/Swap/p1.png'),ChickenName:'Macaroni',personName:"Steave",starimage:require('../../Assets/images/Swap/star.png'),Rating:'4.3'},

    ]

    return (
        <View style={[styles.container,{backgroundColor:thememode==='light'? COLOR.white : COLOR.black}]}>
            <View style={styles.HeaderView}>
                <Text style={styles.SwapText}>
                    Swap meal
                </Text>
            </View>
            <View style={styles.Flatcard}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={Array}
            numColumns={2}
            renderItem={({item})=>(
                <TouchableOpacity style={[styles.CardView,{backgroundColor:thememode==='light'?COLOR.LightRed_9 : COLOR.darkprimary}]} onPress={()=>navigation.navigate(SCREEN.NoodlesDescription)} >
                <View style={styles.imageView}>
                <Image source={item.image} style={styles.Chickeniamge} />
                </View>
                <View style={{height:80}}/>
                <Text style={[styles.chickenname,{color:thememode==='light'?COLOR.black : COLOR.white}]}>
                {item.ChickenName}
                </Text>
                <View style={styles.personcard}>
                <Image source={item.personimage} style={styles.personiamgestyle} />
                <Text style={[styles.personname,{color:thememode==='light'?COLOR.black : COLOR.white}]}>
                {item.personName}
                </Text>
                <Image source={item.starimage} style={styles.stariamge}/>
                <Text style={[styles.Ratingstyle,{color:thememode==='light'?COLOR.black : COLOR.white}]}>
                {item.Rating}
                </Text>
                </View>
                 <Button title={'Swap'} ButtonContainer={[styles.SwapButton,{backgroundColor:thememode==='light'?COLOR.LightRed_9 : COLOR.darkprimary}]} ButtonText={styles.Swapbuttontext} onPress={()=>navigation.navigate(SCREEN.NoodlesDescription)} />
                </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            style={{ flex: 1 }}
            />
            </View>
        </View>
    )
}

export default SwapMeal;