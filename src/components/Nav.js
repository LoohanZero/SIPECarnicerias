import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../imgs/Logolimpiosf.png";
import { Menu } from "@styled-icons/ionicons-solid/Menu";
import Aside from "./Aside";
import AsideContext from "../contexts/AsideContext";

const StyledNav = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #2a363b;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;

  @media (max-width: 710px) {
    flex-direction: row;
    width: 40%;
    justify-content: flex-start;
  }

  @media (max-width: 450px) {
    width: 60%;
  }
`;

const Image = styled.img`
  height: 35px;

  @media (max-width: 320px) {
    height: 25px;
  }
`;

const Text = styled.h1`
  font-size: 15px;
  font-family: "Oswald", Verdana, Geneva, Tahoma, sans-serif;
  padding: 0 10px;
  margin: 0;

  @media (max-width: 320px) {
    line-height: 25px;
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: 80%;

  @media (max-width: 710px) {
    display: none;
  }
`;
const StyledLink = styled(NavLink)`
  font-family: "Oswald", Verdana, Geneva, Tahoma, sans-serif;
  color: #f7f6e7;
  text-decoration: none;
  transition: 0.3s;
  padding: 15px;
  font-size: 25px;
  width: 220px;
  height: 100%;
  text-align: center;

  @media (max-width: 1120px) {
    font-size: 20px;
    /* width: 150px; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* @media (max-width: 900px) {
    width: 120px;
  } */

  @media (max-width: 450px) {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
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

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  display: none;

  @media (max-width: 710px) {
    display: block;
  }
`;

const StyledMenu = styled(Menu)`
  height: 30px;
  cursor: pointer;

  @media (max-width: 320px) {
    height: 25px;
  }
`;

const Nav = () => {
  const { handleMenuClick, hidden } = useContext(AsideContext);

  return (
    <StyledNav>
      <Container>
        <Image src={logo} />
        <Text>SIPE Carnicerías</Text>
      </Container>

      <ResponsiveNav>
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
      </ResponsiveNav>

      <DropdownMenu>
        <StyledMenu onClick={handleMenuClick} />
        {!hidden && <Aside />}
      </DropdownMenu>
    </StyledNav>
  );
};

export default Nav;
