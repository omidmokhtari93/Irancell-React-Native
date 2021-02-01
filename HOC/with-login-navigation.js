import React, { Component } from 'react'
import { View } from 'react-native'
import { GoBackNav } from '../components/go-back-nav/gobacknav'



export const withLoginNavigation = WrappedComponenet => {
    return class HOC extends Component {
        render() {
            return <View style={{ flex: 1, backgroundColor: '#e7e7e7' }}>
                <GoBackNav navigation={this.props.navigation}
                    route="Login"
                    title={"ورود کاربران ایرانسل من"}
                />
                <WrappedComponenet {...this.props} />
            </View>
        }
    }
}