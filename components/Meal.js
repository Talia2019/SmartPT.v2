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
    nutrients:{
        width:170,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    nutrient:{
        alignItems:'center',
        backgroundColor:'pink',
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
                <View style={styles.nutrients}>
                    <View style={styles.nutrient}>
                        <Text>탄수화물</Text>
                        <Text>10.5g </Text>
                    </View>
                    <View style={styles.nutrient}>
                        <Text>단백질</Text>
                        <Text>10.5g </Text>
                    </View>
                    <View style={styles.nutrient}>
                        <Text>지방</Text>
                        <Text>10.2g </Text>
                    </View>
                </View>
            </View>
        </Container>

    );
    
}


export default MealContainer;
