import React from "react";
import styled from "styled-components";
import figure1 from "../images/figure.svg";
import figure2 from "../images/figure2.svg";
import card1 from "../images/card1.gif";
import card2 from "../images/card2.svg";
import card3 from "../images/card3.svg";

const Wrapper = styled.div`
  width: 100%;
  /* height: 20rem; */
  margin-top: 0.5rem;
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

const Figure = styled.figure`
  width: 100%;
  flex-grow: 1;
  /* background-image: url(${figure1}); */
  img {
    min-width: 100%;
    max-width: 100%;
  }
`;

const CardWrapper = styled.div`
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  width: 100%;

  flex-wrap: nowrap;
  padding-top: 1rem;
  padding-right: 1rem;
`;
const EachCard = styled.div`
  display: flex;
  max-width: 33%;
  flex-direction: column;
  padding-right: 15px;
  padding-left: 15px;
  border: 1px solid #e7eaf3;
  transition: 0.3s;
  border-radius: 10px;
  margin-left: 2rem;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e7eaf3;
  transition: 0.3s;
  padding: 1.5rem;
  /* height: 100%; */
  /* max-width: 33.33333%; */
  border-radius: 10px;
`;

const TextNumber = styled.div`
  color: #8c98a4;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
const Title = styled.div`
  color: #377dff;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 1rem;
`;

const CardImg = styled.img`
  vertical-align: middle;
  max-width: 100%;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  line-height: 1.7;
  color: #2d3748;
`;
const Bigger = styled.span`
  font-size: 22px;
  color: #ea319f;
`;
const HowItWorks = () => {
  return (
    <>
      <Wrapper>
        <Figure>
          <img src={figure1} alt="" />
        </Figure>
        <HowText>How it works</HowText>
        <MotoText>Shield your inbox with email aliases.</MotoText>
        <CardWrapper>
          <EachCard>
            <TextNumber>1.</TextNumber>
            <Title>Use email alias everywhere</Title>
            <CardImg src={card1}></CardImg>
            <Paragraph>
              Next time a website asks for your email address, give an alias
              <Bigger>instead</Bigger> of your real email.
            </Paragraph>
          </EachCard>

          <EachCard>
            <TextNumber>2.</TextNumber>
            <Title>Receive emails safely in your inbox.</Title>
            <CardImg src={card2}></CardImg>
            <Paragraph>
              Emails sent to an alias are <Bigger>forwarded</Bigger> to your
              inbox without the sender knowing anything.
            </Paragraph>
          </EachCard>

          <EachCard>
            <TextNumber>3.</TextNumber>
            <Title>Send emails anonymously</Title>
            <CardImg src={card3}></CardImg>
            <Paragraph>
              Just hit "Reply" if you want to reply to a forwarded email: the
              reply is sent from your alias and your real email stays hidden.
              You can also easily <Bigger>send</Bigger> emails from your alias.
            </Paragraph>
          </EachCard>
        </CardWrapper>
        <Figure>
          <img src={figure2} alt="" />
        </Figure>
      </Wrapper>
    </>
  );
};

export default HowItWorks;
