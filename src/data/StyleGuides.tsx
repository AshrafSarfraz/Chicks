import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const ACTIVEOPACITY = 0.7;

const COLOR = {
    primary: '#B63429',
    red: '#D92223',
    red_64:"rgba(182, 52, 41, 0.64)",
    regentGrey: '#8A94A6',
    grey_1: '#9E9E9E',
    grey_F8:'#F8F8F8',
    grey: '#F0F0F0',
    grey_5: '#5B5B5B',
    grey_6: 'rgba(33, 35, 30, 0.6)',
    grey_7: 'rgba(33, 33, 33, 0.7)',
    grey_03: 'rgba(33, 33, 33, 0.03)',
    grey_3: 'rgba(33, 33, 33, 0.3)',
    grey_15: 'rgba(33, 33, 33, 0.15)',
    grey_8:'#808080',
    grey_9:'#F9F9F9',
    black_08: "rgba(33, 33, 33, 0.08)",
    black_2:'#2C2C2E',
    white: '#ffffff',
    gray_240:'rgba(240, 240, 240, 1)',
    gray_236:"rgba(236, 236, 236, 1)",
    gray_70:'rgba(44, 44, 46, 0.70)',
    white_7: 'rgba(255, 255, 255, 0.7)',
    offWhite: 'rgba(244, 240, 234, 1)',
    white_1: 'rgba(251, 251, 251, 1)',
    black: '#000000',
    lightBlack: 'rgba(53, 53, 53, 1)',
    green_20: 'rgba(21, 158, 98, 0.19)',
    arrowColor: 'rgba(20, 58, 33, 0.46)',
    black_20: 'rgba(0,0,0,0.2)',
    black_70:"rgba(44, 44, 46, 0.70)",
    lighkblack1:'rgba(44, 44, 46, 1)',

    halkaBlack :'rgba(33, 33, 33, 0.61)',
    greenShade :'rgba(7, 126, 140, 1)',

    black_light: 'rgba(33, 35, 30, 0.7)',
    blackLight_6: 'rgba(33, 35, 30, 0.6)',
    lightRed_F2:'#FFF5F2',
    searchgrey:'#BEBEBE',
    LightRed_9:"#FFF9F8",
    darkprimary:"#1F1F1F",
    locationview:"#F5F5F5",
    modeldark:"#303030"
   
};

const FONT = {
    Urbanist_SemiBold: 'Urbanist-SemiBold',
    Urbanist_Bold: 'Urbanist-Bold',
    Urbanist_Medium: 'Urbanist-Medium',
    Urbanist_Regular: 'Urbanist-Regular',
    Roboto_Bold: 'Roboto-Bold',
    Roboto_Medium: 'Roboto-Medium',
    Roboto_Regular: 'Roboto-Regular',
    Poppins_Regular:'Poppins-Regular'

}

const TEXT_STYLE = {
    boldTitle: {
        fontSize: 29,
        color: COLOR.white,
    },
    text_regular: {
        fontSize: 16,
        color: COLOR.grey,
    },
    black_regular: {
        fontSize: 15,
        color: COLOR.black,
    },
    title: {
        fontSize: 22,
        color: COLOR.black,
    },
    title2: {
        fontSize: 23,
        color: COLOR.primary,
    },
    // text_med_Red: {
    //   fontFamily: FONTS.Poppins_Medium,
    //   color: COLORS.RED,
    // },
    // text_med_bold: {
    //   fontFamily: FONTS.Poppins_Regular,
    //   fontSize: 16,
    //   fontWeight: '400',
    //   color: COLORS.WHITE,
    // },
    // text_small_bold: {
    //   fontFamily: FONTS.Poppins_Bold,
    //   fontSize: 12,
    //   fontWeight: '400',
    //   color: COLORS.BLACK,
    // },

};
const commonStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    horizontalView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    verticleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    justifyView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export { width, height, wp, hp, ACTIVEOPACITY, FONT, COLOR, TEXT_STYLE, commonStyles }