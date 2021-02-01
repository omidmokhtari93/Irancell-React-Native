import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { withLayout } from '../../HOC/with-layout'
import { withLoginNavigation } from '../../HOC/with-login-navigation'



const LoginTypesComponent = ({ navigation }) => {
    const phone = navigation.state.params.phone
    const email = navigation.state.params.email
    return <React.Fragment>
        <View style={styles.otp}>
            <Image source={require('../../assets/images/login/autho.png')} style={{ marginVertical: 50, alignSelf: 'center' }} />
            <Text style={{ fontFamily: 'iransans', fontSize: 20, color: '#a5a5a5', textAlign: 'center', marginBottom: 30 }}>
                جهت ورود, روش دریافت رمز یکبار مصرف را انتخاب کنید:
                </Text>
            <TouchableOpacity style={styles.btn}
                onPress={() => navigation.navigate('OTP')}>
                <Text style={styles.btnText}>ارسال رمز یکبار مصرف به {phone}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>ارسال رمز یکبار مصرف به {email}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>ورود با رمز عبور ایرانسلی</Text>
            </TouchableOpacity>
        </View>
    </React.Fragment>
}
export const LoginTypes = withLoginNavigation(withLayout(LoginTypesComponent))

const styles = StyleSheet.create({
    otp: {
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