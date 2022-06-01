import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/Header/Header'
import {Card, Title, Paragraph } from 'react-native-paper';
import { styles } from './styles'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from 'react';

const DetailScreen= (props)=> {

    

    return(
        <View>
            <Header />
            <View style= {styles.contentView}>
               
                            <Card style={styles.card}>
                                <Card.Content>
                                    <Title>{props.route.params.name}</Title>
                                </Card.Content>    
                            </Card>
                            <Card style={styles.card}>
                                <Card.Content>
                                    <Title>{props.route.params.email}</Title>
                                </Card.Content>    
                            </Card>
                            <Card style={styles.card}>
                                <Card.Content>
                                    <Title>{props.route.params.phone}</Title>
                                </Card.Content>    
                            </Card>
            </View>
        </View>
    )
}

export default DetailScreen