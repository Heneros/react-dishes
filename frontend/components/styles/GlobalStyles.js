import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
     @font-face{
         font-family: 'gilroy';
         src: url('Gilroy-Light.woff2') format('woff2');
         font-weight: normal;
         font-style: normal;
     } 
     html{
            box-sizing: border-box;
     }
      body{
        font-family: 'gilroy',  --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #211F20;
        color: #CFCFCF;
        padding: 0;
        margin: 0;
   }
   a{ 
        color: #CFCFCF;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-decoration: none;
   }

   .container{
       margin: 0 auto;
       max-width: 1290px;
   }

`;

export default GlobalStyles;

