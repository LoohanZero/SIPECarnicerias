import React from "react";
import styled, { keyframes } from "styled-components";
import errorImage from "../imgs/Error.png";
import { bounceInDown, headShake } from "react-animations";

const Container = styled.div`
  height: calc(100vh - 120px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 26px 24px -16px rgba(112, 113, 130, 0.4);

  @media (max-width: 470px) {
    height: 150px;
  }

  @media (max-width: 320px) {
    height: 125px;
  }
`;

const Info = styled.h2`
  font-size: 36px;
  padding: 40px;
  color: #f7f6e7;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 470px) {
    font-size: 30px;
  }

  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

// ------------ANIMATIONS------------

const bounceInDownAnimation = keyframes`${bounceInDown}`;

const BounceInDownDiv = styled.div`
  animation: 1s ${bounceInDownAnimation};
`;

const headShakeAnimation = keyframes`${headShake}`;

const HeadShakeDiv = styled.div`
  animation: 1.5s ${headShakeAnimation} 0.9s;
`;
const Error = ({ text }) => {
  return (
    <Container>
      <BounceInDownDiv>
        <Image src={errorImage} />
      </BounceInDownDiv>
      <HeadShakeDiv>
        <Info>{text}</Info>
      </HeadShakeDiv>
    </Container>
  );
};

export default Error;
