import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { TextInput, Title } from 'react-native-paper';

const Login = ({ }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLoginButton = () => {
    if (!email || !password) {
      alert("Enter a valid emial and password");
    }
    else {
      alert({ email, password });
      setEmail("");
      setPassword("");
    }

  }
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Login</Title>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
        style={[styles.input, { width: 300, height: 50 }]}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        mode="outlined"
        style={[styles.input, { width: 300, height: 50 }]}
      />
      <View style={styles.buttonContainer}>
        <Button title='Login' mode="contained" style={styles.button} onPress={handleLoginButton} color={"green"}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Forget Password' mode="contained" style={styles.button} onPress={handleLoginButton} color={"red"}/>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
    width: 100
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: 300, // Set the width of the button container
    alignSelf: 'center', // Center the button horizontally
  },
});

export default Login;
