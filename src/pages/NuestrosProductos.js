import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { fadeIn } from "react-animations";
import Carousel from "react-bootstrap/Carousel";
import carne from "../imgs/CarneCuadrada.jpg";
import pollo from "../imgs/Pollo.jpg";
import cerdo from "../imgs/CerdoCuadrada.jpg";
import milanesa from "../imgs/MilanesaCuadrada.jpg";

const Section = styled.section`
  width: 100%;
  height: 85%;
`;

const SectionTitle = styled.h2`
  padding-top: 50px;
  text-align: center;
`;

const InfoContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 180px);
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Image = styled.img`
  height: 460px;
  position: relative;
  left: 100px;
`;

const TextContanier = styled.div`
  height: 100%;
  width: 50%;
  padding: 45px;
  /* position: relative; */
`;
const ProductTitle = styled.h3`
  text-align: center;
  padding: 50px 0 45px 0;
  font-size: 30px;
`;
const Text = styled.p`
  text-align: justify;
  margin: 15px 15px;
  font-size: 17px;
`;

// --------------ANIMATIONS---------------

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

// -------------CAROUSEL---------------

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <InfoContainer>
          <ImageContainer>
            <Image src={carne} />
          </ImageContainer>
          <TextContanier>
            <ProductTitle>Carne Vacuna</ProductTitle>
            <Text>
              Contamos con carne de novillo especialmente seleccionada y de
              primera calidad. Cada res adquirida es despostada por nuestros
              mejores carniceros para convertirse en los cortes tradicionales
              que se sirven en la mesa argentina todos los días.
            </Text>
            <Text>
              Desde el popular asado hasta la poco conocida arañita ofrecemos
              cada una de las opciones que nuestros clientes necesiten para cada
              momento de sus vidas.
            </Text>
          </TextContanier>
        </InfoContainer>
        {/* <Carousel.Caption></Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <InfoContainer>
          <ImageContainer>
            <Image src={pollo} />
          </ImageContainer>
          <TextContanier>
            <ProductTitle>Productos Avícolas</ProductTitle>
            <Text>
              Para que a tu mesa solo lleguen los mejores pollos, sólo
              adquirimos las mejores y más reconocidas marcas. Y somos tan
              talentosos deshuesándolos, que hasta tenemos nuestra propia
              técnica para hacer las supremas.
            </Text>
            <Text>
              También vendemos huevos, por supuesto. Desde la media docena hasta
              el cajón. ¿Sino cómo vamos a hacer nuestras milanesas?
            </Text>
          </TextContanier>
        </InfoContainer>
        {/* <Carousel.Caption></Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <InfoContainer>
          <ImageContainer>
            <Image src={cerdo} />
          </ImageContainer>
          <TextContanier>
            <ProductTitle>Carne de Cerdo</ProductTitle>
            <Text>
              Brindamos también la mejor calidad en carne de cerdo. De origen
              nacional así como también traída especialmente desde el exterior
              por nuestros proveedores.
            </Text>
            <Text>
              ¿Churrasquito de cerdo?¿Ribs?¿Lechón? Por supuesto que sí. Lo que
              quieras.
            </Text>
          </TextContanier>
        </InfoContainer>
        {/* <Carousel.Caption></Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <InfoContainer>
          <ImageContainer>
            <Image src={milanesa} />
          </ImageContainer>
          <TextContanier>
            <ProductTitle>Rebozados</ProductTitle>
            <Text>
              Tenemos de varios tipos, algunos realizados por nosotros. Otros
              conseguidos a través de nuestros proveedores.
            </Text>
            <Text>
              Nuestras milanesas de pollo y carne rebozadas son bien caseras,
              iguales a las de tu familia porque están basadas en la nuestra.
            </Text>
          </TextContanier>
        </InfoContainer>

        {/* <Carousel.Caption></Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

// ------------------PAGE DISPLAY -----------------

const NuestrosProductos = () => {
  return (
    carne &&
    pollo &&
    cerdo &&
    milanesa && (
      <Section>
        <SectionTitle>Nuestros Productos</SectionTitle>
        <FadeInDiv>
          <ControlledCarousel />
        </FadeInDiv>
      </Section>
    )
  );
};

export default NuestrosProductos;
