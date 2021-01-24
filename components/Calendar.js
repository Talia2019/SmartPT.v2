import React, { Component } from 'react';
import { View, Text,StyleSheet  } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const breakfast = {key:'breakfast', color: 'red', selectedDotColor: 'blue'};
const lunch = {key:'lunch', color: 'blue', selectedDotColor: 'blue'};
const dinner = {key:'dinner', color: 'green'};

const Dates={
  '2021-01-25': {dots: [breakfast, lunch, dinner], selected: true, selectedColor: 'red'},
  '2021-01-26': {dots: [breakfast,lunch], disabled: true}
}

function CalenderContainer({ navigation }){
    
  return (
    <Calendar
        markedDates={Dates}
        markingType={'multi-dot'}
        onDayPress={ (day) => navigation.navigate("Agenda",{Day:day})}    
    >
    </Calendar>
  );
}


export default CalenderContainer;
