import React,{Component} from 'react';
import styled from 'styled-components';
import { View, Image, StyleSheet  } from 'react-native';
import { Text } from 'react-native-elements';
//Style 지정
const Container = styled.SafeAreaView`
    flex-direction : row;
    background-color : #ffffff;
    margin:2%;
    padding :1%;

`;

const styles = StyleSheet.create({
    explain:{
        marginLeft:10,
    },
    foodName:{
        fontWeight:'bold',
    },
    foodTime:{
        marginBottom:10,
    },
    nutrient:{
        flexDirection:'row',
    },
    image : {
        borderRadius : 5,
    }
});

function MealContainer({navigation,route}) {
    return (
        <Container>
            <View>
                <Image
                    style={styles.image}
                    source={require('../images/dog.jpg')}/>
            </View >
            <View style={styles.explain}>
                <Text style={styles.foodName}>음식 이름</Text>
                <Text style={styles.foodTime}>먹은 시간</Text>
                <Text>칼로리(10.5g)</Text>
                <View style={styles.nutrient}>
                    <Text>탄(10.5g) </Text>
                    <Text>단(10.5g) </Text>
                    <Text>지(10.5g)</Text>
                </View>
            </View>
        </Container>

    );
    
}


export default MealContainer;
