import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Contianer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  background-position: center;
  background-size: cover;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
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
  color: #4a4a4a;
`;

const SubTitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
  <Contianer
    style={{ backgroundImage: `url(${imageUrl})` }}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <Content>
      <Title> {title.toUpperCase()}</Title>
      <SubTitle> Shop Now </SubTitle>
    </Content>
  </Contianer>
);

export default withRouter(MenuItem);
