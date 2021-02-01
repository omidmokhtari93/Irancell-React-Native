import { Login } from '../components/login/login'
import { createStackNavigator } from 'react-navigation-stack'
import { LoginTypes } from '../components/login/logintypes'
import { DrawerNav } from './drawer-nav'
import { OTP } from '../components/login/otp'

export const StackNav = createStackNavigator(
    {
        Login: {
            screen: Login
        },
        LoginTypes: {
            screen: LoginTypes
        },
        OTP: {
            screen: OTP
        },
        MainApp: {
            screen: DrawerNav
        }
    },
    {
        initialRouteName: "Login",
        headerMode: 'none'
    }
)