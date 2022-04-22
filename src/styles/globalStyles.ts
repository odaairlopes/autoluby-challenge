import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
  }
  *,
  *::before,
  *::after {
    box-sizing:  border-box;
  }
  html {
    font-size: 62.5%;
    @media (max-width: 1080px) {
      font-size: 56.25%;
    }
    @media (max-width: 720px) {
      font-size: 50%;
    }
  }

:root {
    --redColor: #f54a48;
    --orangeColor: #fa982f;
    
    --whiteLightColor: #f9f9f9;
    --whiteSemiColor: #E6E6E6;
    --grayColor: #A2A2A2;
    --grayDarkColor: #858585;
    --blackSemiColor: #7c7c7c
    --fontColor: #3c3c3c;
    --blackDarkColor: #495057;
       
    --whiteColor: #ffffff;
    --greenColor: #34c38f;
}

/* body {
    background-color: var(--whiteColor);
    color: var(--fontColor);
    font-family: 'Poppins', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
}

body, input, textarea, select, button {
    font: 400, 0.825rem, 'Poppins', sans-serif;
    color: var(--fontColor);
}

button {
    cursor: pointer;
    border: none;
    background: none;
}

a {
    color: inherit;
    text-decoration: none;
} */

${() => css`
  body {
    font-size: 1.6rem;
    background-color: var(--whiteColor);
  }
  body,
  input,
  textarea,
  button {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }
  #nprogress .bar {
    background: var(--redColor) !important;
  }
  #nprogress .peg {
    box-shadow: 0 0 10px var(--redColor), 0 0 5px var(--redColor) !important;
  }
  #nprogress .spinner-icon {
    border-top-color: var(--redColor);
    border-left-color: var(--redColor);
  }
`}
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
