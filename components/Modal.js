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
} from 'react-native-elements';

// import {
//   DateTimePicker 
// } from '@react-native-community/datetimepicker';

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
  input:{
    backgroundColor:'white',
    width:300,
    marginLeft:0,
  },
  buttonGroup:{
    width:300,
    marginLeft:0,
  }
});

const ModalContainer = () => {
  const amountButtons = ['1/2인분', '1인분', '2인분'] ;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAmount,setSelectedAmount] = useState(0);

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
              <View style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={require('../images/dog.jpg')}/>
              </View>
              <Input
                label="음식 이름"
                placeholder='음식 이름을 입력하세요'
                containerStyle={styles.input}
              />
              
      
              <ButtonGroup
                buttons={amountButtons}
                selectedIndex={selectedAmount}
                onPress={selectedAmount=> setSelectedAmount(selectedAmount)}
                containerStyle={styles.buttonGroup}
              />
              
              <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}>
                <Text style={styles.textStyle}>Hide Modal</Text>
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