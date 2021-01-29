import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Header } from '../header/header'


export const Home = props => {
    return <View>
        <Header />
        <View style={styles.view}>
            <TouchableOpacity style={{ margin: 128 }}
                onPress={() => props.navigation.navigate('Login', { name: '' })}>
                <Text>This is HOME!</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    view: {
        padding: 10
    }
})