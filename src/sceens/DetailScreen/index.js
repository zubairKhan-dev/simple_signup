/* print user detail */

import React from 'react'
import { View, Text, Button } from 'react-native'
import Header from '../../components/Header/Header'
import {Card, Title, Paragraph } from 'react-native-paper';
import { styles } from './styles'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from 'react';
import user_config from '../../data/user_config';
import theme from '../../util/theme';

const DetailScreen= (props)=> {

    console.log(user_config.user.username)

    

    return(
        <View style= {{flex: 1, alignItems: 'center'}}>
            <Header title={'Detail Screen'}/>
            <View style= {styles.contentView}>
                            <Card style={styles.card}>
                                <Card.Content>
                                    <Title>{'User Detail'}</Title>
                                    <Paragraph>{user_config.user.username}</Paragraph>
                                    <Paragraph>{user_config.user.password}</Paragraph>
                                    <Paragraph>{user_config.user.phone}</Paragraph> 
                                </Card.Content>    
                            </Card>
            </View>
    
            <View style= {{position: 'absolute', bottom: 50}}>
            <Button title="Go to dummy api"
                    color={theme.Default_Color}
                    onPress={()=> {props.navigation.navigate('DummyApiScreen')}}
            >
                
            </Button>
            </View>
            
        </View>
    )
}

export default DetailScreen