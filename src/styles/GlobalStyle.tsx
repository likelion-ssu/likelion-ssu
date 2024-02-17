import { createGlobalStyle } from "styled-components";
import { mq } from "./token";

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
  box-sizing: border-box;
    padding: 0;
    margin: 0;
    -ms-overflow-style: none;
    scrollbar-width: none; 
  }
  html {
    font-family: 'SUIT Variable', sans-serif;
    font-size: 62.5%;
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
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
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
  #root {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    min-height: 100vh;
    overflow-x: hidden;
  }
`;
