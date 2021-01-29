import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export const Forget = props => {
    return <View style={styles.layout}>
        <Image style={styles.irancellLogo} source={require('../../assets/images/login/irancell_new.png')} />
        <View>
            <Text style={styles.title}>شماره اینترنت ثابت را فراموش کرده ام</Text>
            <Text style={styles.subtitle}>
                کد IMEI مودم شما, در زیر/پشت دستگاه و همچنین بر روی جعبه مودم درج شده است
            </Text>
            <TextInput style={styles.input} />
            <Text style={styles.subtitle}>
                شماره ملی خود را وارد کنید
            </Text>
            <TextInput style={styles.input} />
            <View style={styles.buttonArea}>
                <TouchableOpacity style={styles.cancelButton}
                    onPress={() => props.navigation.navigate('Login', {})}>
                    <Text style={{ color: '#007da3', fontFamily: 'iransans', fontSize: 23 }}>انصراف</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendButton}>
                    <Text style={{ color: 'white', fontFamily: 'iransans', fontSize: 23 }}>ارسال</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    layout: {
        paddingHorizontal: 80,
        paddingVertical: 50,
        backgroundColor: '#e7e7e7',
        flex: 1
    },
    title: {
        color: 'black',
        fontFamily: 'iransans',
        fontSize: 35,
        fontWeight: '800',
        marginBottom: 30,
    }, subtitle: {
        color: 'black',
        fontFamily: 'iransans',
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 8,
    },
    irancellLogo: {
        width: 100,
        height: 100,
        marginBottom: 100
    }, input: {
        backgroundColor: 'white',
        height: 60,
        borderRadius: 5,
        fontFamily: 'iransans',
        paddingHorizontal: 20,
        fontSize: 20,
        marginBottom: 20
    }, buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    sendButton: {
        backgroundColor: '#007da3',
        height: 60,
        borderRadius: 5,
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }, cancelButton: {
        backgroundColor: 'white',
        height: 60,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#007da3'
    }
})