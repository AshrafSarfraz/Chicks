import React from "react";
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

const GrilledChicken = () => {
   const navigation= useNavigation();
   const thememode = useSelector((state)=>state.theme.mode);
   return (
      <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
         <CheckoutHeader />
        
         <View style={styles.imageView}>
            <Image source={require('../../Assets/images/Grillediamge.png')} style={styles.image} />
         </View>
         <View style={[styles.BottomView,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
            <Text style={styles.Grilled}>
               Grilled Chicken
            </Text>
            <View style={styles.RatingView}>
               <Image style={{ height: 22, width: 22 }} source={require('../../Assets/images/Swap/p1.png')} />
               <Text style={[styles.name,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>John Deo</Text>
               <Image style={{ height: 14, width: 14 }} source={require('../../Assets/images/Swap/star.png')} />

               <Text style={[styles.Rating,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>4.3</Text>

            </View>

            <View style={styles.integrat}>
               <Text style={styles.integr}>
                  Ingredients
               </Text>
               <View style={styles.BottonsView}>
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
               </View>
            </View>
            <View style={styles.ButtonsView}>
               <Button title={'Cancel'} ButtonContainer={[styles.buttonContainercan,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]} ButtonText={styles.buttontextcan} />
               <Button title={'Accept'} ButtonContainer={styles.buttoncontainer} onPress={()=>navigation.navigate(SCREEN.TabNavigation,{Pro:true})}/>
            </View>
         </View>
        
      </View>
   )
}

export default GrilledChicken;