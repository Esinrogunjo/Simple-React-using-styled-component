import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import avatar from "../images/avatar.svg";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Wrapper = styled.div`
  width: 100%;
  margin-top: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: brown;

  justify-content: center;
  background-color: #fff;
  padding: 0 5rem;
`;
const DivTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`;
const HowText = styled.p`
  color: #377dff;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 36px;
  margin: 0px auto;
`;
const Card = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #e7eaf3;
  border-radius: 0.3125rem;
  box-shadow: 0 0 35px rgba(140, 152, 164, 0.125);
  max-width: 20rem;
`;

const CardBody = styled.div`
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
`;

const CardBodyText = styled.p`
  color: #2d3748;
  line-height: 1.7rem;
`;
const Avatar = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  background-color: cadetblue;
  margin: 0% auto;
  position: absolute;
  bottom: -2.5rem;
  left: 35%;

  img {
    width: 100%;
    height: 100%;
    margin: 0% auto;
  }
`;

const UserName = styled.h4`
  font-size: 1rem;
  font-weight: 500;
`;

const DivName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
`;

const Testimony = () => {
  return (
    <>
      <DivTitle>
        <HowText>SimpleLogin is loved by users</HowText>
      </DivTitle>

      <Carousel className="carousel" responsive={responsive}>
        <Card>
          <CardBody>
            <CardBodyText>
              Once I used it, it was a game changer. <br />
              SimpleLogin is in my book criminally underrated
            </CardBodyText>
          </CardBody>
          <Avatar>
            <img src={avatar} />
          </Avatar>
        </Card>

        <Card>
          <CardBody>
            <CardBodyText>
              Once I used it, it was a game changer. <br />
              SimpleLogin is in my book criminally underrated
            </CardBodyText>
          </CardBody>
          <Avatar>
            <img src={avatar} />
          </Avatar>
        </Card>

        <Card>
          <CardBody>
            <CardBodyText>
              Once I used it, it was a game changer. <br />
              SimpleLogin is in my book criminally underrated
            </CardBodyText>
          </CardBody>
          <Avatar>
            <img src={avatar} />
          </Avatar>
        </Card>

        <Card>
          <CardBody>
            <CardBodyText>
              Once I used it, it was a game changer. <br />
              SimpleLogin is in my book criminally underrated
            </CardBodyText>
          </CardBody>
          <Avatar>
            <img src={avatar} />
          </Avatar>
        </Card>

        <Card>
          <CardBody>
            <CardBodyText>
              Once I used it, it was a game changer. <br />
              SimpleLogin is in my book criminally underrated
            </CardBodyText>
          </CardBody>
          <Avatar>
            <img src={avatar} />
          </Avatar>
        </Card>

        <Card>
          <CardBody>
            <CardBodyText>
              Once I used it, it was a game changer. <br />
              SimpleLogin is in my book criminally underrated
            </CardBodyText>
          </CardBody>
          <Avatar>
            <img src={avatar} />
          </Avatar>
        </Card>

        <Card>
          <CardBody>
            <CardBodyText>
              Once I used it, it was a game changer. <br />
              SimpleLogin is in my book criminally underrated
            </CardBodyText>
          </CardBody>
          <Avatar>
            <img src={avatar} />
          </Avatar>
        </Card>

        <Card>
          <CardBody>
            <CardBodyText>
              Once I used it, it was a game changer. <br />
              SimpleLogin is in my book criminally underrated
            </CardBodyText>
          </CardBody>
          <Avatar>
            <img src={avatar} />
          </Avatar>
        </Card>

        <Card>
          <CardBody>
            <CardBodyText>
              Once I used it, it was a game changer. <br />
              SimpleLogin is in my book criminally underrated
            </CardBodyText>
          </CardBody>
          <Avatar>
            <img src={avatar} />
          </Avatar>
        </Card>

        <Card>
          <CardBody>
            <CardBodyText>
              Once I used it, it was a game changer. <br />
              SimpleLogin is in my book criminally underrated
            </CardBodyText>
          </CardBody>
          <Avatar>
            <img src={avatar} />
          </Avatar>
        </Card>
        <Card>
          <CardBody>
            <CardBodyText>
              Once I used it, it was a game changer. <br />
              SimpleLogin is in my book criminally underrated
            </CardBodyText>
          </CardBody>
          <Avatar>
            <img src={avatar} />
          </Avatar>
        </Card>

        <Card>
          <CardBody>
            <CardBodyText>
              Once I used it, it was a game changer. <br />
              SimpleLogin is in my book criminally underrated
            </CardBodyText>
          </CardBody>
          <Avatar>
            <img src={avatar} />
          </Avatar>
        </Card>

        <Card>
          <CardBody>
            <CardBodyText>
              Once I used it, it was a game changer. <br />
              SimpleLogin is in my book criminally underrated
            </CardBodyText>
          </CardBody>
          <Avatar>
            <img src={avatar} />
          </Avatar>
        </Card>

        <Card>
          <CardBody>
            <CardBodyText>
              Once I used it, it was a game changer. <br />
              SimpleLogin is in my book criminally underrated
            </CardBodyText>
          </CardBody>
          <Avatar>
            <img src={avatar} />
          </Avatar>
        </Card>

        <Card>
          <CardBody>
            <CardBodyText>
              Once I used it, it was a game changer. <br />
              SimpleLogin is in my book criminally underrated
            </CardBodyText>
          </CardBody>
          <Avatar>
            <img src={avatar} />
          </Avatar>
        </Card>
      </Carousel>
    </>
  );
};

export default Testimony;
