import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import AsideContext from "../contexts/AsideContext";
import { fadeInLeft } from "react-animations";

const Container = styled.div`
  min-height: calc(100vh - 240px);
  height: calc(100% - 70px);
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 70px;
  left: 0;
  backdrop-filter: ${(props) => (props.hidden ? "blur(0px)" : "blur(2px)")};
  z-index: 150;
`;

// const fadeInAnimation = keyframes`${fadeIn}`;

// const FadeInDiv = styled.div`
//   animation: 0.3s ${fadeInAnimation};
// `;


const DropdownList = styled.ul`
  min-height: calc(100vh - 70px);
  height: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: #2a363b;
  position: absolute;
  padding-top: 25px;
  position: relative;
  left: 0;
  width: 220px;
  margin: 0;
  z-index: 200;
  /* transition: all 0.3s;
  ransform: ${(props) =>
    props.hidden ? "translateX(-221px)" : "translateX(0px)"}; */
//   /* opacity: ${(props) => (props.hidden ? 0 : 1)}; */
`;

const DropdownItem = styled.li`
  height: 90px;
  display: flex;
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
// ------------ANIMATIONS ----------------



const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

const FadeInLeftDiv = styled.div`
  animation: 0.5s ${fadeInLeftAnimation};
  z-index: 100;
  min-height: calc(100vh - 70px);
  height: 100%;
`;

const Aside = () => {
  const { handleMenuClick, hidden } = useContext(AsideContext);

  return (
    <Container>
        {!hidden && (
        <FadeInLeftDiv>
          <DropdownList onClick={handleMenuClick} hidden={hidden}>
            <DropdownItem>
              <StyledLink exact activeClassName="selected" to="/">
                Inicio
              </StyledLink>
            </DropdownItem>
            <DropdownItem>
              <StyledLink exact activeClassName="selected" to="/Nosotros">
                Nosotros
              </StyledLink>
            </DropdownItem>
            <DropdownItem>
              <StyledLink exact activeClassName="selected" to="/Productos">
                Productos
              </StyledLink>
            </DropdownItem>
            <DropdownItem>
              <StyledLink exact activeClassName="selected" to="/Reparto">
                Reparto
              </StyledLink>
            </DropdownItem>
            <DropdownItem>
              <StyledLink exact activeClassName="selected" to="/Contacto">
                Contacto
              </StyledLink>
            </DropdownItem>
          </DropdownList>
        </FadeInLeftDiv>
      )}
    </Container>
  );
};

export default Aside;
