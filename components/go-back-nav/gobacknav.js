import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export const GoBackNav = props => {
    return <View style={styles.layout}>
        <TouchableOpacity style={{ width: 70, height: 80 }}
            onPress={() => props.navigation.navigate(props.route)}>
            <Text style={styles.goback}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>
            {props.title}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    goback: {
        fontSize: 60,
        position: 'absolute',
        top: -8,
        left: 30
    }, layout: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        backgroundColor: 'white'
    }, title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 23,
        fontFamily: 'iransans',
        color: 'black'
    }
})