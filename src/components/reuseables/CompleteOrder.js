import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Image, Modal, TextInput } from 'react-native'
import { COLOR, FONT } from "../../data/StyleGuides";
import Button from "./Button";
import { useSelector } from "react-redux";

const CompleteOrder = () => {
    const thememode = useSelector((state) => state.theme.mode)
    const dataComplete = [
        {
            orderid: 'Order ID',
            idno: '#123456',
            date: '07/07/2023 - 12:30 AM',
            total: 'Total',
            price: "$70",
            image: require('../../Assets/images/Lineimage.png'),
            days: 'Today'

        },
        {
            orderid: 'Order ID',
            idno: '#123456',
            date: '07/07/2023 - 12:30 AM',
            total: 'Total',
            price: "$70",
            image: require('../../Assets/images/Lineimage.png'),
            days: '5/7/23'

        },
        {
            orderid: 'Order ID',
            idno: '#123456',
            date: '07/07/2023 - 12:30 AM',
            total: 'Total',
            price: "$70",
            image: require('../../Assets/images/Lineimage.png'),
            days: '4/7/23'

        },

    ];

    const [isVisible, setIsVisible] = useState(false);

    const openModal = () => {
        setIsVisible(true);
    };

    const closeModal = () => {
        setIsVisible(false);
    };
    return (
        <View>
            <View style={{ marginBottom: '10%' }}>
                <FlatList
                    data={dataComplete}
                    renderItem={({ item }) => (
                        <View style={{ marginTop: 12, }}>
                            <View style={styles.Lineiamge}>
                                <Text style={styles.orderid}>
                                    {item.days}
                                </Text>
                                <Image source={item.image} style={[styles.line,{tintColor:thememode==='light' ? COLOR.white : COLOR.grey_1}]} />
                            </View>
                            <TouchableOpacity style={[styles.itemContainer, { backgroundColor: thememode === 'light' ? COLOR.white : COLOR.darkprimary }]}>
                                <View style={styles.orderView}>
                                    <Text style={[styles.orderid, { color: thememode === 'light' ? COLOR.grey_8 : COLOR.white }]}>
                                        {item.orderid}
                                    </Text>
                                    <Text style={[styles.idno, { color: thememode === 'light' ? COLOR.black_2 : COLOR.white }]}>
                                        {item.idno}
                                    </Text>
                                    <Text style={[styles.orderid, { color: thememode === 'light' ? COLOR.grey_8 : COLOR.white }]}>
                                        {item.date}
                                    </Text>
                                </View>
                                <View style={styles.orderView}>
                                    <Text style={[styles.total, { color: thememode === 'light' ? COLOR.black_2 : COLOR.white }]}>
                                        {item.total}
                                    </Text>
                                    <Text style={[styles.price, { color: thememode === 'light' ? COLOR.black_2 : COLOR.white }]}>
                                        {item.price}
                                    </Text>

                                </View>
                                <View style={styles.ButtonsView}>
                                    <Button title={'Rate'} ButtonContainer={[styles.ButtonCancel,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]} ButtonText={styles.canceltext} onPress={openModal} />
                                    <Button title={'Re-Order'} ButtonContainer={styles.Buttoncontainer} />

                                </View>


                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, { backgroundColor: thememode === 'light' ? COLOR.white : COLOR.darkprimary }]}>
                        <Text style={[styles.Cancel, { color: thememode === 'light' ? COLOR.black : COLOR.white }]}>
                            Rate Order
                        </Text>
                        <Image source={require('../../Assets/images/Lineimage.png')} style={styles.imagemodal} />
                        <Text style={[styles.modalText, { color: thememode === 'light' ? COLOR.black_2 : COLOR.white }]}>Would you like to rate the order?</Text>
                        <View style={styles.starView}>
                            <Image source={require('../../Assets/images/star1.png')} style={{ width: 32, height: 32 }} />
                            <Image source={require('../../Assets/images/star1.png')} style={{ width: 32, height: 32 }} />
                            <Image source={require('../../Assets/images/star1.png')} style={{ width: 32, height: 32 }} />
                            <Image source={require('../../Assets/images/star1.png')} style={{ width: 32, height: 32 }} />
                            <Image source={require('../../Assets/images/star.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={[styles.modalText1, { color: thememode === 'light' ? COLOR.black_2 : COLOR.white }]}>
                            Your experience
                        </Text>
                        <TextInput style={styles.Textinput} placeholder="type here" />
                        <View style={styles.ButtonsView1}>
                            <Button title={'Cancel'} ButtonContainer={[styles.ButtonCancelmodal, { backgroundColor: thememode === 'light' ? COLOR.white : COLOR.white }]} ButtonText={[styles.canceltextmodal, { color: thememode === 'light' ? COLOR.black_2 : COLOR.black }]} onPress={closeModal} />
                            <Button title={'Submit'} ButtonContainer={styles.Buttoncontainer} onPress={closeModal} />

                        </View>
                    </View>
                </View>
            </Modal>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "6%"
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
        marginTop: "2%",
        marginHorizontal: "5%"

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
    idno: {
        color: COLOR.black_2,
        fontFamily: FONT.Roboto_Regular,
        fontSize: 12,
        fontWeight: '400',
        marginLeft: 10,
        width: '40%',

    },
    total: {
        color: COLOR.black_2,
        fontFamily: FONT.Roboto_Regular,
        fontSize: 12,
        fontWeight: '400',
        textAlignVertical: 'center'

    },
    price: {
        color: COLOR.black_2,
        fontFamily: FONT.Roboto_Bold,
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 10,
    },
    ButtonsView: {
        flexDirection: 'row',
        width: "90%",
        marginHorizontal: "5%",
        marginTop: 10,
        justifyContent: 'space-between'
    },
    ButtonCancel: {
        height: 50,
        width: 140,
        backgroundColor: COLOR.white,
        borderColor: COLOR.primary,
        borderWidth: 1,
    },
    Buttoncontainer: {
        height: 50,
        width: 135,
        marginLeft:"5%"
    },
    canceltext: {
        color: COLOR.primary,
        fontFamily: FONT.Roboto_Medium,
        fontSize: 16,
        fontWeight: '600',


    },
    ///modalsty

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
        height: 300,
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
        fontFamily: FONT.Roboto_Regular,

    },
    modalText1: {
        marginBottom: 15,
        fontSize: 14,
        color: COLOR.black_2,
        fontWeight: "400",
        fontFamily: FONT.Roboto_Regular,
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

        marginRight: '10%'

    },
    Textinput: {
        width: "100%",
        backgroundColor: '#FAFAFA',
        borderRadius: 15,
        color: COLOR.black,
        paddingLeft: 10
    },
    starView: {
        flexDirection: 'row',
        alignSelf: 'center'
    }

});
export default CompleteOrder;