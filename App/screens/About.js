import React from 'react'
import { View } from 'react-native'
import Header from '../components/header'

export default function About(props) {
    return (
        <View>
            <Header page={'About'} navigation={props.navigation}/>
        </View>
    )
}
