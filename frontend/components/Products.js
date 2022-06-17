import React from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Product from './Product';
import ProductsItems from './styles/Products';

var $ = require("jquery");
if (typeof window !== "undefined") {
    // Client-side-only code
    window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});


const ALL_PRODUCTS_QUERY = gql`
query ALL_PRODUCTS_QUERY{
    products{
        id
        name
        price
        description
        photo{
            id
            image{
                publicUrlTransformed
            }
        }
    } 
}`;

export default function Products() {
    const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
    console.log(data, error, loading);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message} </p>
    return (
        <div>
            <ProductsItems>
                <OwlCarousel
                    nav={true}
                    autoplay={false}

                    items={5}
                >
                    {data.products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </OwlCarousel>
            </ProductsItems>

        </div >
    )
} 