import React from 'react';
import { SafeAreaView, Button, View, Text, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
    const handleRoute = (page) => {
        navigation.navigate(page);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={{ fontSize: 30 }}>Login Page</Text>
                <Button title='Back to HomePage' onPress={() => handleRoute("Home")} />
                <Button title='Back to SignupPage' onPress={() => handleRoute("Signup")} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Login;
