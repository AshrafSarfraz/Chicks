import React, { useState } from "react";
import { ImageBackground, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from './style'
import CheckoutHeader from "../../components/reuseables/CheckoutHeader";
import SwapComponent from "../../components/reuseables/SwapComponent";
import OrderComponent from "../../components/reuseables/OrderComponent";
import { COLOR, FONT } from "../../data/StyleGuides";
import Button from "../../components/reuseables/Button";
import { useNavigation } from "@react-navigation/native";
import HomeTab from "../../navigations/HomeTab";
import { SCREEN } from "../../data/enums";
import { useSelector } from "react-redux";

const NoodlesDescription = () => {
   const navigation = useNavigation();
   const [Des, setDes] = useState(1);
   const thememode = useSelector((state) => state.theme.mode)
   return (
      <View style={[styles.container, { backgroundColor: thememode === 'light' ? COLOR.white : COLOR.black }]}>
         <CheckoutHeader />

         <View style={styles.imageView}>
            <Image source={require('../../Assets/images/Cart/image31.png')} style={styles.image} />
         </View>
         <View style={[styles.BottomView,{backgroundColor:thememode==='light'? COLOR.white : COLOR.black}]}>
            <Text style={styles.Grilled}>
               Noodles
            </Text>
            <View style={styles.RatingView}>
               <Image style={{ height: 22, width: 22 }} source={require('../../Assets/images/Swap/p1.png')} />
               <Text style={[styles.name, { color: thememode === 'light' ? COLOR.black : COLOR.white }]}>John Deo</Text>
               <Image style={{ height: 14, width: 14 }} source={require('../../Assets/images/Swap/star.png')} />

               <Text style={[styles.Rating, { color: thememode === 'light' ? COLOR.black : COLOR.white }]}>4.3</Text>

            </View>

            <View>
               <View style={styles.ButtonsView}>
                  <Button title={'Description'} ButtonContainer={[styles.buttonContainercan, { backgroundColor: Des === 1 ? COLOR.white : 'rgba(244, 244, 244, 1)' }]} ButtonText={[styles.buttontextcan, { color: Des === 1 ? COLOR.primary : "#A0A0A0" }]} onPress={() => setDes(1)} />
                  <Button title={'Ingredients'} ButtonContainer={[styles.buttoncontainer, { backgroundColor: Des === 2 ? COLOR.white : 'rgba(244, 244, 244, 1)' }]} ButtonText={[styles.Integer, { color: Des === 2 ? COLOR.primary : "#A0A0A0" }]} onPress={() => setDes(2)} />
               </View>
               {Des === 2 ? <View style={styles.BottonsView}>
                  <TouchableOpacity style={styles.NoodleContainer}>
                     <Text style={styles.noodletext}>
                        Noodles
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.NoodleContainer}>
                     <Text style={styles.noodletext}>
                        Carrot
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.NoodleContainer}>
                     <Text style={styles.noodletext}>
                        Cabbage
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.NoodleContainer}>
                     <Text style={styles.noodletext}>
                        Cilantro
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.NoodleContainer}>
                     <Text style={styles.noodletext}>
                        Tomato Sauce
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.NoodleContainer}>
                     <Text style={styles.noodletext}>
                        Black Pepper
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.NoodleContainer}>
                     <Text style={styles.noodletext}>
                        Sugar
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.NoodleContainer}>
                     <Text style={styles.noodletext}>
                        Salt
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.NoodleContainer}>
                     <Text style={styles.noodletext}>
                        Red Chili Sauce
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.NoodleContainer}>
                     <Text style={styles.noodletext}>
                        Oil
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.NoodleContainer}>
                     <Text style={styles.noodletext}>
                        Vineger
                     </Text>
                  </TouchableOpacity>
               </View> : null}
               {Des === 1 ? <View style={styles.BottonsView}>
                  <Text style={[styles.Vorem, { color: thememode === 'light' ? COLOR.black_70 : COLOR.white }]}>
                     Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                  </Text>
               </View> : null}
            </View>
            <View >
               {Des === 1 ? <Button title={'Swap'} />
                  :
                  <Button title={'Swap'} onPress={() => navigation.navigate(SCREEN.CheckoutDetails, { Noodles: true })} />}

            </View>
         </View>

      </View>
   )
}

export default NoodlesDescription;