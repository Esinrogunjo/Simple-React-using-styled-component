import { useState } from "react";
import Nav from "./components/Nav";
import { createGlobalStyle } from "styled-components";
import MainHero from "./components/MainHero";
import Clients from "./components/Clients";
import HowItWorks from "./components/HowItWorks";
import Everywhere from "./components/Everywhere";
import Testimony from "./components/Testimony";

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    /* background: lightcoral; */
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  :root {
    font-size: 16px;
  }

  .carousel{
    width: 100%;
  margin-top: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
  background-color: #f8f9fa;
  min-height: 20rem;
  margin-bottom: 5rem;
  position: absolute;
  


  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <MainHero></MainHero>
      <Clients />

      <HowItWorks></HowItWorks>
      <Everywhere></Everywhere>
      <Testimony></Testimony>
    </>
  );
}

export default App;
