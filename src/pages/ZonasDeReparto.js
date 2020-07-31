import React from "react";
import styled, { keyframes } from "styled-components";
import { pulse, fadeInDown, fadeInUp, fadeIn } from "react-animations";
import mapa from "../imgs/MapaReparto.png";

const Section = styled.section`
  height: calc(100vh - 180px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  height: calc(100vh - 180px);
  display: flex;
  align-items: center;
  margin: 0 70px;
`;
const Image = styled.img`
  height: 500px;
`;

const InfoContainer = styled.div`
  height: calc(100vh - 180px);
  width: 40%;
  text-align: justify;
  margin-left: 70px;
`;

const UbicationContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const BorderContainer = styled.div`
  border-bottom: 3px solid #bb5a5a;
  width: 100%;
  height: 2px;
`;

const Title = styled.h2`
  font-size: 40px;
  padding-bottom: 20px;
  color: #93b5b3;
  text-align: center;
`;

const Text = styled.p`
  font-size: 17px;
`;

const pulseAnimation = keyframes`${pulse}`;

const PulseDiv = styled.div`
  animation: 1.5s ${pulseAnimation};
`;

const fadeInDownAnimation = keyframes`${fadeInDown}`;

const FadeInDownDiv = styled.div`
  animation: 1.5s ${fadeInDownAnimation};
  height: 49%;
`;

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 2.5s ${fadeInAnimation};
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
        <FadeInDownDiv>
          <UbicationContainer>
            <Title>Ubicación</Title>
            <Text>
              Ricardo Güiraldes 2183 - Don Torcuato - Partido de Tigre.
            </Text>
            <Text>
              Entre las calles Asunción y España, a unas cuadras de la estación
              de Don Torcuato viniendo por Av. del Trabajo.
            </Text>
          </UbicationContainer>
        </FadeInDownDiv>
        <PulseDiv>
          <BorderContainer />
        </PulseDiv>
        <FadeInUpDiv>
          <UbicationContainer>
            <Title>Reparto</Title>
            <Text>
              Siempre contamos con el afán de expandirnos y alcanzar nuevos
              lugares así que si tu zona no aparece, recomendamos que nos
              consultes para ver si podemos extendernos.{" "}
            </Text>
            <Text>
              Algunas zonas tienen monto de pedido mínimo para clientes
              minoristas así que te recomendamos que nos consultes si la tuya lo
              tiene.
            </Text>
          </UbicationContainer>
        </FadeInUpDiv>
      </InfoContainer>
      <FadeInDiv>
        <ImageContainer>
          <Image src={mapa} />
        </ImageContainer>
      </FadeInDiv>
    </Section>
  );
};

export default ZonasDeReparto;
