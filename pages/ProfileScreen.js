import React, { Component, useState } from 'react';
import { View, StyleSheet  } from 'react-native';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"; //npm i react-router-dom 로 설치
import styled from 'styled-components';
//import { Text, Input, Button, ButtonGroup} from 'react-native-elements';

import Container from 'C:/Users/KKY/Desktop/SmartPT.v2-main/components/Container';
//import { ViewArraySharp } from '@material-ui/icons';

function ProfileScreen({ navigation }) {
  return (
      <Container>
         <View>
           <Link to="../components/Join">
             <button>가입하기</button>
            </Link>

         </View>
      </Container>

  );
  
}

export default ProfileScreen;
