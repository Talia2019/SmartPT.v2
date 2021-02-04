import React, { Component } from 'react';
import styled from 'styled-components';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
class Login extends Component {
    render() {
        return (
            <AuthContent title="로그인">
                <InputWithLabel label="이메일" name="email" placeholder="이메일"/>
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
                <AuthButton>로그인</AuthButton>
                <RightAlignedLink to="/Authority/register">회원가입</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default Login;