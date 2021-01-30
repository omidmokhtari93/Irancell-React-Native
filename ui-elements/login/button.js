import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native"
var { width, height } = Dimensions.get('window');

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
        paddingVertical: width * 0.01,
        marginBottom: height * 0.05
    }, buttonTitle: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'iransans',
        fontSize: width * 0.06
    }
})