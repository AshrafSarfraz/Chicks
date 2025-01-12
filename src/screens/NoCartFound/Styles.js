import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../utilities/Colors';
import { Fonts } from '../../../assets/fonts/Index';
import { FONT } from '../../data/StyleGuides';

export default StyleSheet.create({
    Container: {
        flex: 1,
    },
    Img: {
        alignSelf: "center"
    },
    ImgStyle: {
        marginTop: 150
    },
    Text_Title: {
        marginTop: 25,
        textAlign: "center",
        fontFamily: FONT.Urbanist_SemiBold,
        fontWeight: "600",
        fontSize: 32,
        lineHeight: 38,
        color: "#000000"
    }

    // font-family: Roboto;
    // font-size: 32px;
    // font-weight: 600;
    // line-height: 38px;
    // letter-spacing: 0em;
    // text-align: center;


})