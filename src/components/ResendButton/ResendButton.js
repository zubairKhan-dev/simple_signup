import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {TouchableOpacity} from "react-native-web";
import theme from "../../util/theme";
import CountDown from 'react-native-countdown-component';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
function hp(percentage) {
    const value = (percentage * viewportHeight) / 100;
    return Math.round(value);
}

const ResendButton= (props)=> {


    return(
        <TouchableOpacity style={[styles.button, {borderColor: props.borderColor, width: props.width, borderRadius: props.radius}]}
                          onPress={props.onPress}
        >
            <Text style={[styles.text, {color: props.color}]}>RESEND OTP IN
                <CountDown
                    id={props.id}
                    until={props.until}
                    //onFinish={() => alert('finished')}
                    onPress={null}
                    size={15}
                    timeToShow={['M', 'S']}
                    digitTxtStyle={{color: props.digitColor }}
                    timeLabels={{m: '', s: ''}}
                    onFinish={props.onFinish}
                    showSeparator={true}
                    style={{backgroundColor: theme.White,
                        height: hp(0), justifyContent: 'center',}}
                    digitStyle={{backgroundColor: theme.White, height: hp(0)}}
                    separatorStyle={{color: props.separatorColor}}
                />
            </Text>
        </TouchableOpacity>
    )
}

export default ResendButton

const styles= StyleSheet.create({
    button: {
        height: hp(5.5),
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: theme.Default_font,
        fontSize: 16,
        fontWeight: "700"
    }
})
