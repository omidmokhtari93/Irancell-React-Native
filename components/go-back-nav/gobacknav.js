import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const { width, height } = Dimensions.get('window')

export const GoBackNav = props => {
    return <View style={styles.layout}>
        <TouchableOpacity style={styles.button}
            onPress={() => props.navigation.navigate(props.route)}>
            <Text style={styles.goback}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>
            {props.title}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    button: {
        width: width * 0.18,
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.1
    },
    goback: {
        fontSize: width * 0.12,
        marginBottom: height * 0.02
    }, layout: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: height * 0.1,
        backgroundColor: 'white'
    }, title: {
        flex: 1,
        textAlign: 'center',
        fontSize: width * 0.04,
        fontFamily: 'iransans',
        color: 'black',
        marginRight: width * 0.17
    }
})