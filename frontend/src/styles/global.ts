import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  html {
    scroll-behavior: smooth;

    @media screen and (max-width: 600px) {
      font-size: 67.75%;
    }
    @media screen and (min-width: 576px) {
      font-size: 74.25%;
    }
    @media screen and (min-width: 768px) {
      font-size: 80.75%;
    }
    @media screen and (min-width: 992px) {
      font-size: 81%;
    }
    @media screen and (min-width: 1280px) {
      font-size: 81.5%;
    }
  }

  body {
    height: 100vh;
    width: 100vw;

    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;
    scroll-behavior: smooth;

    background-color: #ffffff;
    background-attachment: fixed;
    overflow-y: auto;
  }

  body div#root {
    height: 100%;
    width: 100%;

    background-color: #ffffff;
    background-attachment: fixed;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
  }

  input,
  select {
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  a {
    background: none;
    color: inherit;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }


`;
