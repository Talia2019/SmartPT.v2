import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions  } from 'react-native';
import styled from 'styled-components';
import {
    PieChart,
  } from "react-native-chart-kit";

  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };



  function PieChartContainer({navigation,route}) {
    return (
        <View>
            <Text>Pie Chart</Text>
            <PieChart
                data={data}
                width={Dimensions.get("window").width}
                height={150}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"pink"}
                center={[10, 50]}
                style={{
                  backgroundColor:'red',
                  borderRadius: 10,
                  
                }}
            />
        </View>
    );
    
}


export default PieChartContainer;