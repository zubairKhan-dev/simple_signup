import {Dimensions, StyleSheet} from 'react-native'
import theme from "../../util/theme";
import themeMobile from "../../util/themeMobile";

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
    container: {
        flex: 1,
        backgroundColor: theme.White
    },
    headingContainer: {
        width: wp(80),
        height: hp(20),
        left: wp(10),
        top: hp(15),
        position: "absolute",

    },
    headingText: {
        fontSize: 24,
        fontWeight: "bold"
    },
    mediumText: {
        fontSize: themeMobile.Medium_Font,
    },
    smallText: {
        fontSize: themeMobile.Small_Fonts
    },
    otpContainer: {
        width: wp(80),
        height: hp(30),
        left: wp(10),
        top: hp(40),
        position: "absolute",
        resizeMode: "contain",
        alignItems: "center"
    },
    logoContainer: {

        top: hp(85),
        left: wp(10),
        position: "absolute"

    },
    parentView: {
        flex: 1,
        height: hp(100),
        width: wp(100),
        backgroundColor: "#FFFFFF"
    },
    leftView: {
        width: wp(50),
        height: hp(90),
        left: 0,
        right: wp(50),
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boldText: {
        fontWeight: "bold",
        fontSize: 64,
        fontFamily: theme.Default_font
    },
    regularText: {
        fontWeight: "600",
        fontSize: 24,
        fontFamily: theme.Default_font
    },
    rightView: {
        width: wp(50),
        height: hp(90),
        left: wp(50),
        top: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        alignItems: 'center',
    },
    smallFonts: {
        fontSize: 10,
        fontWeight: "600",
        fontFamily: theme.Default_font,
        color: "#31A4A1"
    },
    button: {
        width: wp(30),
        height: hp(6),
        backgroundColor: "#31A4A1",
        borderRadius: 7,
        justifyContent: 'center'
    },
    containerInput: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp(5)
    },
    cellView: {
        paddingVertical:10,
        width: wp(10),
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1.5
    },
    cellText: {
        textAlign: "center",
        fontSize: 48,
        fontWeight: "bold"
    },
    bottomView: {
        flexDirection: "row",
        flex:1,
        justifyContent: "center",
        marginBottom: 50,
        alignItems: "center"
    },
    buttonChange: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    containerAvoidingView: {
        alignItems: 'center',
        padding: 10,
    }
})

export default styles
