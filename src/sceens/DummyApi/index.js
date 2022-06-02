import React, { useEffect, useState } from 'react'
import {View, Text} from 'react-native'
import {Card, Title, Paragraph } from 'react-native-paper';
import Header from '../../components/Header/Header';

const DummyApi= (props)=> {

    const[fact, setFact]= useState('')
    const[length, setLength]= useState('')

    useEffect(()=> {
        fetch(`https://catfact.ninja/fact`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then(async (responseJson) => {
                console.log(responseJson)
                setLength(responseJson.length)
                setFact(responseJson.fact)
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    return(
        <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
            <Header title={'DummyApi'}/>
            <Card>
                                <Card.Content>
                                    <Title>{'Fact - '}{fact}</Title>
                                    <Title>{'Length - '}{length}</Title>
                                </Card.Content>    
                            </Card>
        </View>
    )
}

export default DummyApi