import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import asado from "../imgs/AsadoContacto.jpeg";

const Section = styled.section`
  height: 100%;
  min-height: calc(100vh - 170px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Oswald", Verdana, Geneva, Tahoma, sans-serif;
  overflow: hidden;
  position: relative;
  
/* 
  @media (min-height: 800px) {
    height: calc(100vh - 180px);
  } */

  @media (max-width: 411px) {
    /* height: 105%; */
    padding-bottom: 50px;
  }
`;

const BackgroundImage = styled.div`
  z-index: 1;
  position: absolute;
  background-image: url(${asado});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  top: 0;
  left: 0;
`;

const SectionTitle = styled.h1`
  text-align: center;

  @media (max-width: 450px) {
    padding-top: 50px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  z-index: 10;

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 850px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 80%;
  }

  @media (max-width: 450px) {
    width: 90%;
  }
`;
const FormStyles = styled.div`
  width: 100%;
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 17px;
  padding: 5px;
`;

const FormInput = styled.input`
  font-family: "Nunito", Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 5px;
  border: none;
  outline: none;
  height: 40px;
  font-size: 17px;
  padding-left: 10px;
  margin-top: 4px;
  border: 2px solid #171d20;
  transition: 0.3s;

  &:hover {
    border: 2px solid #76939d;
    transition: 0.3s;
  }
  &:invalid:not(:placeholder-shown) {
    border: 2px solid #bb5a5a;
    transition: 0.3s;
  }
`;

const Textarea = styled.textarea`
  font-family: "Nunito", Verdana, Geneva, Tahoma, sans-serif;
  height: 100px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 17px;
  padding: 5px 10px;
  transition: 0.3s;
  margin-top: 4px;
  border: 2px solid #171d20;

  &:hover {
    border: 2px solid #76939d;
    transition: 0.3s;
  }

  &:invalid:not(:placeholder-shown) {
    border: 2px solid #bb5a5a;
    transition: 0.3s;
  }
`;

const SendButton = styled.button`
  background-color: #84a9ac;
  width: 25%;
  font-size: 17px;
  height: 40px;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-bottom: 10px;
  transition: 0.3s;

  &:hover {
    background-color: #b5cbcd;
    transition: 0.3s;
  }

  &:active {
    background-color: #dae5e6;
    transition: 0.3s;
  }
`;

// ----------------ANIMATIONS---------------------

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 0.5s ${fadeInAnimation};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contacto = () => {
  return (
    <Section>
      <SectionTitle>¡Contactanos!</SectionTitle>

      <FormContainer
        action="https://formsubmit.co/administracion@sipecarnicerias.com"
        method="POST"
        target="_blank"
      >
        <input
          type="hidden"
          name="_url"
          value="https://www.sipecarnicerias.com/contact.html"
        ></input>
        <FadeInDiv>
          <FormStyles>
            <FormLabel>
              Nombre:
              <FormInput
                type="text"
                name="Nombre"
                placeholder="Escriba su nombre aquí"
                required
              />
            </FormLabel>
            <FormLabel>
              Email:
              <FormInput
                type="email"
                name="Email"
                placeholder="Escriba su email aquí"
                required
              />
            </FormLabel>
            <FormLabel>
              Teléfono:
              <FormInput
                type="tel"
                name="Teléfono"
                placeholder="Escriba su teléfono aquí"
                required
              />
            </FormLabel>
            <FormLabel>
              Mensaje:
              <Textarea
                name="Mensaje"
                placeholder="Escriba su mensaje aquí"
                required
              />
            </FormLabel>
          </FormStyles>
          <SendButton type="submit">Enviar</SendButton>
        </FadeInDiv>
      </FormContainer>
      <BackgroundImage />
    </Section>
  );
};

export default Contacto;
