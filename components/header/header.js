import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'


export const Header = props => {
    return <View style={styles.topHeader}>
        {/* <Image style={styles.image} source={require('./irancell_new.png')} /> */}
    </View>
}

const styles = StyleSheet.create({
    topHeader: {
        backgroundColor: '#ffcc00',
        padding: 15,
        height: 80,
        position: 'relative',
        marginBottom: 5
    },
    image: {
        width: null,
        height: null,
        resizeMode: 'contain',
        flex: 1
    }
})