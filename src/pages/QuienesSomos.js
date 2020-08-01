import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeInLeft, zoomIn } from "react-animations";
import image from "../imgs/Nosotros1.jpg";

const Container = styled.section`
  height: calc(100vh - 180px);
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-height: 700px) {
    height: 80%;
  }

  @media (max-height: 600px) {
    height: 100%;
  }
`;

// const Image = styled.img`
//   height: 75%;
// `;

const ImageContainer = styled.div`
  background-image: url(${image});
  background-position: 10% center;
  background-size: 100%;   
  background-repeat: no-repeat;   
  height: 70vh;
  width: 100%;

`;
const TextContanier = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-height: 700px) {
    height: 50%;
  }
`;
const Title = styled.h2`
  text-align: center;
  padding-bottom: 20px;
  font-size: 30px;
`;
const Text = styled.p`
  text-align: justify;
  margin: 15px 15px;
  font-size: 17px;
`;

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

const FadeInLeftDiv = styled.div`
  animation: 1s ${fadeInLeftAnimation};
  width: 45%;
  display: flex;
  align-items: center;
`;

const zoomInAnimation = keyframes`${zoomIn}`;

const ZoomInTitleDiv = styled.div`
  animation: 1s ${zoomInAnimation};
`;

const ZoomInTextDiv = styled.div`
  animation: 2.5s ${zoomInAnimation};
`;

const QuienesSomos = () => {
  return (
    <Container>
      
        <FadeInLeftDiv>
        <ImageContainer/>
          {/* <Image src={image} /> */}
        </FadeInLeftDiv>

      <TextContanier>
        <ZoomInTitleDiv>
          <Title>Sobre Nosotros</Title>
        </ZoomInTitleDiv>
        <ZoomInTextDiv>
          <Text>
            S.I.P.E. Carnicerías es una empresa familiar que cuenta con más de
            cincuenta años de experiencia en el rubro. Comenzó, como muchas
            otras, con un pequeño local de barrio en las afueras de Don
            Torcuato, partido de Tigre y poco a poco logró posicionarse como una
            de las mejores distribuidoras de carne de Zona Norte.{" "}
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
            iniciales de las dos personas que comenzaron este proyecto. Supongo
            que siempre nos quedaremos con la duda pero no queríamos ser los
            únicos en tenerla.
          </Text>
        </ZoomInTextDiv>
      </TextContanier>
    </Container>
  );
};

export default QuienesSomos;
