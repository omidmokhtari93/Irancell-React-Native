import React from 'react'
import { StyleSheet, TextInput } from "react-native"

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
        height: 70,
        borderRadius: 5,
        fontFamily: 'iransans',
        paddingHorizontal: 20,
        fontSize: 20,
        marginBottom: 20
    }
})