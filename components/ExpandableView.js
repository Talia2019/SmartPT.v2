import React,{useState} from 'react';
import styled from 'styled-components';
import { StyleSheet,View,  Image,  } from 'react-native';
import { Button,Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Meal from './Meal';

//Style 지정
const Container = styled.SafeAreaView`
    margin : 3%;
    background-color : #ffffff;
`;

const Header = styled.View`
    padding : 2%;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
`;

const Footer = styled.View`
    padding : 2%;
    flex-direction : row;
    justify-content : flex-end;
    align-items : center;
`;

const Detail =  styled.View`
    background-color : #ffffff;
    display : ${props => props.expand.display};
`;

function ExpandableView(props) {
  const [expand,setExpand] = useState({
    display:'none',
    Icon :'arrow-down',
  });


  const changeView = () =>{
    if(expand.display=='none'){
      setExpand({
          display : 'flex',
          Icon : 'arrow-up'
      });
    }
    else 
    setExpand({
        display : 'none',
        Icon : 'arrow-down'
      });
  }

  return (
    <Container>
      <View>
        <Header>
          <Text h4>{props.title}</Text>
          <Text>{props.title} 총 칼로리(Kcal 퍼센트로)</Text>
        </Header>
        <Footer>
          <Button
            buttonStyle={{
              width : 40,
              backgroundColor : '#ffffff',
            }}
            icon={
              <Icon
                name={expand.Icon}
                size={15}
                color="black"
              />
            }
            type="clear"
            onPress={changeView}
          />
        </Footer>
      </View>
      <View>
        <Detail expand={expand}>
          <Meal/>
          <Meal/>
        </Detail>
      </View>
      
    </Container>
  );
}

export default ExpandableView;