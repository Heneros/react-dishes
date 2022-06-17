import styled from 'styled-components';

const ProductsItems = styled.div`
 display: flex;
 justify-content: space-between;
 flex-direction: row;
 .product-item{
    margin: 0 15px;
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    box-shadow: 0px 30px 45px rgba(43, 40, 40, 0.6);
    border-radius: 10px;
    max-width: 325px;
 }

`;

export default ProductsItems;