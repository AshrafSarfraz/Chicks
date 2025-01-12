import React, { useState } from "react";
import { ImageBackground, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import styles from './style'
import CheckoutHeader from "../../components/reuseables/CheckoutHeader";
import RedeemRewardsComponents from "../../components/RedeemRewardsComponents";
import Button from "../../components/reuseables/Button";
import ReuseHeader from "../../components/reuseables/ReuseHeader";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useSelector } from "react-redux";
import { COLOR } from "../../data/StyleGuides";
const RedeemRewardsScanner = () => {

const thememode = useSelector((state)=>state.theme.mode);
  const data = [
    {

      detail: "Hurray you’ve earned\nenough points! Present this\nQR code to your bartender\nto claim your reward!",
    },]
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`Scanned QR Code: ${data}`);
  };

  const resetScanner = () => {
    setScanned(false);
  };


  return (
    <View style={[styles.container,{backgroundColor:thememode==='light' ? COLOR.white : COLOR.black}]}>
      <ReuseHeader title={'Scan QRcode'} titlestyle={styles.titlecolor} onPress={() => naviagtion.goBack()} />
      <ScrollView>
      <View style={{width:90,height:350,marginTop:'10%',marginRight:10,marginBottom:"25%"}}>
      <TouchableOpacity style={styles.iamgeView}>
        <RNCamera
          style={styles.camera}
          captureAudio={false}
          onBarCodeRead={scanned ? undefined : handleBarCodeScanned}
        >
          {!scanned && <QRCodeScanner reactivate={true} showMarker={true} markerStyle={styles.marker} />}
        </RNCamera>
        {scanned && (
          <TouchableOpacity style={styles.scanAgain} onPress={resetScanner}>
            <Text style={styles.scanAgainText}>Scan Again</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      </View>
      <View style={styles.outerveiw}>
     
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.itemContainer,{backgroundColor:thememode==='light'?COLOR.gray_236 : COLOR.darkprimary}]}>
            <Image source={require('../../Assets/images/GirlHapplyImage.png')} style={styles.krunchiamge} />
            <View style={styles.ChunkyView}>

              <Text style={[styles.Fillet,{color:thememode==='light'?COLOR.black : COLOR.white}]}>
                {item.detail}
              </Text>

            </View>
          </TouchableOpacity>
        )}

      />
      </View>
      </ScrollView>
    </View>
  )
}

export default RedeemRewardsScanner;