import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import Flexes from './components/Flexes';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);


    const addGoalHandler = (goal) => {
        // setCourseGoals([...courseGoals, enteredGoal] )

        // syntax gives the guaranteed latest snapshot vs direct declaration (above)
        setCourseGoals(currentGoals => [...currentGoals,
            { key: Math.random().toString(), value: goal }   
            //rand not best key in pdtn <= sometimes can repeat itself
        ])
    };

    const removeGoal = (goalId) => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter(goal => goal.key !== goalId);
        })
    }

  
    return (
        <View style={styles.screen}>
            
            <GoalInput 
                addGoalHandler={addGoalHandler}
            /> 

            <FlatList 
                data={courseGoals} 
                renderItem={itemData => (
                <GoalItem value={itemData.item.value} 
                    id={itemData.item.key}
                    onDelete={removeGoal}
                />)} 
            />

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
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }

});


/** ScrollView Example
 *  <ScrollView >
        {courseGoals.map((goal)=> (
            <View style={styles.listItem}key={goal}>
                <Text>{goal}</Text>
            </View>
        ))}
    </ScrollView>
 *
 */