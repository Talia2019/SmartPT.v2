import React,{useState}from 'react';
import { View, Text,StyleSheet  } from 'react-native';

function WeekChart( props ){  
    
    if(props.pick==="week"){
        return (
            <View>
            <Text> 주별 차트입니다.</Text>
            </View>
        );
    }
    else return null;
}


export default WeekChart;