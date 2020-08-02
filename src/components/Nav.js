import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../imgs/Logolimpiosf.png";
import { Menu } from "@styled-icons/ionicons-solid/Menu";

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
  justify-content: space-between;
  width: 20%;

  @media (max-width: 710px) {
    flex-direction: row;
    width: 40%;
    justify-content: flex-start;
  }

  @media (max-width: 450px) {
    width: 60%;
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

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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

const DropdownList = styled.ul`
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  list-style: none;
  background-color: #2a363b;
  position: absolute;
  top: 40px;
  left: -85px;
  width: 200px;
  height: 350px;
  margin: 0;
  z-index: 100;

  transform: ${(props) => (props.hidden ? "translateY(-10px)" : "40px")};
  opacity: ${(props) => (props.hidden ? 0 : 0.9)};
  transition: 0.3s;

  @media (max-width: 500px) {
    width: 150px;
    left: -60px;
  }

  @media (max-width: 450px) {
    width: 100px;
    left: -38px;
  }

  @media (max-width: 320px) {
    width: 100px;
    left: -45px;
  }
`;

const DropdownItem = styled.li`
  height: 70px;
  display: flex;
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

const StyledLink = styled(NavLink)`
  font-family: "Oswald", Verdana, Geneva, Tahoma, sans-serif;
  color: #f7f6e7;
  text-decoration: none;
  transition: 0.3s;
  padding: 15px;
  font-size: 25px;
  width: 200px;
  height: 100%;
  text-align: center;

  @media (max-width: 1120px) {
    font-size: 20px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 900px) {
    width: 120px;
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
const DropdownLink = styled(StyledLink)`
  width: 200px;

  @media (max-width: 710px) {
    width: 200px;
  }
`;

const Nav = () => {
  const [hidden, setHidden] = useState(true);

  const handleMenuClick = () => {
    setHidden(!hidden);
    console.log(hidden);
  };

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

        <DropdownList onClick={handleMenuClick} hidden={hidden}>
          <DropdownItem>
            <DropdownLink exact activeClassName="selected" to="/">
              Inicio
            </DropdownLink>
          </DropdownItem>
          <DropdownItem>
            <DropdownLink exact activeClassName="selected" to="/Nosotros">
              Nosotros
            </DropdownLink>
          </DropdownItem>
          <DropdownItem>
            <DropdownLink exact activeClassName="selected" to="/Productos">
              Productos
            </DropdownLink>
          </DropdownItem>
          <DropdownItem>
            <DropdownLink exact activeClassName="selected" to="/Reparto">
              Reparto
            </DropdownLink>
          </DropdownItem>
          <DropdownItem>
            <DropdownLink exact activeClassName="selected" to="/Contacto">
              Contacto
            </DropdownLink>
          </DropdownItem>
        </DropdownList>
      </DropdownMenu>
    </StyledNav>
  );
};

export default Nav;
