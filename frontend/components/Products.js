import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Product from './Product';

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
            <div>
                {data.products.map((product) => (
                    // <p key={product.id}>{product.name}</p>
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
} 