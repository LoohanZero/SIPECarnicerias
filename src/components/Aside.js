import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import AsideContext from "../contexts/AsideContext";
import { fadeInRight, fadeIn } from "react-animations";

const Container = styled.div`
  min-height: calc(100% - 240px);
  height: calc(100% - 69px);
  overflow: hidden;
`;

const fadeInRightAnimation = keyframes`${fadeInRight}`;

const FadeInRightDiv = styled.div`
  animation: 0.5s ${fadeInRightAnimation};
`;

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 0.3s ${fadeInAnimation};
`;

const BlurredContainer = styled.div`
  width: 100%;
  height: calc(100% - 69px);
  min-height: calc(100% - 240px);
  top: 70px;
  left: 0;
  position: absolute;
  backdrop-filter: blur(2px);
  z-index: 15;
`;

const DropdownList = styled.ul`
  min-height: calc(100% - 240px);
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: #2a363b;
  position: absolute;
  padding-top: 25px;
  top: 69px;
  left: 0;
  width: 220px;
  margin: 0;
  z-index: 100;
  /* transition: all 0.3s;
  transform: ${(props) =>
    props.hidden ? "translateX(-221px)" : "translateX(0px)"};
  opacity: ${(props) => (props.hidden ? 0 : 1)}; */
  backdrop-filter: blur(2px);
  
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

const Aside = () => {
  const { handleMenuClick, hidden } = useContext(AsideContext);

  return (
    <Container>
      {!hidden && <BlurredContainer />}
      <FadeInRightDiv>
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
      </FadeInRightDiv>
    </Container>
  );
};

export default Aside;
