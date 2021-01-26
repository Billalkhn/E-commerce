import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
const Options = styled.div`
  width: 50%;
  height: 100%; 
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .option {
    padding: 10px 15px;
  }
`;
const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const Option = styled(Link)`
padding: 10px 15px;

`;


const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>

    <Options>
      <Option to="/shop"> Shop</Option>
      <Option to="/shop">Contact</Option>
    </Options>
  </HeaderContainer>
);

export default Header;
