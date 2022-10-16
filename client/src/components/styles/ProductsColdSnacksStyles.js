import { createGlobalStyle } from "styled-components";

const ProductsColdSnacksStyles = createGlobalStyle`

.products-items {
 display: flex;
 flex-wrap: wrap;
 overflow: hidden;
}
.products-coldsnacks .product-item{
  width: 325px;
  margin: 0 20px;
  background:#494544;
box-shadow: 0px 30px 45px rgba(43, 40, 40, 0.6);
border-radius: 10px;
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
    /* height: 325px;
    object-fit: cover; */
}
.product-bottom{
 display: flex;
 justify-content: space-between;
}

.btn-cart{
  background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
border-radius: 10px;
color: #fff;
font-weight: 600;
font-size: 14px;
line-height: 17px;
border: unset;
outline: none;
padding: 14px 0;
padding-right: 52px;
padding-left: 15px;
cursor: pointer;
}
.price{
  font-weight: 600;
font-size: 20px;
line-height: 24px;
color: #fff;
}


.slick-track
{
  max-width: 100vw;
display: flex;

}
.slick-track > div{
  margin-right: 20px;
}
`;

export default ProductsColdSnacksStyles;