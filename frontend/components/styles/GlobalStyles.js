import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    @font-face{
         font-family: 'Gilroy';
         src: url('Gilroy-Light.woff2') format('woff2');
         font-weight: 300;
     } 
        @font-face{
         font-family: 'Gilroy';
         src: url('Gilroy-Regular.woff2') format('woff2');
         font-weight: 400;
     } 
       @font-face{
         font-family: 'Gilroy';
         src: url('Gilroy-Medium.woff2') format('woff2');
         font-weight: 500;
     } 
         @font-face{
         font-family: 'Gilroy';
         src: url('Gilroy-Semibold.woff2') format('woff2');
         font-weight: 600;
     } 
          @font-face{
         font-family: 'Gilroy';
         src: url('Gilroy-Bold.woff2') format('woff2');
         font-weight: 700;
     } 


     html{
            box-sizing: border-box;
     }
      body{
        font-family: 'Gilroy',  --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
       padding: 0 15;
   }
   

`;

export default GlobalStyles;

