import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"

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
        marginBottom: 50,
        width: 90,
    }, pillsImages: {
        width: 75,
        height: 75,
        marginBottom: 10
    }, pillsTitle: {
        fontFamily: 'iransans',
        color: 'black',
        width: 90,
        textAlign: 'center'
    }
})