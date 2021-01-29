import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import { Header } from '../header/header'
import { Home } from '../home/home'
import { Login } from '../login/login'


export const Routes = props => {
    return <Router>
        <Scene key="root">
            <Scene key="nav" component={Header} initial hideNavBar >
                <Scene key="home" component={Home} hideNavBar />
                <Scene key="login" component={Login} hideNavBar />
            </Scene>
        </Scene>
    </Router>
}