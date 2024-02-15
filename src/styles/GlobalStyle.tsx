import { createGlobalStyle } from "styled-components";
import { mq } from './token';
import React from "react";

export const GlobalStyle = () => {
  return <GlobalStyleComponent />;
};

const GlobalStyleComponent = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    flex-shrink: 0;
  }
  * {
    margin: 0;
  }
  html {
    font-family: 'SUIT Variable', sans-serif;
  }
  html,
  body {
    height: 100%;
    font-size: 7.5px;

    ${mq[2]} {
      font-size: 8px;
    }
    ${mq[4]} {
      font-size: 9px;
    }
    ${mq[6]} {
      font-size: 10px;
    }
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  #root,
  #__next {
    isolation: isolate;
  }
`;
