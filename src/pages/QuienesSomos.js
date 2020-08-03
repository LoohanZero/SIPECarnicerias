import React from "react";
import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";
import image from "../imgs/Nosotros.jpg";


const Section = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;


  @media  (min-height: 800px) {
    height: calc(100vh - 180px);
  }
 
`;

const TextContanier = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 700px) {
    width: 90%;
  }

  @media (min-height: 550px) {
    padding-top: 25px;
  }
`;

const BackgroundImage = styled.div`
  z-index: 10;
  position: absolute;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  top: 0;
  left: 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  padding-bottom: 20px;
  font-size: 30px;

  @media (max-width: 700px) {
    font-size: 25px;
  }

  @media (min-height: 550px) {
    padding: 25px 0;
  }
`;

const Text = styled.p`
  text-align: justify;
  margin: 15px 15px;
  font-size: 17px;

  @media (max-width: 700px) {
    font-size: 15px;
  }
`;
const zoomInAnimation = keyframes`${zoomIn}`;

const ZoomInTitleDiv = styled.div`
  animation: 1s ${zoomInAnimation};
`;

const ZoomInTextDiv = styled.div`
  animation: 1s ${zoomInAnimation};
`;

const QuienesSomos = () => {
  return (
    image && (
      <Section>
        <BackgroundImage />

        <TextContanier>
          <ZoomInTitleDiv>
            <SectionTitle>Sobre Nosotros</SectionTitle>
          </ZoomInTitleDiv>
          <ZoomInTextDiv>
            <Text>
              S.I.P.E. Carnicerías es una empresa familiar que cuenta con más de
              cincuenta años de experiencia en el rubro. Comenzó, como muchas
              otras, con un pequeño local de barrio en las afueras de Don
              Torcuato, partido de Tigre y poco a poco logró posicionarse como
              una de las mejores distribuidoras de carne de Zona Norte.{" "}
            </Text>
            <Text>
              Se destaca principalmente por su reparto diario matutino que hace
              posible que tanto clientes particulares como renombradas
              instituciones y restaurantes tengan la mejor mercadería en sus
              mesas.
            </Text>
            <Text>
              Nuestro principal objetivo es dejar satisfechos a cada uno de
              nuestros clientes. Es gracias a su confianza y colaboración que
              podemos decir que llegamos a donde estamos en este momento.{" "}
            </Text>
            <Text>
              ¿Un secreto? El mito dice que la sigla "S.I.P.E." significa
              "servicios integrales para empresas" pero a nosotros nos resulta
              sumamente sospechoso que esas letras coincidan también con las
              iniciales de las dos personas que comenzaron este proyecto.
              Suponemos que siempre nos quedaremos con la duda pero no queríamos
              ser los únicos en tenerla.
            </Text>
          </ZoomInTextDiv>
        </TextContanier>
      </Section>
    )
  );
};

export default QuienesSomos;
