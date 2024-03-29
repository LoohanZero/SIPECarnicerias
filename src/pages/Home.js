import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeInLeft, fadeInUp } from "react-animations";
import homeImage from "../imgs/HomeImage.jpeg";

const Section = styled.section`
  background-image: url(${homeImage});
  background-size: cover;
  background-position: 0% 20%;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 170px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  
`;

const FlexContainer = styled.div`
  margin-top: 50px;
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;


const Title = styled.h1`
  font-family: "Bitter", Verdana, Geneva, Tahoma, serif;
  color: #f7f6e7;
  font-size: 60px;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 40px;
  }
`;

const SeparatedTitle = styled.div``;

const Text = styled.p`
  font-size: 20px;
  font-style: italic;
  color: #f7f6e7;
  padding-top: 15px;

  @media (max-width: 890px) {
    text-align: center;
  }

  @media (max-width: 450px) {
    font-size: 15px;
    margin-bottom: 0;
  }
`;

// ------------ANIMATIONS-----------

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

const FadeInLeftDiv = styled.div`
  animation: 0.5s ${fadeInLeftAnimation};
`;

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv = styled.div`
  animation: 0.5s ${fadeInUpAnimation};
`;

const TextContainer = styled.div``;

const Home = () => {
  return (
      <Section>
        <FlexContainer>
          <TextContainer>
            <FadeInLeftDiv>
              <Title>
                <SeparatedTitle>SIPE</SeparatedTitle>
                <SeparatedTitle>Carnicerías</SeparatedTitle>
              </Title>
            </FadeInLeftDiv>
            <FadeInUpDiv>
              <Text>Reparto a domicilio, venta por mayor y menor</Text>
            </FadeInUpDiv>
          </TextContainer>
        </FlexContainer>
      </Section>
  );
};

export default Home;
