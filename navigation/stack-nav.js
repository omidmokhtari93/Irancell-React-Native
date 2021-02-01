import { Login } from '../components/login/login'
import { createStackNavigator } from 'react-navigation-stack'
import { LoginTypes } from '../components/login/logintypes'
import { DrawerNav } from './drawer-nav'

export const StackNav = createStackNavigator(
    {
        Login: {
            screen: Login
        },
        LoginTypes: {
            screen: LoginTypes
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