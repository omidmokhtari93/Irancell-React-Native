import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"
const { width, height } = Dimensions.get('window')

export const ForgetButton = ({ handleClick, text }) => {
    return <View style={styles.forgetArea}>
        <TouchableOpacity onPress={() => handleClick()}>
            <Text style={styles.forgetAreaText}>
                {text}
            </Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    forgetArea: {
        backgroundColor: '#fff1d6',
        marginHorizontal: 25,
        padding: height * 0.02,
        borderRadius: 10
    }, forgetAreaText: {
        fontFamily: 'iransans',
        color: '#50a2b5',
        borderBottomColor: '#50a2b5',
        borderBottomWidth: 1,
        alignSelf: 'flex-end',
        fontSize: width * 0.026
    }
})