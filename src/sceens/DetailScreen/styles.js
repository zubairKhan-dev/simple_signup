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

    contentView : {
        height: hp(90),
        position: 'absolute',
        top: hp(10),
        width: wp(100),
        alignItems: 'center'
    },
    card : {
        borderRadius: 7,
        marginTop: 20,
        width: wp(90),
    }
}
