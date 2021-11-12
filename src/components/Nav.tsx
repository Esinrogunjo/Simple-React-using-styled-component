import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";

export const Div = styled.div`
  width: 100vw;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5rem;
`;

const SideDiv = styled.div`
  display: flex;
  background-color: honeydew;
`;

const LeftDiv = styled.div`
  max-width: 30%;
`;
const RightDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;

  color: #77838f;
`;

const MenuItem = styled.span`
  margin: auto 2rem;
`;
const Logo = styled.img`
  padding-top: 0;
  padding-bottom: 0;
  width: 9.375rem;
`;

const BtnBlue = styled.a`
  color: #fff;
  background-color: #377dff;
  border-color: #377dff;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  font-size: 1rem;
  padding: 0.625rem 1.125em;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  width: 6rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavItem = styled.div`
  margin-left: 2rem;
`;
const Nav = () => {
  return (
    <Div>
      <LeftDiv>
        <Logo src={logo} alt="logo image here" />
      </LeftDiv>
      <RightDiv>
        <NavItem>Community</NavItem>
        <NavItem>Pricing</NavItem>
        <NavItem>Login</NavItem>
        <NavItem>
          <BtnBlue>Signup</BtnBlue>
        </NavItem>
      </RightDiv>
    </Div>
  );
};

export default Nav;
