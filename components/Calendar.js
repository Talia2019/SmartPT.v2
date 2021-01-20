import React, { Component } from 'react';
import { View, Text,StyleSheet  } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};

const Dates={
  '2021-01-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
  '2021-01-26': {dots: [massage, workout], disabled: true}
}

function CalenderScreen({ navigation }){
    
  return (
    <Calendar
        markedDates={Dates}
        markingType={'multi-dot'}
        onDayPress={ (day) => navigation.navigate("Agenda") }    
    >
    </Calendar>
        );
}


export default CalenderScreen;
