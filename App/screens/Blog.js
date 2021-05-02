import React from 'react'
import { View } from 'react-native'
import Header from '../components/header'

export default function Blog(props) {
    return (
        <View>
            <Header page={'Blog'} navigation={props.navigation}/>
        </View>
    )
}
