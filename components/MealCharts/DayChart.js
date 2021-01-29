import React,{useState}from 'react';
import { View, Text,StyleSheet  } from 'react-native';
import PieChartContainer from '../Charts/PieChart';
import LineChartContainer from '../Charts/LineChart';
import styled from 'styled-components';

function DayChart( props ){  
    
    if(props.pick==="day"){
        return (
            <View>
                <PieChartContainer></PieChartContainer>
            </View>
        );
    }
    else return null;
}


export default DayChart;
