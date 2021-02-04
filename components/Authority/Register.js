import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Icon, Text, Input, ButtonGroup, Button } from 'react-native-elements';

//import DateTimePicker from '@react-native-community/datetimepicker';

const styles = StyleSheet.create({
    buttonGroup:{
        width:300,
        marginLeft:0,
      }
});

const RegisterContainer = () => {
    const sexButtons = ['남성', '여성']
    const exerciseButtons = ['주 1회, 주 2회, 주 3회, 주 4회, 주 5회, 주 6회, 주 7회']
    
    const [selectedSex, setSelectedSex] = useState(0);
    const [selectedEx, setSelectedEx] = useState(0);


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
            <View style={styles.JoinView}>
            <input
            label='ID'
            placeholer='ID를 입력하세요'
            labelStyle={styles.labelstyle}
            inputStyle={styles.inputstyle}
            contai
            nerStyle={styles.input}
            />
            <input
            label='비밀번호'
            placeholer='비밀번호를 입력하세요'
            labelStyle={styles.labelstyle}
            inputStyle={styles.inputstyle}
            contai
            nerStyle={styles.input}
            />
            <input
            label='이름'
            placeholer='이름을 입력하세요'
            labelStyle={styles.labelstyle}
            inputStyle={styles.inputstyle}
            contai
            nerStyle={styles.input}
            />
            <input
            // label='성별'
            // placeholer='성별을 입력하세요'
            buttons={sexButtons}
            selectedIndex={selectedSex}
            onPress={selectedTime=> setSelectedSex(selectedSex)}
            containerStyle={styles.buttonGroup}
            />
            <input
            label='나이'
            placeholer='나이를 입력하세요'
            labelStyle={styles.labelstyle}
            inputStyle={styles.inputstyle}
            containerStyle={styles.input}
            /> 
            <input
            label='키'
            placeholer='키를 입력하세요 (cm)'
            labelStyle={styles.labelstyle}
            inputStyle={styles.inputstyle}
            containerStyle={styles.input}
            /> 
            <input
            label='몸무게'
            placeholer='몸무게를 입력하세요 (kg)'
            labelStyle={styles.labelstyle}
            inputStyle={styles.inputstyle}
            containerStyle={styles.input}
            /> 
            <input
            // label='운동 빈도'
            // placeholer='몸무게를 입력하세요 (kg)'
            // labelStyle={styles.labelstyle}
            // inputStyle={styles.inputstyle}
            // containerStyle={styles.input}
            buttons={exerciseButtons}
            selectedIndex={selectedEx}
            onPress={selectedEx=> setSelectedEx(selectedEx)}
            containerStyle={styles.buttonGroup}
            />   
            </View>
            </Modal>
            <Icon
          containerStyle={styles.floatIcon}
          raised
          name='join'
          type='font-awesome'
          color='#f50'
          onPress={() => {
              setModalVisible(true);}}
      />
    </View>
  );
};

export default RegisterContainer;