import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Home } from './components/home/home'
import { Login } from './components/login/login'
import { Products } from './components/products/products'
import { Forget } from './components/login/forget';
import { OTP } from './components/login/otp';
import { LoginTypes } from './components/login/logintypes';

const rootNaviagtor = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    LoginTypes: {
      screen: LoginTypes,
    },
    OTP: {
      screen: OTP
    },
    Login: {
      screen: Login
    },
    Forget: {
      screen: Forget
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)
const AppContainer = createAppContainer(rootNaviagtor)

export default function App() {
  return <AppContainer />
}
