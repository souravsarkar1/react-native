import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Counter from './src/components/Counter/Counter';
import Navigator from './routes/HomeStack'
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  const [text,setText] = useState("");
  
  const hanldeclick = ()=>{
    alert(text);
    setText(""); 
  }
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <Text>Todo App</Text>
      <TextInput
          style={{
            padding: 16,
            marginTop: 50,
           
          }}
           onChangeText={setText}
           value={text}
          placeholder={'Please type here…'}
        />
      <StatusBar style="auto" />
      <Button title='Add' onPress={hanldeclick}/>
      <Counter/>
      <Navigator/>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red.500',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input :{
    border : "2 solid gray",
    height : 3,
    width : 4
  } 
});
