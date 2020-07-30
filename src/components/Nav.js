import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #2a363b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  font-family: "Oswald", Verdana, Geneva, Tahoma, sans-serif;
  color: #f7f6e7;
  text-decoration: none;
  transition: 0.3s;
  padding: 15px;
  font-size: 25px;
  width: 250px;
  height: 100%;
  text-align: center;

  @media (max-width: 1050px) {
    font-size: 20px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 450px) {
    font-size: 15px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 280px) {
    font-size: 13px;
  }


  &:hover {
    text-decoration: none;
    color: #b8b0b0;
    transition: 0.3s;
  }

  &:active {
    text-decoration: none;
    color: #f7f6e7;
  }

  &.selected {
    background-color: #3f4a4e;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName="selected" to="/">
        Inicio
      </StyledLink>
      <StyledLink exact activeClassName="selected" to="/Nosotros">
        Nosotros
      </StyledLink>
      <StyledLink exact activeClassName="selected" to="/Productos">
        Productos
      </StyledLink>
      <StyledLink exact activeClassName="selected" to="/Reparto">
        Reparto
      </StyledLink>
      <StyledLink exact activeClassName="selected" to="/Contacto">
        Contacto
      </StyledLink>
    </StyledNav>
  );
};

export default Nav;
