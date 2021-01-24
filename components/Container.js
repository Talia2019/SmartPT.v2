import React from 'react';
import styled from 'styled-components';
import {SafeAreaView} from 'react-native';
import Constants from 'expo-constants';

const Container = styled.SafeAreaView`
    flex : 1;
    padding-top : ${Constants.statusBarHeight}px; // 안드로이드 일때
`;


export default Container;