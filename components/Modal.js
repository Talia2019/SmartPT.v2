import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
} from "react-native";
import {
  Icon,
  Text,
  Input,
  ButtonGroup,
  Button
} from 'react-native-elements';

//import DateTimePicker from '@react-native-community/datetimepicker';

import styled from 'styled-components';
import CameraContainer from './Camera';

const styles = StyleSheet.create({
  floatIcon:{
    position:'absolute',
    right: 10,
    bottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width:"95%",
    alignItems: "center",
    margin: 20,
    backgroundColor: "pink",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  imageView:{
    alignItems:'center',
  },
  image:{
    width:250,
    height:250,
    marginBottom:'2%',
  },
  labelstyle:{
    fontSize:15,
  },
  inputstyle:{
    fontSize:10
  },
  input:{
    backgroundColor:'white',
    
    width:300,
    height:70,
    marginBottom:0,
  },
  buttonGroup:{
    width:300,
    marginLeft:0,
  }
});

const ModalContainer = () => {
  const amountButtons = ['1/2인분', '1인분', '2인분'] ;
  const TimeButtons=['아침','점심','저녁','간식'];
  // const [date, setDate] = useState(new Date());
  // const [mode, setMode] = useState('time');
  // const [show, setShow] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAmount,setSelectedAmount] = useState(0);
  const [selectedTime,setSelectedTime] = useState(0);
  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  //   console.log(date);
  // };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };

  return (
    <View style={styles.centeredView}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
              Alert.alert("Modal has been closed.");
          }}
      >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableHighlight 
                style={styles.imageView}
                onPress={()=>{console.log("^^")}}>
                <Image
                    style={styles.image}
                    source={require('../images/dog.jpg')}/>
              </TouchableHighlight>
              <Input
                label="음식 이름"
                placeholder='음식 이름을 입력하세요'
                labelStyle={styles.labelstyle}
                inputStyle={styles.inputstyle}
                containerStyle={styles.input}
              />
              <ButtonGroup
                buttons={TimeButtons}
                selectedIndex={selectedTime}
                onPress={selectedTime=> setSelectedTime(selectedTime)}
                containerStyle={styles.buttonGroup}
              />
              <ButtonGroup
                buttons={amountButtons}
                selectedIndex={selectedAmount}
                onPress={selectedAmount=> setSelectedAmount(selectedAmount)}
                containerStyle={styles.buttonGroup}
              />
              {/* <Input
                label="칼로리"
                placeholder='음식 이름을 입력하세요'
                containerStyle={styles.input}
              />
              <Input
                label="탄수화물"
                placeholder='음식 이름을 입력하세요'
                containerStyle={styles.input}
              />
              <Input
                label="단백질"
                placeholder='음식 이름을 입력하세요'
                containerStyle={styles.input}
              />
              <Input
                label="지방"
                placeholder='음식 이름을 입력하세요'
                containerStyle={styles.input}
              /> */}
              
              <TouchableHighlight
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}>
                <Text style={styles.textStyle}>닫기</Text>
              </TouchableHighlight>
            </View>
        </View>
      </Modal>
      <Icon
          containerStyle={styles.floatIcon}
          raised
          name='plus'
          type='font-awesome'
          color='#f50'
          onPress={() => {
              setModalVisible(true);}}
      />
    </View>
  );
};

export default ModalContainer;