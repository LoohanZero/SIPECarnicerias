import React from "react";
import styled from "styled-components";
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { WhatsappSquare } from "@styled-icons/fa-brands/WhatsappSquare";
import { Mail } from "@styled-icons/heroicons-outline/Mail";

const StyledFooter = styled.footer`
  font-family: "Oswald", Verdana, Geneva, Tahoma, sans-serif;
  width: 100%;
  height: 110px;
  background-color: #1a2124;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 450px) {
    font-size: 10px;
  }
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
  justify-content: space-around;
`;

const TelephoneContainer = styled(SocialNetContainer)`
  justify-content: center;
`;

const Telephone = styled.p`
  font-size: 15px;
  padding: 0 10px;
  margin-bottom: 0;
`;

const Copyright = styled.p`
  color: #f7f6e7;
  font-size: 15px;
  margin: 0 5px;

  @media (max-width: 450px) {
    font-size: 11px;
  }
`;
const CopyrightContainer = styled.div`
  display: flex;
`;
const Link = styled.a`
  cursor: pointer;
  font-family: "Oswald", Verdana, Geneva, Tahoma, sans-serif;
  color: #f7f6e7;
  font-size: 15px;
  text-decoration: none;

  @media (max-width: 450px) {
    font-size: 11px;
  }
  &:hover {
    text-decoration: none;
    color: #b8b0b0;
    transition: 0.3s;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <SocialNetContainer>
        <Link target="_blank" href="https://www.facebook.com/sipecarnicerias/">
          <StyledFacebook />
          sipecarnicerias
        </Link>

        <Link target="_blank" href="https://www.instagram.com/sipecarnicerias/">
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
          href="mailto: ventas@sipecarnicerias.com"
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
      <CopyrightContainer>
        <Copyright>
          © 2020 SIPE Carnicerías. Todos los derechos reservados.
        </Copyright>
        <Copyright>
          Diseño realizado por{" "}
          <Link target="_blank" href="https://github.com/LoohanZero">
            Luján Sanchez
          </Link>{" "}
          y
          <Link target="_blank" href="https://github.com/Jodelrey">
            {" "}
            Josefina del Rey
          </Link>
          .
        </Copyright>
      </CopyrightContainer>
    </StyledFooter>
  );
};

export default Footer;
