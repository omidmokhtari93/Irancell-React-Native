import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Header } from './header/header'

export const Home = ({ navigation }) => {
    //console.log(navigation.openDrawer());
    return <React.Fragment>
        <Header navigation={navigation} />
    </React.Fragment>
}

const styles = StyleSheet.create({
    view: {
        padding: 10
    }
})