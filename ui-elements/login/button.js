import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from "react-native"


export const LoginButton = ({ handleClick, text }) => {
    return <TouchableOpacity
        style={styles.loginButton}
        onPress={() => handleClick()}
    >
        <Text style={styles.buttonTitle}>{text}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: '#0180a3',
        paddingVertical: 10,
        marginBottom: 40
    }, buttonTitle: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'iransans',
        fontSize: 30
    }
})