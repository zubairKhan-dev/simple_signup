import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    ImageBackground,
    Dimensions,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity,
    Linking
} from "react-native";
import {styles} from "./styles";
import theme from "../../util/theme";
import LoginInput from "../../components/LoginInput/LoginInput";
import LoginButton from "../../components/LoginButton/LoginButton";
import validators from "../../util/validators";
import AsyncStorage from "@react-native-async-storage/async-storage";
import user_config from "../../data/user_config";

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

function hp(percentage) {
    const value = (percentage * viewportHeight) / 100;
    return Math.round(value);
}

const Login = (props) => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [num, setNum] = useState("")
    const [quizId, setQuizId] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const [nameVer, setNameVer] = useState(true)
    const [emailVer, setEmailVer] = useState(true)
    const [phoneVer, setPhoneVer] = useState(true)

    


    // setting the quiz uid to the local storage and navigating to error screen if not found
    useEffect(async () => {
        if (!AsyncStorage.getItem('user')) AsyncStorage.setItem('user', user_config.user)
    }, [])

    console.log(AsyncStorage.getItem('user'))





    // Validating if user input full name or not
    const nameValidation = (name) => {
        let str = name.trim()
        let arr = str.split(" ")
        if (arr.length > 1 && name.match(validators.name)) {
            return true
        } else {
            return false
        }
    }

    // Validating email
    const emailValidation = (email) => {
        if (email.match(validators.email)) {
            setEmailVer(true)
            return true
        } else {
            setEmailVer(false)
            return false
        }
    }

    // Validating phone num
    const phoneValidation = (num) => {
        if (num.match(validators.phone)) {
            setPhoneVer(true)
            return true
        } else {
            setPhoneVer(false)
            return false
        }
    }

    // Send otp
    const sendOtp = () => {
        const user = AsyncStorage.getItem('user')

        if (emailValidation(email) && nameValidation(name) && phoneValidation(num)) {
            user.username= name
            user.email= email
            user.phone= num
            let new_user = user
            AsyncStorage.setItem('user', JSON.stringify(new_user))
            console.log(new_user)
            
            props.navigation.navigate("VerificationScreen", {
                                name: name,
                                email: email,
                                phone: num
                            })

        } else if (!nameValidation(name)) {
            setNameVer(false)
            
        } else if (!emailValidation(email)) {
            setEmailVer(false)
           
        } else if (!phoneValidation(num)) {
            setPhoneVer(false)
         
        }
        else if (!emailValidation(email) && !nameValidation(name) && !phoneValidation(num)) {
            setEmailVer(false)
            setNameVer(false)
            setPhoneVer(false)
        }
    }

    // rendering UI
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/images/union1.svg")} style={styles.imageBackground}/>
            <View style={styles.headingContainer}>
                <Text style={{fontFamily: theme.Default_font, fontSize: 16, fontWeight: '500'}}>Welcome to</Text>
                <Text style={{fontFamily: theme.Default_font, fontSize: 36, fontWeight: 'bold'}}>MyApp</Text>
            </View>

            <KeyboardAvoidingView style={styles.loginContainer}>
                <Text style={{
                    fontFamily: theme.Default_font,
                    fontSize: 16,
                    fontWeight: '600',
                    color: theme.Default_Color,
                    letterSpacing: 1
                }}>
                    SIGNUP
                </Text>
                <View style={{height: hp(2.5)}}/>
                <Text style={{
                    paddingVertical: 10,
                    fontSize: 12,
                    fontWeight: '600',
                    color: nameVer ? "black" : theme.errorRed
                }}>
                    {nameVer ? "FULL NAME" : "Please enter your full name !!"}
                </Text>
                <LoginInput
                    borderColor={nameVer ? theme.Default_Color : theme.errorRed}
                    backgroundColor={nameVer ? null : theme.Snow}
                    placeholder={"John Doe"}
                    onChangeText={(val) => {
                        setNameVer(true)
                        setName(val)
                    }}
                    value={name}
                />
                <View style={{height: hp(2.5)}}/>
                <Text style={{
                    paddingVertical: 10,
                    fontSize: 12,
                    fontWeight: '600',
                    color: emailVer ? "black" : theme.errorRed
                }}>
                    {emailVer ? "EMAIL" : "Please enter valid email !!"}
                </Text>
                <LoginInput
                    placeholder={"johndoe@gmail.com"}
                    backgroundColor={emailVer ? null : theme.Snow}
                    borderColor={emailVer ? theme.Default_Color : theme.errorRed}
                    onChangeText={(val) => {
                        setEmailVer(true)
                        setEmail(val)
                    }}
                    value={email}
                />
                <View style={{height: hp(2.5)}}/>
                <Text style={{
                    paddingVertical: 10,
                    fontSize: 12,
                    fontWeight: '600',
                    color: phoneVer ? "black" : theme.errorRed
                }}>
                    {phoneVer ? "PHONE NUMBER" : "Please enter correct phone number !!"}
                </Text>
                <LoginInput
                    borderColor={phoneVer ? theme.Default_Color : theme.errorRed}
                    backgroundColor={phoneVer ? null : theme.Snow}
                    placeholder={"+91 9646586545"}
                    onChangeText={(val) => {
                        setPhoneVer(true)
                        setNum(val)
                    }}
                    value={num}
                    keyboardType={'numeric'}
                />
                <View style={{height: hp(2.5) + 10}}/>
                <LoginButton title={"LETS START"} onPress={() => {
                    setIsVisible(true)
                    sendOtp()
                }}/>
            </KeyboardAvoidingView>
        </View>
    )

}

export default Login
