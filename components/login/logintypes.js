import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { withLayout } from '../../HOC/with-layout'
import { withLoginNavigation } from '../../HOC/with-login-navigation'
import { Button } from '../../ui-elements/login-types/button'
const { width, height } = Dimensions.get('window')


const LoginTypesComponent = ({ navigation }) => {
    const phone = navigation.state.params.phone
    const email = navigation.state.params.email
    return <React.Fragment>
        <View style={styles.otp}>
            <Image source={require('../../assets/images/login/autho.png')}
                resizeMode="contain"
                style={styles.headerImage} />
            <Text style={styles.headerText}>
                جهت ورود, روش دریافت رمز یکبار مصرف را انتخاب کنید:
            </Text>
            <Button
                text={`ارسال رمز یکبار مصرف به ${phone}`}
                handleClick={() => navigation.navigate("OTP")} />
            <Button
                text={`ارسال رمز یکبار مصرف به ${email}`}
                handleClick={() => navigation.navigate("OTP")} />
            <Button
                text={`ورود با رمز عبور ایرانسلی`}
                handleClick={() => navigation.navigate("OTP")}
            />
        </View>
    </React.Fragment>
}

export const LoginTypes = withLoginNavigation(withLayout(LoginTypesComponent))

const styles = StyleSheet.create({
    otp: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: height * 0.02,
    },
    headerText: {
        fontFamily: 'iransans',
        fontSize: width * 0.04,
        color: '#a5a5a5',
        textAlign: 'center',
        marginBottom: height * 0.01
    },
    headerImage: {
        marginVertical: height * 0.01,
        alignSelf: 'center',
        width: width * 0.2
    }
})