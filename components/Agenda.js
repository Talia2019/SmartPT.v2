import React,{Component,useState} from 'react';
import styled from 'styled-components';
import { View,
         Text,
         StyleSheet,
         ScrollView,
} from 'react-native';
import ExpandableView from './ExpandableView';
import ModalContainer from './Modal';
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    floatIcon:{
        position:'absolute',
        right: 10,
        bottom: 10,
    },
});

function AgendaContainer({navigation,route}) {
    
    console.log(route);
    const Day = route.params.Day.dateString;
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text>{Day}</Text>
                <ExpandableView title="아침"></ExpandableView>
                <ExpandableView title="점심"></ExpandableView>
                <ExpandableView title="저녁"></ExpandableView>
                <ExpandableView title="간식"></ExpandableView>
            </ScrollView>
            <ModalContainer></ModalContainer>
        </View>
    );
    
}


export default AgendaContainer;
