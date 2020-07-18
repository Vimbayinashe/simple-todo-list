import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = (text) => {
        setEnteredGoal(text);
    };

    const goalHandler = () => {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Cancel" color="red" onPress={props.closeGoalModal} /></View>
                    <View style={styles.button}><Button title="ADD" onPress={goalHandler} /></View>
                </View>
            </View>
        </Modal>
    )
}
     
    
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: 10
    }, 
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;