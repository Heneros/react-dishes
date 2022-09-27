import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body{
    background: #44403F;
    margin: 0;
    padding: 0;
}
.container{
    max-width: 1325px;
    padding: 0 15px;
    margin: 0 auto;
}
`;

export default GlobalStyles;