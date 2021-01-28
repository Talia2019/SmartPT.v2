import React,{useState}from 'react';
import { View, Text,StyleSheet  } from 'react-native';

function MonthChart( props ){  
    
    if(props.pick==="month"){
        return (
            <View>
            <Text> 월별 차트입니다.</Text>
            </View>
        );
    }
    else return null;
}


export default MonthChart;