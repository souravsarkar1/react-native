import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Counter from './src/components/Counter/Counter';
import Navigator from './routes/HomeStack'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from './src/Pages/Login/Login';
import Navbar from './src/components/Counter/Navbar/Navbar';
export default function App() {
  const [text, setText] = useState("");

  const hanldeclick = () => {
    alert(text);
    setText("");
  }
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <SafeAreaView>
        {/* <Text>Todo App</Text> */}
        {/* <Navbar/> */}
        {/* <TextInput
          style={{
            padding: 16,
            marginTop: 50,
           
          }}
           onChangeText={setText}
           value={text}
          placeholder={'Please type here…'}
        /> */}
        {/* <StatusBar style="auto" /> */}
        {/* <Button title='Add' onPress={hanldeclick}/> */}
        {/* <Counter/> */}
        {/* <Navigator /> */}
        <Login/>
      </SafeAreaView>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width : '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input: {
    border: "2 solid gray",
    height: 3,
    width: 4
  }
});
