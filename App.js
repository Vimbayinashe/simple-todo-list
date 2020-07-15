import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Flexes from './components/Flexes';

export default function App() {
  return (
    <View style={{padding: 50}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <TextInput placeholder="Course Goal" 
                style={{borderColor: 'black', borderWidth: 1, padding: 10, width: '80%'}}/>
            <Button title="ADD" />
        </View>

        <View>
            <Flexes />
        </View>

    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
