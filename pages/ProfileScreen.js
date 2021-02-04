import React, { Component, useState } from 'react';
import { View, StyleSheet  } from 'react-native';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'; //npm i react-router-dom 로 설치
import styled from 'styled-components';
//import { Text, Input, Button, ButtonGroup} from 'react-native-elements';

import Container from '../components/Container';
import Register from '../components/Register';

//import { ViewArraySharp } from '@material-ui/icons';

const styles = StyleSheet.create({
   
});


function ProfileScreen({ navigation, Route }) {
  return (
      <Container>
         <View>
         <TouchableOpacity
                        onPress={()=> NavigationService.navigate('Register', {
                            screen: 'Register',
                            info: 'information'
                        })}
                        style={{
                            justifyContent: 'flex-end',
                            backgroundColor: 'rgb(87,174,198)',
                            padding: 20,
                            marginTop: 20,
                            borderRadius: 30
                        }}>
                        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>회원가입</Text>
                    </TouchableOpacity>
         </View>
      </Container>
    

  );
  
}

export default ProfileScreen;
