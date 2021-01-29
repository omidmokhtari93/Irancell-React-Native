import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'


export const YellowInput = props => {
    return <View>
        <TextInput
            style={styles.input}
            onChangeText={props.handleChange}
            placeholder={props.placeholder}
            value={props.value}
            secureTextEntry={props.secure || false}>
        </TextInput>
    </View>
}


const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 50,
        borderColor: '#e4c763',
        borderRadius: 100,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderWidth: 1,
        fontFamily: 'iransans',
        fontSize: 18,
        textAlign: 'center'
    }
})