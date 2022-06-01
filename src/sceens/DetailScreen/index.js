import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/Header/Header'
import {Card, Title, Paragraph } from 'react-native-paper';
import { styles } from './styles'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from 'react';

const DetailScreen= (props)=> {

    const user = AsyncStorage.getItem('user')

    const[data, setData] = useState({})

    useEffect(()=> {
        

        user.then( response => {
            console.log(response.username);
            setData(response)
          });

    }, [])

    

    return(
        <View>
            <Header />
            <View style= {styles.DetailScreen}>
               
                            <Card style={styles.card}>
                                <Card.Content>
                                    <Title>{data.username}</Title>
                                </Card.Content>    
                            </Card>
                            <Card style={styles.card}>
                                <Card.Content>
                                    <Title>{user.email}</Title>
                                </Card.Content>    
                            </Card>
                            <Card style={styles.card}>
                                <Card.Content>
                                    <Title>{user.phone}</Title>
                                </Card.Content>    
                            </Card>
            </View>
        </View>
    )
}

export default DetailScreen