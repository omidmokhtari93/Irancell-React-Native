import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { GoBackNav } from '../go-back-nav/gobacknav'



export const LoginTypes = props => {
    const phone = props.route.params.phone
    const email = props.route.params.email
    return <View style={{ flex: 1, backgroundColor: '#e7e7e7' }}>
        <GoBackNav navigation={props.navigation} route="Login" title={"ورود کاربران ایرانسل من"} />
        <View style={styles.layout}>
            <View style={styles.otp}>
                <Image source={require('../../assets/images/login/autho.png')} style={{ marginVertical: 50, alignSelf: 'center' }} />
                <Text style={{ fontFamily: 'iransans', fontSize: 20, color: '#a5a5a5', textAlign: 'center', marginBottom: 30 }}>
                    جهت ورود, روش دریافت رمز یکبار مصرف را انتخاب کنید:
                </Text>
                <TouchableOpacity style={styles.btn}
                    onPress={() => props.navigation.navigate('OTP')}>
                    <Text style={styles.btnText}>ارسال رمز یکبار مصرف به {phone}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>ارسال رمز یکبار مصرف به {email}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>ورود با رمز عبور ایرانسلی</Text>
                </TouchableOpacity>
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
    }, btn: {
        alignItems: 'center',
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#ffbe00',
        borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 10
    }, btnText: {
        fontSize: 20,
        fontFamily: 'iransans',
        color: 'black'
    }
})