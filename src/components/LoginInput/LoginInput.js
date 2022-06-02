import React from "react";
import {Dimensions, StyleSheet, TextInput, View} from "react-native";
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


const LoginInput= (props)=> {

    return(
        <View>
            <TextInput
                placeholder= {props.placeholder}
                onChangeText={props.onChangeText}
                style={[styles.loginInput, {borderColor: props.borderColor, backgroundColor: props.backgroundColor}]}
                value={props.value}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    )
}

export default LoginInput

const styles= StyleSheet.create({
    loginInput: {
        width: wp(80),
        height: hp(5.5),
        borderRadius: 7,
        borderWidth: 1,
        padding: 10
    }
})
