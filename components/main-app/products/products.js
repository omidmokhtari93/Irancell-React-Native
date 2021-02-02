import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native'


const list = [
    { id: 1, name: 'product number 1' },
    { id: 2, name: 'product number 2' },
    { id: 3, name: 'product number 3' },
    { id: 4, name: 'product number 4' },
    { id: 5, name: 'product number 5' },
]

export const Products = props => {
    const [quantity, setQuantity] = useState(0)
    const addToCart = e => {
        alert(e)
    }
    return <View>
        {list.map(x => {
            return <TouchableOpacity
                style={styles.item}
                key={x.id}
                onPress={() => addToCart(x.id)}>
                <Text>{x.name}</Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="تعداد"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={setQuantity}
                />
            </TouchableOpacity>
        })}
    </View>
}

const styles = StyleSheet.create({
    item: {
        alignItems: 'flex-end',
        backgroundColor: '#f0eff5',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 15
    }, input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        width: 150
    }
})