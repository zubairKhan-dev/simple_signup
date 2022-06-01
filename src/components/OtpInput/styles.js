import {Dimensions, StyleSheet} from "react-native";

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

    input: {
        borderBottomWidth: 2,
        borderColor: "#31A4A1",
        width: wp(10),
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 48,
    }
})

export default styles
