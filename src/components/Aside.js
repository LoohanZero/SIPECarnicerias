import React, { useContext, useEffect } from "react";
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
  backdrop-filter: ${(props) => (props.show ? "blur(2px)" : "blur(0px)")};
  z-index: 150;
`;

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
    display: flex;
    align-items: center;
    justify-content: center;
  }

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

const fadeOutLeftAnimation = keyframes`
0% {
  transform: translateX(0px);
}
100% {
  transform: translateX(-221px;);
}`;

const FadeLeftDiv = styled.div`
  animation: 0.5s
    ${(props) => (props.show ? fadeInLeftAnimation : fadeOutLeftAnimation)};
  opacity: ${(props) => props.show && "1"};
  transition-property: opacity;
  transition-duration: 0.3s;
  transition-delay: 0.3s;
  z-index: 100;
  min-height: calc(100vh - 70px);
  height: 100%;
`;

const Aside = () => {
  const { handleMenuClick, show, setRender } = useContext(
    AsideContext
  );

  useEffect(() => {
    show && setTimeout(setRender(true), 2000);
    show &&
      setTimeout(
        console.log({ funcion: useEffect, elshow: show, setRender: true }),
        2000
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return ( show &&
    <Container show={show}>
      
        <FadeLeftDiv show={show}>
          <DropdownList onClick={handleMenuClick} show={show}>
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
        </FadeLeftDiv>
      
    </Container>
  );
};

export default Aside;
