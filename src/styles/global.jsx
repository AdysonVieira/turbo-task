import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 62.5%; /* 1rem = 10px */

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  ul, li, ol {
    list-style: none;
  }
  
  body {
    background: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased !important;
  }
`