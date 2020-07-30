import React from "react";
import styled, { keyframes } from "styled-components";
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { WhatsappSquare } from "@styled-icons/fa-brands/WhatsappSquare";
import { Mail } from "@styled-icons/heroicons-outline/Mail";
import { fadeIn } from "react-animations";

const Section = styled.section`
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Oswald", Verdana, Geneva, Tahoma, sans-serif;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: calc(100vh - 240px);
  width: 40%;
`;
const FormStyles = styled.div`
  width: 100%;
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

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 17px;
  padding: 5px;
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

const SectionFooter = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #2a363b;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFacebook = styled(Facebook)`
  height: 30px;
  padding: 0 15px;
`;

const StyledInstagram = styled(Instagram)`
  height: 30px;
  padding: 0 15px;
`;

const StyledWhatsapp = styled(WhatsappSquare)`
  height: 30px;
  padding: 0 15px;
`;

const StyledMail = styled(Mail)`
  height: 30px;
  padding: 0 15px;
`;

const SocialNetContainer = styled.div`
  display: flex;
  width: 80%;
  padding: 10px 0;
  justify-content: space-around;
`;

const TelephoneContainer = styled(SocialNetContainer)`
  justify-content: center;
  padding-bottom: 0;
`;

const Link = styled.a`
  color: #f7f6e7;
  text-decoration: none;
  transition: 0.3s;
  font-size: 17px;

  &:hover {
    text-decoration: none;
    color: #b8b0b0;
    transition: 0.3s;
  }

  &:active {
    text-decoration: none;
    color: #f7f6e7;
  }
`;

const Telephone = styled.p`
  font-size: 17px;
  padding: 0 10px;
`;

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
      <FormContainer
        action="https://formsubmit.co/administracion@sipecarnicerias.com"
        method="POST"
      >
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

      <SectionFooter>
        <SocialNetContainer>
          <Link
            target="_blank"
            href="https://www.facebook.com/sipecarnicerias/"
          >
            <StyledFacebook />
            sipecarnicerias
          </Link>

          <Link
            target="_blank"
            href="https://www.instagram.com/sipecarnicerias/"
          >
            <StyledInstagram />
            sipecarnicerias
          </Link>

          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5491141784079"
          >
            <StyledWhatsapp />+ 54 9 11 4178-4079
          </Link>

          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5491141784079"
          >
            <StyledMail />
            ventas@sipecarnicerias.com
          </Link>
        </SocialNetContainer>
        <TelephoneContainer>
          <Telephone>(011) 4748-0283</Telephone>
          <Telephone>|</Telephone>
          <Telephone>(011) 4741-6634</Telephone>
          <Telephone>|</Telephone>
          <Telephone>(011) 2058-1293</Telephone>
        </TelephoneContainer>
      </SectionFooter>
    </Section>
  );
};

export default Contacto;
