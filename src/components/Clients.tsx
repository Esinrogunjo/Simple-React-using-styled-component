import React from "react";
import { Div } from "./Nav";
import styled from "styled-components";
import client1 from "../images/client1.svg";
import client2 from "../images/client2.png";
import client3 from "../images/client3.svg";
import client4 from "../images/client4.svg";
import client5 from "../images/client5.png";
const Wrapper = styled.div`
  width: 100%;
  height: 25rem;
  margin-top: 5rem;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CleintWrapper = styled.div`
  width: 100%;
  height: 20rem;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;

const Client = styled.img`
  max-width: 4rem;
  max-height: 4rem;
  border-style: none;
  margin-right: 6rem;
  :hover {
    filter: grayscale(70%);
    cursor: pointer;
  }
`;

const Title = styled.h3`
  color: #8c98a4;
  font-weight: 500;

  position: relative;

  :before {
    content: "";

    display: block;
    width: 10rem;
    height: 0.0625rem;
    transform: translateY(-50%);
    background-color: #8c98a4;
    left: -10rem;
    top: 50%;
    position: absolute;
  }

  :after {
    content: "";
    display: block;
    width: 10rem;
    height: 0.0625rem;
    transform: translateY(-50%);
    background-color: #8c98a4;
    right: -10rem;
    top: 50%;
    position: absolute;
  }
`;
const Clients = () => {
  return (
    <Wrapper>
      <Title>As seen on</Title>
      <CleintWrapper>
        <Client src={client1} />
        <Client src={client2} />
        <Client src={client3} />
        <Client src={client4} />
        <Client src={client5} />
      </CleintWrapper>
    </Wrapper>
  );
};

export default Clients;
