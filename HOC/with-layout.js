import React, { Component } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
const { width, height } = Dimensions.get('window')


export const withLayout = WrappredComponent => {
    return class HOC extends Component {
        render() {
            return <ScrollView style={styles.layout}>
                <WrappredComponent {...this.props} />
            </ScrollView>
        }
    }
}

const styles = StyleSheet.create({
    layout: {
        paddingHorizontal: width * 0.11,
        paddingVertical: height * 0.07,
        backgroundColor: '#e7e7e7',
        flex: 1
    }
})