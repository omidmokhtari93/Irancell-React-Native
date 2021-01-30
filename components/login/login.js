import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { Input } from '../../ui-elements/login/input'
import { LoginButton } from '../../ui-elements/login/button'
import { Pills } from '../../ui-elements/login/pills'
import { Layout } from '../../ui-elements/login/layout'
import { ForgetButton } from '../../ui-elements/login/forgetbutton'
import { Loading } from '../../ui-elements/login/loading'
var { width, height } = Dimensions.get('window');

const pills = [
    { image: require('../../assets/images/login/network.png'), text: 'خرید آنلاین بسته اینترنت' },
    { image: require("../../assets/images/login/rules.png"), text: 'مشاهده قوانین سرویس' },
    { image: require('../../assets/images/login/code.png'), text: 'کد دستوری' },
    { image: require('../../assets/images/login/simcard.png'), text: 'خرید آنلاین سیم کارت' }
]

export const Login = ({ navigation }) => {
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(false)

    const login = e => {
        if (!phone) {
            alert('شماره وارد شده معتبر نمی باشد')
            return
        }
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                setLoading(false)
                navigation.navigate('LoginTypes', {
                    phone: phone,
                    email: 'omid****@**hoo.com'
                })
            })
    }

    return <Layout>
        <Image
            resizeMode="cover"
            style={styles.irancellLogo}
            source={require('../../assets/images/login/irancell_new.png')}
        />
        <Text style={styles.loginTitle}>ورود</Text>
        <Input
            handleChange={setPhone}
            value={phone}
            placeholder="شماره همراه/وایمکس/اینترنت ثابت"
        />
        {loading
            ? <Loading />
            : <LoginButton handleClick={login} text="ورود"></LoginButton>}
        <View style={styles.pillsArea}>
            {pills.map(pill => <Pills
                key={pill.text}
                image={pill.image}
                text={pill.text}
            />)}
        </View>
        <ForgetButton
            handleClick={() => navigation.navigate('Forget')}
            text="شماره اینترنت ثابت را فراموش کرده ام"
        />
    </Layout>
}

const styles = StyleSheet.create({
    loginTitle: {
        color: 'black',
        fontFamily: 'iransans',
        fontSize: width * 0.06,
        fontWeight: '800',
        marginBottom: 8,
        paddingRight: 20
    },
    irancellLogo: {
        width: width * 0.2,
        height: width * 0.2,
        marginBottom: height * 0.08,
    }, pillsArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25
    }
})