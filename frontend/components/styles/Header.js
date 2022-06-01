import styled from 'styled-components';

const HeaderStyles = styled.header`
.line__separetor{
        position: absolute;
        left: 0;
        height: 1px;
        width: -webkit-fill-available;
        background: #403C3B;
        box-shadow: 0px 30px 60px rgba(34, 31, 32, 0.2);
  }
     .first__line{
       display: flex;
       justify-content: space-around;
   }
   .navbar{
       display: flex;
       justify-content: space-around;
   }
`;

export default HeaderStyles;