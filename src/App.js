import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Nav from "components/Nav";
import NuestrosProductos from "./pages/Productos";
import QuienesSomos from "./pages/Nosotros";
import ZonasDeReparto from "./pages/Reparto";
import Error from "./pages/Error";
import { AsideProvider } from "./contexts/AsideContext";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Nunito', Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  flex-direction: column; 
  background-color: #171d20;
  color: #f7f6e7;
  height: 100%;
  min-height: 100vh;
  box-sizing: content-box;
  position: relative;

  /* @media(max-width: 450px) {
    height: 100%;
  } */
}`;

function App() {
  return (
    <AsideProvider>
      <Router>
        <GlobalStyle />
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Nosotros">
            <QuienesSomos />
          </Route>
          <Route exact path="/Productos">
            <NuestrosProductos />
          </Route>
          <Route exact path="/Reparto">
            <ZonasDeReparto />
          </Route>
          <Route exact path="/Contacto">
            <Contacto />
          </Route>
          <Route>
            <Error text="Page Not Found" />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </AsideProvider>
  );
}

export default App;
