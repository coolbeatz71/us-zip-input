import { createGlobalStyle } from "styled-components";
import { BORDER_RADIUS, GREY_COLOR, WHITE_COLOR } from "../constants/style";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  form {
    margin: 4rem;
    padding: 4rem;
    background: ${WHITE_COLOR};
    border: 1px solid ${GREY_COLOR};
    border-radius: ${BORDER_RADIUS};
  }
`;

export default GlobalStyle;
