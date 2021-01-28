import React,{useState}from 'react';
import { View, Text,StyleSheet,SafeAreaView  } from 'react-native';
import styled from 'styled-components';
import {Picker} from '@react-native-picker/picker';
import DayChart from './MealCharts/DayChart';
import WeekChart from './MealCharts/WeekChart';
import MonthChart from './MealCharts/MonthChart';

const Container = styled.SafeAreaView`
    flex : 1;
`;
const styles = StyleSheet.create({
    picker:{
        width:60,
        height:50,
        marginTop:-10
    }
});

function MealChart({ navigation }){  
    const [pickItems,setPickItems] = useState("day");
    return (
        <Container>
            <Picker
            selectedValue={pickItems}
            style={styles.picker}
            onValueChange={(itemValue) =>
                setPickItems(itemValue)
            }>
                <Picker.Item label="일" value="day" />
                <Picker.Item label="주" value="week" />
                <Picker.Item label="월" value="month" />
            </Picker>
            <DayChart pick={pickItems}></DayChart>
            <WeekChart pick={pickItems}></WeekChart>
            <MonthChart pick={pickItems}></MonthChart>
            
            
        </Container>
    );
}


export default MealChart;
