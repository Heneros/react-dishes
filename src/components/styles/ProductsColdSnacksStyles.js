import { createGlobalStyle } from "styled-components";

const ProductsColdSnacksStyles = createGlobalStyle`
.products-coldsnacks .product-item{
  width: 325px;
}
.product-item__image{
    max-width: 267px;
}
.products-coldsnacks .product-item img{
    height: 325px;
    object-fit: cover;
}

`;

export default ProductsColdSnacksStyles;