import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
const { width, height } = Dimensions.get('window')


export const Button = ({ handleClick, text, style }) => {
    return <TouchableOpacity
        style={{ ...styles.btn, ...style || null }}
        onPress={() => handleClick()}>
        <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
}


const styles = StyleSheet.create({
    btn: {
        flex: 1,
        alignItems: 'center',
        height: height * 0.08,
        justifyContent: 'center',
        backgroundColor: '#037fa3',
        borderRadius: 5
    }, btnText: {
        fontSize: width * 0.043,
        fontFamily: 'iransans',
        color: 'white'
    }
})