import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = ({ addGoalHandler }) => {

    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = (text) => {
        setEnteredGoal(text);
    };

    return(
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={()=>addGoalHandler(enteredGoal)} />
        </View>
    )
}
     
    
const styles = StyleSheet.create({
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

export default GoalInput;