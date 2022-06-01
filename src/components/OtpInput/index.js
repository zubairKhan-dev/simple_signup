import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import styles from "./styles";

const OtpInput= (props)=> {

    return(
        <View>
            <TextInput placeholder={props.placeholder}
                       style={styles.input}
                       placeholderTextColor={props.color}
                       maxLength={1}
                       value={props.value}
                       onChangeText={props.onChangeText}
                       ref={props.ref}
                       onSubmitEditing={props.onSubmitEditing}
                       blurOnSubmit={false}
            />
        </View>
    )
}

export default OtpInput
