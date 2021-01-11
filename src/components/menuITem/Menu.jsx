import React from 'react';
import styled from 'styled-components';



const Contianer = styled.div`
min-width: 30%;
height: 240px;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
margin: 0 7.5px 15px;
background-position:  center;
background-size:  cover;
&:hover  {
  opacity: 0.7;
  
  

  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}

&:first-child {
  margin-right: 7.5px;
}

&:last-child {
  margin-left: 7.5px;
}

`;
const Content = styled.div`

height: 90px;
padding: 0 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
background-color: white;
opacity: 0.7;

`;


const Title = styled.h1`
font-weight: bold;
margin-bottom: 6px;
font-size: 22px;
color: #4a4a4a;`;



const SubTitle = styled.span`
font-weight: lighter;
font-size: 16px;
`;
const MenuItem = ({title , imageUrl}) => (
    <Contianer style={{backgroundImage: `url(${imageUrl })`}}>
        <Content>
          <Title> {title.toUpperCase()}</Title>
          <SubTitle> Shop Now   </SubTitle>
        </Content>
      </Contianer>

)

export default MenuItem;

