import React, { Component,useState } from 'react';
import { View, Text,StyleSheet  } from 'react-native';
import styled from 'styled-components';
import {ButtonGroup} from 'react-native-elements';
import LineChartContainer from '../components/LineChart';
import PieChartContainer from '../components/PieChart';
import MealChart from '../components/MealChart';
import ExerciseChart from '../components/ExerciseChart';
import Container from '../components/Container';
import { ViewArraySharp } from '@material-ui/icons';

const Content = styled.View`
  margin:3%;
`;
const MealContainer =  styled.View`
    display : ${props => props.selectedPage.mealDisplay};
`;
const ExerciseContainer = styled.View`
    display : ${props => props.selectedPage.exerciseDisplay};
`;

function StatisticScreen({props}) {
  
  const pageButtons=['운동','식단'];
  // const [selectedPage,setSelectedPage] = useState(0); 
  
  const [selectedPage,setSelectedPage] = useState({
    index:0,
    exerciseDisplay:'flex',
    mealDisplay:'none',
  });
  const showPage = (selected) =>{
    if(selected===0){
      setSelectedPage({
        index:0,
        exerciseDisplay:'flex',
        mealDisplay:'none',
      });
    }
    else 
    setSelectedPage({
      index:1,
      exerciseDisplay:'none',
      mealDisplay:'flex',
    });
  }
  return (
    <Container>

      <ButtonGroup
          buttons={pageButtons}
          selectedIndex={selectedPage}
          onPress={showPage}
      />
      <View>
        <MealContainer selectedPage={selectedPage}>
          <MealChart></MealChart>
        </MealContainer>

        <ExerciseContainer selectedPage={selectedPage}>
          <ExerciseChart></ExerciseChart>
        </ExerciseContainer>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StatisticScreen;
