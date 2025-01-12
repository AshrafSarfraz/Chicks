import React,{useState} from "react";
import { ImageBackground, Text, View, Image, FlatList, Modal,TouchableOpacity,TextInput } from 'react-native'
import styles from './style'
import CheckoutHeader from "../../components/reuseables/CheckoutHeader";
import Button from "../../components/reuseables/Button";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../data/enums";
import { useSelector } from "react-redux";
import { COLOR } from "../../data/StyleGuides";

const OrderDetails = () => {


    const navigation = useNavigation()
    const thememode = useSelector((state)=>state.theme.mode);
    const Array = [
        {
            orderid: 'Order ID',
            idno: '#123456',
            date: '07/07/2023 - 12:30 AM',
        }
    ]
    const data = [
        {
            name: "Pasta",
            checkenname: 'Crisp Kitchen',
            Quentity: "Qty: 1",
            image: require('../../Assets/images/Pista.png')
        },
        {
            name: "Noodles",
            checkenname: 'John’s Kitchen',
            Quentity: "Qty: 2",
            image: require('../../Assets/images/noddles.png')
        },

        {
            name: "Macaroni",
            checkenname: 'Crisp Kitchen',
            Quentity: "Qty: 1",
            image: require('../../Assets/images/macarn.png')
        },


    ]


    

    const [isVisible, setIsVisible] = useState(false);
  
    const openModal = () => {
      setIsVisible(true);
    };
  
    const closeModal = () => {
      setIsVisible(false);
    };
    return (
        <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
            <CheckoutHeader title={'Order Details'} />



            <View style={[styles.FlatouterView,{backgroundColor:thememode==='light' ? COLOR.lightRed_F2 : COLOR.darkprimary}]}>

                <FlatList
                    data={Array}
                    renderItem={({ item }) => (
                        <View style={styles.CardView1}>
                            <View style={styles.orderView}>
                                <Text style={[styles.orderid,{color:thememode==='light' ? COLOR.grey_8 : COLOR.white}]}>
                                    {item.orderid}
                                </Text>
                                <Text style={[styles.idno,{color:thememode==='light' ? COLOR.black_2 : COLOR.white}]}>
                                    {item.idno}
                                </Text>
                                <Text style={[styles.orderid,{color:thememode==='light' ? COLOR.grey_8 : COLOR.white}]}>
                                    {item.date}
                                </Text>
                            </View>
                        </View>
                    )}
                        />
                        <FlatList
                            data={data}
                            renderItem={({ item }) => (
                                <View style={styles.CardView}>
                                        <Image source={item.image} style={styles.image} />
                                        <View style={styles.TextView}>
                                        <Text style={[styles.name,{color:thememode==='light' ? COLOR.black_2 : COLOR.white}]}>
                                            {item.name}
                                        </Text>
                                        <Text style={styles.chickennaem}>
                                            {item.checkenname}
                                        </Text>
                                        </View>
                                        <Text style={[styles.Quentity,{color:thememode==='light' ? COLOR.grey_8 : COLOR.white}]}>
                                            {item.Quentity}
                                        </Text>
                                    
                                </View>
                            )}
                        />
 </View>
            <View style={styles.TotalView}>
                <Text style={[styles.total,{color:thememode=== 'light' ? COLOR.black : COLOR.white}]}>
                    TOTAL:
                </Text>
                <Text style={[styles.price,{color:thememode=== 'light' ? COLOR.black : COLOR.white}]}>
                    $70
                </Text>

            </View>




            <View style={styles.ButtonsView}>
                <Button title={'Cancel Order'} ButtonContainer={[styles.ButtonCancel,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]} ButtonText={styles.canceltext}  onPress={openModal}/>
                <Button title={'Track Order'} ButtonContainer={styles.Buttoncontainer} onPress={()=>navigation.navigate(SCREEN.TrackOrder)}/>

            </View>
            <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.darkprimary}]}>
            <Text style={[styles.Cancel,{color:thememode==='light'?COLOR.black:COLOR.white}]}>
            Cancel Order
            </Text>
            <Image source={require('../../Assets/images/Lineimage.png')} style={styles.imagemodal}/>
          <Text style={[styles.modalText,{color:thememode==='light'?COLOR.black:COLOR.white}]}>You are attempting to cancel{"\n"} your order.</Text>
          
          <View style={styles.ButtonsView1}>
        
                <Button title={'No'} ButtonContainer={styles.ButtonCancelmodal} ButtonText={styles.canceltextmodal}  onPress={closeModal}/>
                <Button title={'Cancel Order'} ButtonContainer={styles.Buttoncontainer} onPress={closeModal}/>

            </View>
        </View>
      </View>
    </Modal>
        </View>
    )
}

export default OrderDetails;