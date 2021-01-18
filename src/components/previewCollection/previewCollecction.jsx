import React from "react";
import styled from "styled-components";
import CollectionItem from '../collectionItems/collectionsItems'


const Container = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;


`;

const Title = styled.h1`

font-size: 28px;
margin-bottom: 25px;

`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
`;




const previewCollection = ({ title, items }) => (
  <Container>
    <Title>{title.toUpperCase()}</Title>
    <Wrapper>
      {items
      .filter((item , idx ) => idx < 4)
      .map(({id , ...itemProps}) => (
        <CollectionItem key={id} {...itemProps}/>
      ))}
    </Wrapper>
  </Container>
);


export default previewCollection