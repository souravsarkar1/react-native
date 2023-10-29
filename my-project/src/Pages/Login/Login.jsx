import React from 'react'
import { Button, Text, View } from 'react-native'

const Login = ({ navigation }) => {
    const pressHandler = () => {
        navigation.goBack();
    }
    return (
        <View>
            <Text>Login</Text>
            <Button title='back to main page' onPress={pressHandler} />
        </View>
    )
}

export default Login
