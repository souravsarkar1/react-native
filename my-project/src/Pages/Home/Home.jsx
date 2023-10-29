import React from 'react'
import { Button, Text, View } from 'react-native'

const Home = ({navigation}) => {
    const pressHandler = () =>{
        navigation.navigate("Login");
    }
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title='go to login page' onPress={pressHandler}/>
    </View>
  )
}

export default Home
