import React, {useEffect, useRef, useState} from "react";
import {Dimensions, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import theme from "../../util/theme";
import LoginButton from "../../components/LoginButton/LoginButton";
import Header from "../../components/Header/Header";
import ToastNotification from "react-native-toast-notification";
import ResendButton from "../../components/ResendButton/ResendButton";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
function hp(percentage) {
    const value = (percentage * viewportHeight) / 100;
    return Math.round(value);
}

const VerificationScreen= (props)=> {
    console.log(props)

    let textInput = useRef(null)
    const lengthInput = 6
    const [internalVal, setInternalVal] = useState("")
    const [verified, setVerified] = useState(false)
    const [api_key, setApi_key] = useState("")
    const [color, setColor] = useState(theme.Off_Gray)
    const [borderColor, setBorderColor] = useState(theme.Off_Gray)
    const [digitColor, setDigitColor] = useState(theme.Off_Gray)
    const [separatorColor, setSeparatorColor] = useState(theme.Off_Gray)
    const [resend, setResend] = useState(false)
    const [notify, setNotify] = useState(false)
    const [errorText, setErrorText] = useState("")
    const [toastColor, setToastColor] = useState(theme.Default_Color)
    const [toastTextColor, setToastTextColor] = useState(theme.White)
    const [until, setUntil] = useState(30)
    const[isVisible, setIsVisible]= useState(false)
    const[show, setShow]= useState(false)
    const[error, setError]= useState(false)
    const[count, setCount]= useState(0)
    const[timer, setTimer]= useState(30)
    const[timer2, setTimer2]= useState(30)
    const[id, setId]= useState("id")

    const otpInput = useRef(null);

    const clearText = () => {
        otpInput.current.clear();
    }

    const setText = () => {
        otpInput.current.setValue("1234");
    }

    // Show the toast notification
    const renderToastNotification = () => {
        if (notify) {
            return (
                <ToastNotification
                    textStyle={{
                        color: toastTextColor,
                        fontFamily: theme.Default_font,
                        alignSelf: 'center',
                        padding: 15,
                        textAlign: 'center',
                        opacity: 0.9,
                        letterSpacing: 1,
                        paddingHorizontal: 15
                    }}
                    style={{
                        backgroundColor: toastColor, alignItems: 'center',  alignSelf: 'center',
                        justifyContent: 'center', height: hp(5.5), borderRadius: 3, borderWidth: 1, borderColor: toastTextColor
                    }}
                    text={<View style={{flexDirection: 'row', height: hp(5.5), justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={!error ? require("../../assets/images/checked.png") : require("../../assets/images/warning.png")} style={{height: 20, width: 20, tintColor: toastTextColor}} />
                        <View style={{marginLeft: 10}}/>
                        <Text>{errorText}</Text>
                    </View>}
                    duration={2000}
                    //isTop={true}
                    onHide={() => {
                        setNotify(false)
                    }}
                    textAlign={"center"}
                />
            )
        }
    }

    // otp validation
    const validateAndSend = async () => {
        props.navigation.navigate('DetailScreen', {
            email: props.route.params.email,
            name: props.route.params.name,
            phone: props.route.params.phone
        })
    }

    // change state when timer stops
    const onFinish = () => {
        setSeparatorColor(theme.White)
        setDigitColor(theme.White)
        setColor(theme.White)
        setBorderColor(theme.White)
        setResend(true)
    }

    //resends otp
    const resendOtp = async () => {
        if (resend) {
            setId(id+ "a")
            setIsVisible(true)
        }
        setResend(false)
    }

    // render ui
    return (
            <View style={styles.container}>
                <Header />
                <View style={styles.headingContainer}>
                    <View style={{flexDirection: "row"}}>
                        <Text style={[styles.headingText]}>Verify</Text>
                        <Text style={[styles.headingText, {marginLeft: wp(2), color: theme.Default_Color}]}>E-Mail</Text>
                    </View>
                    <View style={{marginTop: hp(1)}}/>
                    <Text style={[styles.mediumText, {color: theme.Black}]}>A one time password has been sent to</Text>
                    <View style={{marginTop: hp(1)}}/>
                    <Text style={styles.headingText}>{props.route.params.email}</Text>
                    <View style={{marginTop: hp(1)}}/>
                    <TouchableOpacity style={{width: '15%'}} onPress={()=> {props.navigation.navigate("loginScreen")}}>
                        <Text style={[styles.smallText, {color: theme.Default_Color,textDecorationLine: 'underline'}]}>CHANGE</Text>
                    </TouchableOpacity>
                </View>

                <KeyboardAvoidingView style={styles.otpContainer}>
                    <TextInput
                        style={{
                            height: hp(10),
                            width: wp(80),
                            borderColor: error ? theme.errorRed : theme.Default_Color,
                            borderWidth: 1,
                            borderRadius: 7,
                            letterSpacing: 15,
                            fontSize: 48,
                            fontWeight: "500",
                            textAlign: 'center',
                            color: error ? theme.errorRed : theme.DarkGreen,
                            backgroundColor: error ? theme.Snow : theme.White,
                        }}
                        placeholder={"000000"}
                        placeholderTextColor={theme.Off_Gray}
                        maxLength={6}
                        keboard={'numeric'}
                        onChangeText={(val)=> {setInternalVal(val)}}
                        value={internalVal}
                        onKeyPress={(e) => {
                            if (e.nativeEvent.key == "Enter") {
                                setIsVisible(true)
                                validateAndSend()
                            }
                        }}
                        autoFocus={false}
                        onFocus={()=> {setError(false)}}
                    />
                    <View style={{height: hp(3)}}/>
                    <LoginButton
                        title={"VERIFY"}
                        onPress={()=> {validateAndSend()}}
                    />
                    <View style={{height: hp(3)}}/>
                    <ResendButton
                        id={id}
                        color={resend ? theme.DarkGreen : theme.Off_Gray}
                        borderColor={ resend ? theme.DarkGreen : theme.Off_Gray}
                        onFinish={() => {
                            onFinish()
                        }}
                        onPress={() => {
                            resendOtp()
                        }}
                        until={30}
                        width={wp(80)}
                        radius={7}
                    />
                </KeyboardAvoidingView>

                <KeyboardAvoidingView style={{position: 'fixed', bottom: hp(5), alignSelf: 'center', top: hp(95)}}>
                    <Text style={{color: "grey", fontFamily: theme.Default_font, fontWeight: '500'}}>
                        For Queries Contact us at hr@hr.in
                    </Text>
                </KeyboardAvoidingView>

                <View style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
                    {renderToastNotification()}
                </View>
            </View>
        );

}

export default VerificationScreen
