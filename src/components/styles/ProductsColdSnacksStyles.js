import { createGlobalStyle } from "styled-components";

const ProductsColdSnacksStyles = createGlobalStyle`
.products-coldsnacks .product-item{
  width: 325px;
}
.products-coldsnacks .product-item h4{
  color: #fff;
}
.products-coldsnacks .product-item p{
  color: #CFCFCF;
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