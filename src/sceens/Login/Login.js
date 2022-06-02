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
    const [password, setPassword] = useState("")
    const [num, setNum] = useState("")
    const [quizId, setQuizId] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const [nameVer, setNameVer] = useState(true)
    const [passVer, setPassVer] = useState(true)
    const [phoneVer, setPhoneVer] = useState(true)


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

    // Validating password
    const passwordValidation = (password) => {
        if (password.match(validators.password)) {
            setPassVer(true)
            return true
        } else {
            setPassVer(false)
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

        if (passwordValidation(password) && nameValidation(name) && phoneValidation(num)) {
            user_config.user.username= name
            user_config.user.password= password
            user_config.user.phone= num
            //AsyncStorage.setItem('user_config', user_config)
            
            props.navigation.navigate("VerificationScreen", {
                                name: name,
                                phone: num
                            })

        } else if (!nameValidation(name)) {
            setNameVer(false)
            
        } else if (!passwordValidation(password)) {
            setPassVer(false)
           
        } else if (!phoneValidation(num)) {
            setPhoneVer(false)
         
        }
        else if (!passwordValidation(password) && !nameValidation(name) && !phoneValidation(num)) {
            setPassVer(false)
            setNameVer(false)
            setPhoneVer(false)
        }
    }

    console.log(user_config)

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
                    color: passVer ? "black" : theme.errorRed
                }}>
                    {passVer ? "PASSWORD" : "Please enter valid password !!"}
                </Text>
                <LoginInput
                    placeholder={"******"}
                    backgroundColor={passVer ? null : theme.Snow}
                    borderColor={passVer ? theme.Default_Color : theme.errorRed}
                    onChangeText={(val) => {
                        setPassVer(true)
                        setPassword(val)
                    }}
                    value={password}
                    secureTextEntry= {true}
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
