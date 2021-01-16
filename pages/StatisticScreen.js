import React, { Component } from 'react';
import { View, Text,StyleSheet  } from 'react-native';
import { Icon } from 'native-base'; // 추가된 코드

class StatisticScreen extends Component {
    static navigationOptions = {
        headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
        title: 'Instagram',
        headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
    }
    render() {
        return (
        <View style={styles.container}>
            <Text>StatisticScreen</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StatisticScreen;
