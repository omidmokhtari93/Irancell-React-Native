import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './components/home/home'
import { Login } from './components/login/login'
import { Products } from './components/products/products'
import { Forget } from './components/login/forget';
import { OTP } from './components/login/otp';
import { LoginTypes } from './components/login/logintypes';

const Stack = createStackNavigator()

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Forget" component={Forget} options={{ headerShown: false }} />
      <Stack.Screen name="LoginTypes" component={LoginTypes} options={{ headerShown: false }} />
      <Stack.Screen name="OTP" component={OTP} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Products" component={Products} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }, main: {
    marginTop: 50
  }
});
