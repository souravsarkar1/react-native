import React from 'react';
import { SafeAreaView, Button, View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native';

const Home = ({ navigation }) => {
    const handleRoute = (page) => {
        navigation.navigate(page);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <Text style={{ fontSize: 30 }}>Hey Well Come To My Web</Text>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTacJ-ij3c5gMEz1HtqicuvorUYzfm9oyyxRi7QMz5Kq8f9bX1URv4jdhTcZTcOzi4tdCCQ6pYHtdLC9yU' }}
                    />
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTacJ-ij3c5gMEz1HtqicuvorUYzfm9oyyxRi7QMz5Kq8f9bX1URv4jdhTcZTcOzi4tdCCQ6pYHtdLC9yU' }}
                    />
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTacJ-ij3c5gMEz1HtqicuvorUYzfm9oyyxRi7QMz5Kq8f9bX1URv4jdhTcZTcOzi4tdCCQ6pYHtdLC9yU' }}
                    />
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTacJ-ij3c5gMEz1HtqicuvorUYzfm9oyyxRi7QMz5Kq8f9bX1URv4jdhTcZTcOzi4tdCCQ6pYHtdLC9yU' }}
                    />
                    <TextInput placeholder='enter your text'/>
                    <Button color={"red"} title='Back to Aboutpage' onPress={() => handleRoute("About")} />
                    <Button title='Back to Loginpage' onPress={() => handleRoute("Login")} />
                    <Button title='Back to Signuppage' onPress={() => handleRoute("Signup")} />
                    <Button title='Back to Todopage' onPress={() => handleRoute("Todo")} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        padding: 20,
        margin: 20,
    },
});

export default Home;
