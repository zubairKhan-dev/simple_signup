import {Dimensions, StyleSheet} from "react-native";
import theme from "../../util/theme";

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

function hp(percentage) {
    const value = (percentage * viewportHeight) / 100;
    return Math.round(value);
}

export const styles= {
    container : {
        flex: 1,
        backgroundColor: theme.White,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageBackground: {
        position: 'absolute',
        right: 0,
        width: 200*1.1,
        height: 350*1.1,
        top: hp(30)
    },
    headingContainer: {
        width: wp(80),
        position: 'absolute',
        top: hp(5)
    },
    loginContainer: {
        height: hp(40),
        width: wp(80),
        position: 'absolute',
        top: hp(30),
        bottom: hp(30)
        //borderWidth: 1,
    }
}
