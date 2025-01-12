import React from "react";
import { ImageBackground, Text, View, Image, FlatList } from 'react-native'
import styles from './style'
import CheckoutHeader from "../../components/reuseables/CheckoutHeader";
import SwapComponent from "../../components/reuseables/SwapComponent";
import OrderComponent from "../../components/reuseables/OrderComponent";
import Button from "../../components/reuseables/Button";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "react-native-screens";
import { SCREEN } from "../../data/enums";
import { useSelector } from "react-redux";
import { COLOR } from "../../data/StyleGuides";
const TrackOrder = () => {
    const navigation = useNavigation();
    const thememode = useSelector((state)=>state.theme.mode);
    const data = [
        { nameheading: 'Buyer name: ', name: "Clark", nameheading2: 'Delivery Address: ', name2: "2464 Royal Ln. Mesa", nameheading3: 'Tolal Price: ', name3: "$70" },

    ]
    return (
        <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
            <CheckoutHeader title={'Track Order'} />
            <View style={styles.orderView}>
                <Text style={[styles.orderid,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
                    Order ID
                </Text>
                <Text style={[styles.idno,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
                    #123456
                </Text>
                <Text style={[styles.orderid,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
                    07/07/2023 - 12:30 AM
                </Text>
            </View>

<View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.cardView}>
                        <View style={styles.TextView}>
                            <Text style={[styles.nameheading,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
                                {item.nameheading}
                            </Text>
                            <Text style={[styles.name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
                                {item.name}
                            </Text>
                        </View>
                        <View style={styles.TextView}>
                            <Text style={[styles.nameheading,,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
                                {item.nameheading2}
                            </Text>
                            <Text style={[styles.name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
                                {item.name2}
                            </Text>
                        </View>
                        <View style={styles.TextView}>
                            <Text style={[styles.nameheading,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
                                {item.nameheading3}
                            </Text>
                            <Text style={[styles.name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
                                {item.name3}
                            </Text>
                        </View>
                    </View>

                )}
            />
            </View>
            <Text style={[styles.ordertext,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
            Order Status: Order shipped
            </Text>
            <Image source={require('../../Assets/images/OrderShiped.png')} style={styles.shipedimage} />
            <View style={styles.textshipView}>
             <Text style={[styles.orderplace,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
             Order{"\n"}placed
             </Text>
             <Text style={[styles.orderplace1,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
In{"\n"}Process
             </Text>
             <Text style={[styles.orderplace3,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
             Order{"\n"}Shipped
             </Text>
             <Text style={[styles.orderplace4,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
             Order{"\n"}Delivered
             </Text>
            </View>
            <View style={styles.bottomview}>
            <Button title={'Track Location'} ButtonContainer={[styles.ButtonContainer]} ButtonText={styles.buttonText}onPress={()=>navigation.navigate(SCREEN.TrackLocation)} />
            </View>
        </View>
    )
}

export default TrackOrder;




