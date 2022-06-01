import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image, ActivityIndicator} from 'react-native'
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

const Header= (props)=> {

    return(
        <View style={styles.container}>
            <View style={{position: 'absolute', left: wp(5)}}>
                
            </View>
            {props.timer ?
                <View style={{position: 'absolute', right: wp(10)}}>
                    <View style={{height: hp(10), justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        <Image source={require('../../assets/images/vector5.png')} style={{height: 20*0.75, width: 20*0.75}}/>
                        <View style={{marginLeft: wp(7.5)}}/>
                        {props.isTime ?
                            <CountDown
                                until={props.until}
                                //until={900}
                                //onFinish={() => alert('finished')}
                                size={15}
                                timeToShow={props.isHour ? ['H', 'M'] : ['M', 'S']}
                                digitTxtStyle={{color: theme.Black}}
                                timeLabels={{h: '', m: ''}}
                                onFinish={props.onFinish}
                                showSeparator={true}
                                style={{borderRadius: 3, width: wp(7)}}
                                digitStyle={{width: wp(8)}}
                                separatorStyle={{color: theme.Black}}
                            />
                            :
                            <><ActivityIndicator size='small'/></>
                        }
                    </View>

                </View>
                :
                <></>
            }
        </View>
    )
}

export default Header

const styles= StyleSheet.create({
    container: {
        height: hp(10),
        backgroundColor: theme.White,
        elevation: 7,
        shadowColor: '#808080',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 7,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: '100%'
    }
})
