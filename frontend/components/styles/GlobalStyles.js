import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
     @font-face{
         font-family: 'gilroy';
         src: url('Gilroy-Light.woff2') format('woff2');
         font-weight: normal;
         font-style: normal;
     } 
      body{
           font-family: 'gilroy';
           background-color: #211F20;
           color: #CFCFCF;
   }
   a{ 
       color: #CFCFCF;
   }
   .first__line{
         display: flex; 
         justify-content: center;
   }
   .navbar{
           display: flex;
    justify-content: space-around;
   }
   .container{
       margin: 0 auto;
       max-width: 1290px;
   }
`;

export default GlobalStyles;

