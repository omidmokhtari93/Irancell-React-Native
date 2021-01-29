import React from 'react'
import { StyleSheet, View } from "react-native"


export const Layout = ({ children }) => {
    return <View style={styles.layout}>
        {children}
    </View>
}


const styles = StyleSheet.create({
    layout: {
        paddingHorizontal: 80,
        paddingVertical: 50,
        backgroundColor: '#e7e7e7',
        flex: 1
    },
})