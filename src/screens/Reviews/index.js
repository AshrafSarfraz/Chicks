import React, { useState, useEffect } from "react";
import { ImageBackground, Text, View, Image, ProgressBarAndroid, FlatList, ScrollView } from 'react-native'
import styles from './style'
import CheckoutHeader from "../../components/reuseables/CheckoutHeader";
import { COLOR } from "../../data/StyleGuides";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Reviews = () => {
    const navigation = useNavigation();
const thememode = useSelector((state)=>state.theme.mode)
const data =[
   { name:"Helene Moore",date:"June, 5 2023",image:require('../../Assets/images/ReviewStar.png'),detail:"Lorem ipsum dolor sit amet consectetur.\n Pulvinar feugiat scelerisque viverra mauris\n pellentesque leo justo ullamcorper. Orci\n dignissim ut sem quisque. Id tellus eget turpis\n turpis facilisi in a in mollis."},
   { name:"Helene Moore",date:"June, 5 2023",image:require('../../Assets/images/ReviewStar.png'),detail:"Lorem ipsum dolor sit amet consectetur.\n Pulvinar feugiat scelerisque viverra mauris\n pellentesque leo justo ullamcorper. Orci\n dignissim ut sem quisque. Id tellus eget turpis\n turpis facilisi in a in mollis."},
   { name:"Helene Moore",date:"June, 5 2023",image:require('../../Assets/images/ReviewStar.png'),detail:"Lorem ipsum dolor sit amet consectetur.\n Pulvinar feugiat scelerisque viverra mauris\n pellentesque leo justo ullamcorper. Orci\n dignissim ut sem quisque. Id tellus eget turpis\n turpis facilisi in a in mollis."}
]





    return (
        <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
            <CheckoutHeader title={'Reviews'} onpress={()=>navigation.goBack()} />
            <ScrollView>
            <View style={styles.ReviewChildView}>
                <View style={styles.Childinteger}>
                    <Text style={styles.integer}>
                        4.3
                    </Text>
                    <Text style={[styles.Rating,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
                        23 Ratings
                    </Text>
                </View>
                <View style={styles.ChildStar}>
                    <View style={styles.FiveStarView}>
                        <Image source={require('../../Assets/images/ReviewStar.png')} style={styles.star} />
                        <Image source={require('../../Assets/images/ReviewStar.png')} style={styles.star} />
                        <Image source={require('../../Assets/images/ReviewStar.png')} style={styles.star} />
                        <Image source={require('../../Assets/images/ReviewStar.png')} style={styles.star} />
                        <Image source={require('../../Assets/images/ReviewStar.png')} style={styles.star} />
                    </View>
                    <View style={styles.FiveStarView}>
                        <Image source={require('../../Assets/images/ReviewStar.png')} style={styles.star} />
                        <Image source={require('../../Assets/images/ReviewStar.png')} style={styles.star} />
                        <Image source={require('../../Assets/images/ReviewStar.png')} style={styles.star} />
                        <Image source={require('../../Assets/images/ReviewStar.png')} style={styles.star} />
                    </View>
                    <View style={styles.FiveStarView}>
                        <Image source={require('../../Assets/images/ReviewStar.png')} style={styles.star} />
                        <Image source={require('../../Assets/images/ReviewStar.png')} style={styles.star} />
                        <Image source={require('../../Assets/images/ReviewStar.png')} style={styles.star} />
                    </View>
                    <View style={styles.FiveStarView}>
                        <Image source={require('../../Assets/images/ReviewStar.png')} style={styles.star} />
                        <Image source={require('../../Assets/images/ReviewStar.png')} style={styles.star} />
                    </View>
                    <View style={styles.FiveStarView}>
                        <Image source={require('../../Assets/images/ReviewStar.png')} style={styles.star} />

                    </View>
                </View>
                <View style={styles.Childprogress}>
                    {/* First Progress Bar */}
                    <View style={styles.progressContainer}>
                        <ProgressBarAndroid
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={0.85}
                            color={COLOR.primary}
                            style={styles.progress}
                        />
                        <Text style={[styles.Rating2,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>12</Text>
                    </View>

                    {/* Second Progress Bar */}
                    <View style={styles.progressContainer}>
                        <ProgressBarAndroid
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={0.7}
                            color={COLOR.primary}
                            style={styles.progress}
                        />
                        <Text style={[styles.Rating1,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>5</Text>
                    </View>

                    {/* Third Progress Bar - Fill Full */}
                    <View style={styles.progressContainer}>
                        <ProgressBarAndroid
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={.54}
                            color={COLOR.primary}
                            style={styles.progress}
                        />
                        <Text style={[styles.Rating1,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>4</Text>
                    </View>
                    {/* Third Progress Bar - Fill Full */}
                    <View style={styles.progressContainer}>
                        <ProgressBarAndroid
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={.40}
                            color={COLOR.primary}
                            style={styles.progress}
                        />
                        <Text style={[styles.Rating1,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>2</Text>
                    </View>
                    {/* Third Progress Bar - Fill Full */}
                    <View style={styles.progressContainer}>
                        <ProgressBarAndroid
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={.2}
                            color={COLOR.primary}
                            style={styles.progress}
                            
                        />
                        <Text style={[styles.Rating1,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>1</Text>
                    </View>
                </View>
            </View>

                <View>
                  <FlatList
                  data={data}
                  renderItem={({item})=>(
                    <View style={[styles.itemContainer,{backgroundColor:thememode==='light' ? 'rgba(249, 249, 249, 1)' : COLOR.darkprimary},,{borderColor:thememode==='light' ? COLOR.white : COLOR.darkprimary}]}>
                    <View style={styles.nameView}>
                    <Text style={[styles.namestyle,{color:thememode==='light' ? COLOR.black : COLOR.white}]}> {item.name}</Text>
                    <Text style={[styles.Rating1,{color:thememode==='light' ? COLOR.gray_70 : COLOR.white}]}> {item.date}</Text>
                    </View>
                    <View style={styles.starvi}>
                    <Image source={item.image} style={styles.star1} />
                    <Image source={item.image} style={styles.star1} />
                    <Image source={item.image} style={styles.star1} />
                    <Image source={item.image} style={styles.star1} />
                    <Image source={item.image} style={styles.star1} />
                    </View>
                    <View>
                    <Text style={[styles.detail,{color:thememode==='light' ? COLOR.black : COLOR.white}]}>
                  {item.detail}
                    </Text>
                    </View>

                    </View>
                  )}
                  
                  />
                </View>
                </ScrollView>
        </View>
    )
}

export default Reviews;