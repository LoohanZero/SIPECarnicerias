import React from "react";
import styled from "styled-components";
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { WhatsappSquare } from "@styled-icons/fa-brands/WhatsappSquare";
import { Mail } from "@styled-icons/entypo/Mail";
import { Phone } from "@styled-icons/boxicons-solid/Phone";

const StyledFooter = styled.footer`
  font-family: "Oswald", Verdana, Geneva, Tahoma, sans-serif;
  width: 100%;
  height: 110px;
  background-color: #1a2124;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 300;


`;

const SocialNetContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 500px) {
    flex-direction: row;
  }

  @media (max-width: 280px) {
    width: 90%;
  }
`;

const SocialStyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 35%;

  @media (max-width: 1200px) {
    width: 50%;
    padding: 5px;
  }

  @media (max-width: 800px) {
    width: 80%;
    justify-content: center;
    padding: 5px;
  }

  @media (max-width: 500px) {
    width: 35%;
    justify-content: space-around;
  }

  @media (max-width: 280px) {
    width: 50%;
  }
`;

const SMLink = styled.a`
  cursor: pointer;
  font-family: "Oswald", Verdana, Geneva, Tahoma, sans-serif;
  color: #f7f6e7;
  font-size: 15px;
  text-decoration: none;
  display: flex;

  @media (max-width: 500px) {
    font-size: 11px;
  }
  &:hover {
    text-decoration: none;
    color: #b8b0b0;
    transition: 0.3s;
  }
`;

const SMPhoneLink = styled(SMLink)`
  display: none;

  @media (max-width: 500px) {
    display: block;
  }
`;
const StyledFacebook = styled(Facebook)`
  height: 30px;
`;
const StyledPhone = styled(Phone)`
  height: 30px;
`;
const StyledInstagram = styled(Instagram)`
  height: 30px;
`;

const StyledWhatsapp = styled(WhatsappSquare)`
  height: 30px;
`;

const StyledMail = styled(Mail)`
  height: 30px;
`;

const Text = styled.p`
  font-size: 15px;
  padding: 0 10px;
  margin-bottom: 0;
  display: flex;

  @media (max-width: 500px) {
    display: none;
  }
`;

const TelephoneContainer = styled(SocialNetContainer)`
  justify-content: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

const CopyrightContainer = styled.div`
  display: flex;

  @media (max-width: 800px) {
    align-items: center;
  }

  @media(max-width: 500px) {
    flex-direction: column; 
  }

`;

const Copyright = styled.p`
  color: #f7f6e7;
  font-size: 12px;
  margin: 0 3px;
  display: flex;

  @media (max-width: 500px) {
    font-size: 11px;
  }
`;

const Span = styled.span`
  font-size: 12px;
`;

const Link = styled(SMLink)`
  font-size: 12px;
  padding: 0 3px;
`;

const Footer = () => {
  const yearCopyright = new Date().getFullYear();

  return (
    <StyledFooter>
      <SocialNetContainer>
        <SocialStyledContainer>
          <SMLink
            target="_blank"
            href="https://www.facebook.com/sipecarnicerias/"
          >
            <StyledFacebook />
            <Text>sipecarnicerias</Text>
          </SMLink>
          <SMLink
            target="_blank"
            href="https://www.instagram.com/sipecarnicerias/"
          >
            <StyledInstagram />
            <Text>sipecarnicerias</Text>
          </SMLink>
        </SocialStyledContainer>

        <SocialStyledContainer>
          <SMLink
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5491141784079"
          >
            <StyledWhatsapp />
            <Text>11 4178-4079</Text>
          </SMLink>
          <SMLink target="_blank" href="mailto: ventas@sipecarnicerias.com">
            <StyledMail />
            <Text>ventas@sipecarnicerias.com</Text>
          </SMLink>
        </SocialStyledContainer>
        <SMPhoneLink target="_blank" href="tel:01147480283">
          <StyledPhone />
        </SMPhoneLink>
      </SocialNetContainer>

      <TelephoneContainer>
        <SMLink href="tel:01147480283">(011) 4748-0283</SMLink>
        <Text>|</Text>
        <SMLink href="tel:01147416634">(011) 4741-6634</SMLink>
        <Text>|</Text>
        <SMLink href="tel:01120581293">(011) 2058-1293</SMLink>
      </TelephoneContainer>

      <CopyrightContainer>
        <Copyright>
          © {yearCopyright} SIPE Carnicerías. Todos los derechos reservados.
        </Copyright>
        <Copyright>
          Diseño realizado por
          <Span>
            <Link target="_blank" href="https://lujansanchez.netlify.app/">
              Luján Sanchez
            </Link>
          </Span>
          y
          <Span>
            <Link target="_blank" href="https://github.com/Jodelrey">
              Josefina del Rey.
            </Link>
          </Span>
        </Copyright>
      </CopyrightContainer>
    </StyledFooter>
  );
};

export default Footer;
