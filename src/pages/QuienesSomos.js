import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeInLeft, zoomIn } from "react-animations";
import image from "../imgs/Nosotros.jpg";

const Container = styled.section`
  height: calc(100vh -140px);
  width: 100%;
  display: flex;

`;

const Image = styled.img`
  height: 586px;
  position: relative;
  left: -87px;
`;

const TextContanier = styled.div`
  height: 100%;
  position: relative;
  left: -44px;
`;
const Title = styled.h2`
  text-align: center;
  padding: 50px 0 45px 0;
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
        <Image src={image} />
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
