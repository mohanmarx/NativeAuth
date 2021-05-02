import React from 'react'
import { View } from 'react-native'
import Header from '../components/header'

export default function Home(props) {
    return (
        <View>
            <Header page={'Home'} navigation={props.navigation}/>
        </View>
    )
}
