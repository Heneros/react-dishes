import { createGlobalStyle } from "styled-components";
import GilroyFontRegular from './fonts/Gilroy-Regular.woff';
import GilroyFontBold from './fonts/Gilroy-Bold.woff';
import GilroyFontMedium from './fonts/Gilroy-Medium.woff';
import GilroyFontSemiBold from './fonts/Gilroy-SemiBold.woff';
import GilroyFontSemiLight from './fonts/Gilroy-Light.woff';

const GlobalStyles = createGlobalStyle`
  
@font-face {
  font-family: 'Gilroy'; 
  src: url(${GilroyFontSemiLight}) format('woff');
  font-weight: 300;
}

@font-face {
  font-family: 'Gilroy'; 
  src: url(${GilroyFontRegular}) format('woff');
  font-weight: 400;
}

@font-face {
  font-family: 'Gilroy'; 
  src: url(${GilroyFontMedium}) format('woff');
  font-weight: 500;
}

@font-face {
  font-family: 'Gilroy'; 
  src: url(${GilroyFontSemiBold}) format('woff');
  font-weight: 600;
}

@font-face {
  font-family: 'Gilroy'; 
  src: url(${GilroyFontBold}) format('woff');
  font-weight: 700;
}



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
    font-family: 'Gilroy', Arial, Helvetica, sans-serif; 
    color: #fff;
}
.container{
    max-width: 1325px;
    padding: 0 15px;
    margin: 0 auto;
}
a {
  text-decoration: none;
}

.list-reset {
    list-style: none;
    margin: 0;
    padding: 0;
}


.logo{
  font-family: 'Gilroy', Arial, Helvetica, sans-serif; 
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  font-size: 26px;
}
`;

export default GlobalStyles;