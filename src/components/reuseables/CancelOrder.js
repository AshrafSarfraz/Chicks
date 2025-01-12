import React from "react";
import {FlatList, Text,View,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { COLOR, FONT } from "../../data/StyleGuides";
import Button from "./Button";
import { useSelector } from "react-redux";

const CancelOrder=()=>{
    const thememode = useSelector((state)=>state.theme.mode)
    const dataComplete = [
        {
            orderid: 'Order ID',
            idno: '#123456',
            date: '07/07/2023 - 12:30 AM',
            total: 'Total',
            price: "$70",
            image:require('../../Assets/images/Lineimage.png'),
            days:'Today'
    
        },
        {
            orderid: 'Order ID',
            idno: '#123456',
            date: '07/07/2023 - 12:30 AM',
            total: 'Total',
            price: "$70",
            image:require('../../Assets/images/Lineimage.png'),
            days:'5/7/23'
    
        },
        {
            orderid: 'Order ID',
            idno: '#123456',
            date: '07/07/2023 - 12:30 AM',
            total: 'Total',
            price: "$70",
            image:require('../../Assets/images/Lineimage.png'),
            days:'4/7/23'
    
        },
    
    ];
    return(
        <View style={{marginBottom:"20%"}}>
        <FlatList
        data={dataComplete}
        renderItem={({item})=>(
            <View style={{marginTop:12,}}>
             <View style={styles.Lineiamge}>
                <Text style={styles.orderid}>
                    {item.days}
                </Text>
                <Image source={item.image} style={[styles.line,{tintColor:thememode==='light'?COLOR.white : COLOR.grey_1}]}/> 
             </View>
        <TouchableOpacity style={[styles.itemContainer,{backgroundColor:thememode==='lgiht'?COLOR.white : COLOR.darkprimary}]}>
        <View style={styles.orderView}>
            <Text style={[styles.orderid,{color:thememode==='light'?COLOR.grey_8 : COLOR.white}]}>
                {item.orderid}
            </Text>
            <Text style={[styles.idno,{color:thememode==='light'?COLOR.black_2 : COLOR.white}]}>
                {item.idno}
            </Text>
            <Text style={[styles.orderid,{color:thememode==='light'?COLOR.grey_8 : COLOR.white}]}>
                {item.date}
            </Text>
        </View>
        <View style={styles.orderView}>
            <Text style={[styles.total,{color:thememode==='light'?COLOR.black_2 : COLOR.white}]}>
                {item.total}
            </Text>
            <Text style={[styles.price,{color:thememode==='light'?COLOR.black_2 : COLOR.white}]}>
                {item.price}
            </Text>
           
        </View>
        <View style={styles.ButtonsView}>
           <Button title={'Re-Order'} ButtonContainer={styles.ButtonCancel} ButtonText={styles.canceltext} />
        </View>


    </TouchableOpacity>
    </View>
    )}
    />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "6%"
    },
    Lineiamge:{
      width:"90%",
      marginHorizontal:'5%',
      flexDirection:'row',
      height:20,
    
    },
    line:{
          width:"85%",
          marginTop:7,
          marginLeft:7,
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
        fontSize: 14, fontFamily: FONT.Roboto_Medium, color: COLOR.black
    },
    itemcontainer: {
        padding: 16,
    },

    itemContainer: {
        height: 138,
        width: '90%',
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: COLOR.white,
        elevation: 2,
        alignSelf: 'center',
        marginTop:"2%",
        marginHorizontal:"5%"

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
        width:'100%',
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

       
    }

});
export default CancelOrder;