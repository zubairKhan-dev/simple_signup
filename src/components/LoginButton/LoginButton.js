import {Button, TouchableOpacity, View, Text} from "react-native";
import React from "react";
import styles from "./styles";

const LoginButton= (props)=> {

    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default LoginButton

