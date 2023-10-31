import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home/Home';
import About from './Screens/About/About';
import Login from './Screens/Auth/Login';
import Signup from './Screens/Auth/Signup';
import Todos from './Screens/Todos/Todos';

const Stack = createNativeStackNavigator();

export default function App() {
  const handleNavButtonClick = () => {
    alert("navButtonClick");
  }
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Navigator screenOptions={{
          // title : "sourav",
          headerTitle: () => <Button onPress={handleNavButtonClick} title='navbar' />,
          headerTintColor: "skyblue",
          headerStyle: {
            backgroundColor: "pink"
          },
          headerTitleStyle: {
            fontSize: 30
          }
        }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='About' component={About} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Signup' component={Signup} />
          <Stack.Screen name='Todo' component={Todos}/>

        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
