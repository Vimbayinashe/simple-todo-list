import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Flexes from './components/Flexes';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (text) => {
        setEnteredGoal(text);
    };

    const addGoalHandler = () => {
        console.log(enteredGoal);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course Goal"
                    style={styles.input} 
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title="ADD" onPress={addGoalHandler} />
            </View>

            <View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    input: {
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10, 
        width: '80%'
    }

});
