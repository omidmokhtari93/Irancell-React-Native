import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity } from "react-native"
const { width, height } = Dimensions.get('window')

export const Pills = ({ handleClick, image, text }) => {
    return <TouchableOpacity
        onPress={handleClick}
        style={styles.pills}>
        <Image style={styles.pillsImages} source={image} />
        <Text style={styles.pillsTitle}>{text}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    pills: {
        alignItems: 'center',
        marginBottom: height * 0.07,
        width: width * 0.1,
    }, pillsImages: {
        width: width * 0.16,
        height: width * 0.16,
        marginBottom: height * 0.01
    }, pillsTitle: {
        fontFamily: 'iransans',
        color: 'black',
        width: width * 0.17,
        textAlign: 'center',
        fontSize: width * 0.026
    }
})