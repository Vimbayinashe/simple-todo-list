import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
// import Flexes from './components/Flexes';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);
    console.log(isAddMode);

    const addGoalHandler = (goal) => {
        // setCourseGoals([...courseGoals, enteredGoal] )

        // syntax gives the guaranteed latest snapshot vs direct declaration (above)
        setCourseGoals(currentGoals => [...currentGoals,
            { key: Math.random().toString(), value: goal }   
            //rand not best key in pdtn <= sometimes can repeat itself
        ]);
        setIsAddMode(false);
    };

    const removeGoal = (goalId) => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter(goal => goal.key !== goalId);
        })
    }

  
    return (
        <View style={styles.screen}>

            <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
            
            <GoalInput 
                addGoalHandler={addGoalHandler}
                visible={isAddMode}
            /> 

            <FlatList 
                // keyExtractor={(item, index) => item.id}
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