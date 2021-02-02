import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useState } from 'react/cjs/react.development'
import { withLoginNavigation } from '../../HOC/with-login-navigation'
import { withLayout } from '../../HOC/with-layout'
import { Button } from '../../ui-elements/OTP/button'
const { width, height } = Dimensions.get('window')

export const OtpComponent = ({ navigation }) => {
    const [opt, setOtp] = useState('')

    return <React.Fragment>
        <View style={styles.otp}>
            <Image
                resizeMode="contain"
                source={require('../../assets/images/login/autho.png')}
                style={styles.headerImage}
            />
            <Text style={styles.headetText}>
                رمز یکبار مصرف دریافت شده را وارد کنید :
            </Text>
            <TextInput
                onChangeText={setOtp}
                style={styles.input}
                placeholder="رمز یکبار مصرف"
            />
            <View style={styles.buttonArea}>
                <Button text="ارسال مجدد" style={{ marginRight: 20 }} handleClick={() => null} />
                <Button text="ورود" handleClick={() => navigation.navigate("HomePage")} />
            </View>
        </View>
    </React.Fragment>
}

export const OTP = withLoginNavigation(withLayout(OtpComponent))

const styles = StyleSheet.create({
    headetText: {
        fontFamily: 'iransans',
        fontSize: width * 0.04,
        color: 'black',
        textAlign: 'right'
    }, headerImage: {
        marginVertical: height * 0.01,
        alignSelf: 'center',
        width: width * 0.2
    }, otp: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: height * 0.03,
    }, input: {
        backgroundColor: '#e7e7e7',
        borderRadius: 5,
        fontFamily: 'iransans',
        alignSelf: 'stretch',
        height: height * 0.08,
        fontSize: width * 0.04,
        marginBottom: width * 0.04,
        paddingHorizontal: 20
    }, buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})