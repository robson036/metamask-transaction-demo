import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "Noto Sans", sans-serif;
    scroll-behavior: smooth;
    transition: all .2s;
  }
`

export default GlobalStyles
