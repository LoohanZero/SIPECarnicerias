import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const Section = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Oswald", Verdana, Geneva, Tahoma, sans-serif;
`;

const SectionTitle = styled.h2`
  padding-top: 50px;
  text-align: center;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
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

  &:hover {
    border: 2px solid #76939d;
  }
  &:invalid:not(:placeholder-shown) {
    border: 2px solid #bb5a5a;
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
  animation: 1.5s ${fadeInAnimation};
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
          value="https://yourdomain.co/contact.html"
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
    </Section>
  );
};

export default Contacto;
