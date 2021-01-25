import React, { Component } from 'react';
import { View, Text,StyleSheet  } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';

import Container from '../components/Container';
import Calendar from '../components/Calendar';
import Agenda from '../components/Agenda';

const Stack = createStackNavigator();

const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};

const Dates={
  '2021-01-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
  '2021-01-26': {dots: [massage, workout], disabled: true}
}

function CalenderScreen({ navigation }){
    
  return (
    <Container>
      <Stack.Navigator>
        <Stack.Screen name="Calendar" component={Calendar}></Stack.Screen>
        <Stack.Screen name="Agenda" component={Agenda}></Stack.Screen>
      </Stack.Navigator>      
    </Container>
        );
}


export default CalenderScreen;
