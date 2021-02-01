import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
const { width, height } = Dimensions.get('window')

export const Button = ({ handleClick, text }) => {
    return <TouchableOpacity
        style={styles.btn}
        onPress={() => handleClick()}>
        <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        height: height * 0.07,
        justifyContent: 'center',
        backgroundColor: '#ffbe00',
        borderRadius: 5,
        marginHorizontal: width * 0.01,
        marginVertical: height * 0.01
    }, btnText: {
        fontSize: width * 0.03,
        fontFamily: 'iransans',
        color: 'black'
    }
})