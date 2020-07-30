import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 70px;
  background-color: #1a2124;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    font-size: 10px;
  }
`;

const Copyright = styled.p`
  font-family: "Oswald", Verdana, Geneva, Tahoma, sans-serif;
  color: #f7f6e7;
  font-size: 15px;
  margin: 0;

  @media (max-width: 450px) {
    font-size: 11px;
  }
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
    </StyledFooter>
  );
};

export default Footer;
