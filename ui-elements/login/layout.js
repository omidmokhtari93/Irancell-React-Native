import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from "react-native"
var { height, width } = Dimensions.get('window');

export const Layout = ({ children }) => {
    return <ScrollView style={styles.layout}>
        {children}
    </ScrollView>
}


const styles = StyleSheet.create({
    layout: {
        paddingHorizontal: width * 0.11,
        paddingVertical: height * 0.07,
        backgroundColor: '#e7e7e7',
        flex: 1
    },
})