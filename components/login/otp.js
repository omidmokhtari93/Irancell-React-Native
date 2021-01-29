import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useState } from 'react/cjs/react.development'
import { GoBackNav } from '../go-back-nav/gobacknav'


export const OTP = props => {
    const [opt, setOtp] = useState('')
    return <View style={{ flex: 1, backgroundColor: '#e7e7e7' }}>
        <GoBackNav navigation={props.navigation} route="LoginTypes" title={"ورود کاربران ایرانسل من"} />
        <View style={styles.layout}>
            <View style={styles.otp}>
                <Image source={require('../../assets/images/login/autho.png')} style={{ marginVertical: 50, alignSelf: 'center' }} />
                <Text style={{ fontFamily: 'iransans', fontSize: 20, color: 'black', textAlign: 'right' }}>
                    رمز یکبار مصرف دریافت شده را وارد کنید :
                </Text>
                <TextInput
                    onChangeText={setOtp}
                    style={styles.input}
                    placeholder="رمز یکبار مصرف"
                />
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={{ ...styles.btn, marginRight: 20 }}>
                        <Text style={styles.btnText}>ارسال مجدد</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>ورود</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
}


const styles = StyleSheet.create({
    layout: {
        padding: 30,
    }, otp: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    }, input: {
        backgroundColor: '#e7e7e7',
        borderRadius: 5,
        fontFamily: 'iransans',
        alignSelf: 'stretch',
        height: 60,
        fontSize: 20,
        marginBottom: 20,
        paddingHorizontal: 20
    }, buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }, btn: {
        flex: 1,
        alignItems: 'center',
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#037fa3',
        borderRadius: 5
    }, btnText: {
        fontSize: 23,
        fontFamily: 'iransans',
        color: 'white'
    }
})