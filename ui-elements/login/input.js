import React from 'react'
import { Dimensions, StyleSheet, TextInput } from "react-native"
const { width, height } = Dimensions.get('window')

export const Input = ({ value, placeholder, handleChange }) => {
    return <TextInput
        style={styles.input}
        onChangeText={value => handleChange(value)}
        value={value}
        placeholder={placeholder || ''}
    ></TextInput>
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        height: height * 0.08,
        borderRadius: 5,
        fontFamily: 'iransans',
        paddingHorizontal: 20,
        fontSize: width * 0.04,
        marginBottom: width * 0.04
    }
})