import { View,Image, StatusBar } from 'react-native';
import React,{useEffect} from 'react';
import { COLOR } from '../../data/StyleGuides';
import { ChunkyChicken, ChunkyChickenWhiteBackground } from '../../data/Images';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from '../../data/enums';
import Video from 'react-native-video';
import { useSelector } from 'react-redux';

export default function Splash() {
    const navigation = useNavigation();
    const thememode = useSelector((state)=>state.theme.mode);
    useEffect(() => {
      const navigateToOtherScreen = setTimeout(() => {
        navigation.navigate(SCREEN.OnBoarding); 
      }, 2000);
  
      return () => clearTimeout(navigateToOtherScreen);
    }, [navigation]);
  
  return (
    <View style={[styles.container,{backgroundColor:thememode==='light'? COLOR.white:COLOR.black}]}>
      {/* <StatusBar backgroundColor={COLOR.primary} />
      <View style={styles.imageContainer}>
        <Image style={styles.chickenLogo} source={ChunkyChickenWhiteBackground} />
        <Image style={styles.chunkyChicken} source={ChunkyChicken} />
      </View> */}
       <Video
                source={require('../../Assets/images/splash.mp4')}
                resizeMode="cover"
                style={styles.video}
                repeat={true}
                paused={false}
            />
    </View>
  );
}
