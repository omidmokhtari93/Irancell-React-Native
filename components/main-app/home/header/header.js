import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const { width, height } = Dimensions.get('window')

export const Header = ({ navigation }) => {
    return <React.Fragment>
        <View style={styles.header}>
            <TouchableOpacity>
                <Text style={styles.drawerToggler}>1</Text>
            </TouchableOpacity>
            <View>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Text style={styles.drawerToggler}>☰</Text>
                </TouchableOpacity>
            </View>
        </View>
    </React.Fragment>
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        height: height * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: height * 0.01

    }, drawerToggler: {
        color: 'white',
        fontSize: height * 0.07
    }
})