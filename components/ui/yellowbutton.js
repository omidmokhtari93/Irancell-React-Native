import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export const YellowButton = props => {
    return <View>
        <TouchableOpacity style={styles.button} onPress={props.handleClick}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ffcc00',
        paddingVertical: 8,
        margin: 15,
        height: 50,
        alignItems: 'center',
        borderRadius: 100,
    }, buttonText: {
        color: 'black',
        fontFamily: 'iransans',
        fontSize: 18
    }
})