import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const Counter = () => {
    const [couter, setCounter] = useState(0);

    return (
        <View>
            <Text>{couter}</Text>
            <Button title='INC' onPress={() => setCounter(pre => pre + 1)} />
            <Button title='DEC' onPress={() => setCounter(pre => pre - 1)} />
        </View>
    )
}

export default Counter
