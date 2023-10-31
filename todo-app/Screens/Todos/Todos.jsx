import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import axios from 'axios';

const Todos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
            setData(res.data);
        });
    }, []);
const handleCompleteTodos = ()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos?completed=true`).then((res) => {
        alert("complete todos");
        setData(res.data);
    })
}
const handleNotCompleteTodos = ()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos?completed=false`).then((res) => {
        alert("Not complete todos")
        setData(res.data);
    })
}
    const renderItem = ({ item }) => (
        <View style={styles.todoItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={item.completed ? styles.completedText : styles.notCompletedText}>
                {item.completed ? "Completed" : "Not Completed"}
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
        <Button title='Completed todos' color={"green"} onPress={handleCompleteTodos}/>
        <Button title='Not Completed todos' color={"red"} onPress={handleNotCompleteTodos}/>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    todoItem: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    completedText: {
        color: 'green',
    },
    notCompletedText: {
        color: 'red',
    },
});

export default Todos;
