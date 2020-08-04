import React from "react";
import styled, { keyframes } from "styled-components";
import { pulse, fadeInDown, fadeInUp, fadeIn } from "react-animations";
import mapa from "../imgs/MapaReparto.png";

const Section = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 1024px) and (min-height: 1366px) {
    height: calc(100vh - 180px);
  }
`;

const InfoContainer = styled.div`
  height: 80%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  height: 100%;
  width: 40%;
  text-align: justify;
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;

  @media (max-width: 1200px) {
    margin-left: 0;
    width: 65%;
    margin-top: 30px;
  }

  @media (max-width: 450px) {
    width: 80%;
  }
`;

const UbicationContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1200px) {
    padding: 10px 0;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  padding-bottom: 20px;
  color: #93b5b3;
  text-align: center;
`;

const Text = styled.p`
  font-size: 17px;

  @media (max-width: 1400px) {
    font-size: 15px;
  }
  @media (max-width: 290px) {
    font-size: 13px;
    text-align: center;
  }
`;

const BorderContainer = styled.div`
  border-bottom: 3px solid #bb5a5a;
  width: 100%;
  height: 2px;
`;

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center; 
`;

const Image = styled.img`
  width: 90%;
  border: 2px solid #ffffff;
  padding: 5px;

  /* @media(max-width: 1400px) {
    height: 450px;
  } */
`;

// --------------ANIMATIONS-------------

const pulseAnimation = keyframes`${pulse}`;

const PulseDiv = styled.div`
  animation: 1.5s ${pulseAnimation};
`;

const fadeInDownAnimation = keyframes`${fadeInDown}`;

const FadeInDownDiv = styled.div`
  animation: 1.5s ${fadeInDownAnimation};
  height: 49%;

  @media (max-width: 411px) {
    height: 57%;
  }
`;

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 2.5s ${fadeInAnimation};
  width: 45%;
 

  @media(max-width: 1200px) {
    width: 80%;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 450px) {
    width: 95%;
  }
`;


const fadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv = styled.div`
  animation: 1.5s ${fadeInUpAnimation};
  height: 49%;
`;

const ZonasDeReparto = () => {
  return (
    <Section>
      <InfoContainer>
        <TextContainer>
          <FadeInDownDiv>
            <UbicationContainer>
              <Title>Reparto</Title>
              <Text>
                Siempre contamos con el afán de expandirnos y alcanzar nuevos
                lugares así que si tu zona no aparece, recomendamos que nos
                consultes para ver si podemos extendernos.{" "}
              </Text>
              <Text>
                Algunas zonas tienen monto de pedido mínimo para clientes
                minoristas así que te recomendamos que nos consultes si la tuya
                lo tiene.
              </Text>
            </UbicationContainer>
          </FadeInDownDiv>
          <PulseDiv>
            <BorderContainer />
          </PulseDiv>
          <FadeInUpDiv>
            <UbicationContainer>
              <Title>Ubicación</Title>
              <Text>
                Ricardo Güiraldes 2183 - Don Torcuato - Partido de Tigre.
              </Text>
              <Text>
                Entre las calles Asunción y España, a unas cuadras de la
                estación de Don Torcuato viniendo por Av. del Trabajo.
              </Text>
            </UbicationContainer>
          </FadeInUpDiv>
        </TextContainer>
        <FadeInDiv>
          <ImageContainer>
            <Image src={mapa} />
          </ImageContainer>
        </FadeInDiv>
      </InfoContainer>
    </Section>
  );
};

export default ZonasDeReparto;
