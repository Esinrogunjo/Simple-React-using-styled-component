import React from "react";
import styled from "styled-components";
import everywhere from "../images/everywhere.png";
import chrome from "../images/browsers/chrome.svg";
import appstore from "../images/browsers/appstore.svg";
import f_droid from "../images/browsers/f-droid.png";
import firefox from "../images/browsers/firefox.svg";
import playstore from "../images/browsers/playstore.svg";
import safari from "../images/browsers/safari.svg";
const Wrapper = styled.div`
  width: 100%;
  margin-top: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  background-color: #fff;
  padding: 0 5rem;
`;

const HowText = styled.p`
  color: #377dff;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 36px;
`;
const MotoText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #2d3748;
`;
const StyledImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
`;

const CleintWrapper = styled.div`
  width: 100%;
  max-height: 6rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4rem;
  margin-right: 4rem;
  margin-bottom: 3rem;
`;

const Client = styled.img`
  max-width: 3rem;
  max-height: 3rem;
  border-style: none;
  margin-right: 7rem;
  :hover {
    filter: grayscale(70%);
    cursor: pointer;
  }
`;

const Everywhere = () => {
  return (
    <Wrapper>
      <HowText>Create and manage your aliases everywhere</HowText>
      <MotoText>
        Quickly create an alias on the go. Sign up for a newsletter, create a
        new online account with a click.
      </MotoText>
      <StyledImage src={everywhere} />

      <CleintWrapper>
        <Client src={chrome} />
        <Client src={firefox} />
        <Client src={safari} />
        <Client src={appstore} />
        <Client src={playstore} />
        <Client src={f_droid} />
      </CleintWrapper>
    </Wrapper>
  );
};

export default Everywhere;
