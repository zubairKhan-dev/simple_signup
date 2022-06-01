import {Dimensions, StyleSheet} from "react-native";
import theme from "../../util/theme";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
function hp(percentage) {
    const value = (percentage * viewportHeight) / 100;
    return Math.round(value);
}

const styles= StyleSheet.create({
    button: {
        width: wp(80),
        height: hp(5.5),
        backgroundColor: theme.Default_Color,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
        color: theme.White,
        letterSpacing: 1,
        fontFamily: theme.Default_font
    }
})

export default styles
