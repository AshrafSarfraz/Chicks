import { View, Text, Dimensions,Image, TouchableOpacity, ScrollView } from 'react-native'
import React ,{useState}from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { styles } from './styles';
import { SCREEN } from '../../data/enums';
import BotttomHeight from '../../components/reuseables/BotttomHeight';
import { useSelector } from 'react-redux';
import { COLOR } from '../../data/StyleGuides';
const { width } = Dimensions.get('window');

const data = [
  {
    id: 1,
    image: require('../../Assets/images/Slider.png'), 
    text1: 'SIGNATURE FRIES',
    text2: 'AVAILABLE NOW (AND FOREVER).',
  },
  {
    id: 2,
    image: require('../../Assets/images/Slider3.png'),
    text1: 'SIGNATURE FRIES',
    text2: 'AVAILABLE NOW (AND FOREVER).',
  },
  {
    id: 3,
    image: require('../../Assets/images/Slider4.png'),
    text1: 'SIGNATURE FRIES',
    text2: 'AVAILABLE NOW (AND FOREVER).',
  },
  // Add more data as needed
];


export default function OnBoarding({navigation}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const thememode = useSelector((state)=>state.theme.mode);

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{item.text1}</Text>
        <Text style={styles.text2}>{item.text2}</Text>
      </View>
      <Image style={styles.chips} source={require('../../Assets/images/chips.png')}/>
    </View>
  );
  return (
    <View style={[styles.container,{backgroundColor:thememode==='light'? COLOR.white:COLOR.black}]}>
      <ScrollView>

    <View style={styles.headercontainer}>
      <Text style={styles.headerText}>CHUNKY CHICKEN</Text>
      <Image style={styles.qrcodeIcon} source={require('../../Assets/images/cc.png')} />
      
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>WELCOME TO CHICKENTOWN</Text>
      <TouchableOpacity onPress={()=>navigation.navigate(SCREEN.SignUp)}>
        <Text style={styles.signUpText}>Get your chicken fix, Sign up now!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.carouselContainer}>
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={335}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.paginationDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={1}
        />
      </View>
    </View>


     <View style={styles.lastcontainer}>
      <View style={styles.locationContainer}>
        <Image style={styles.locationImage} source={require('../../Assets/icons/redlocation.png')} />
        <Text style={[styles.locationText1,{color:thememode==='light'? COLOR.black:COLOR.white}]}>Your Chunky chicken is </Text>
      </View>

      <Text style={[styles.locationText2,{color:thememode==='light'? COLOR.black:COLOR.white}]}>Lorem ipsum dolor sit amet cons.</Text>
      <View style={styles.LineView}/>
      <Text style={[styles.heading1,{color:thememode==='light'? COLOR.black:COLOR.white}]}>OUR PLACE</Text>
      <Text style={styles.heading2}>OR YOURS?</Text>

      <TouchableOpacity onPress={()=>navigation.navigate(SCREEN.OnBoardingSecond)} style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Order Now</Text>
      </TouchableOpacity>
    </View>
<BotttomHeight/>
    </ScrollView>
  
    </View>
  )
}