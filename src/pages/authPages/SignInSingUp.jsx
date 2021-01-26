import React from 'react';
import styled from 'styled-components'
import SignIn from '../../components/SignIn/signIn'

const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const SignInSignUp = () => (
    <Container>
      <SignIn/>
    </Container>
)

export default SignInSignUp;