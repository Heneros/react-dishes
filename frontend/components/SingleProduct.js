
// cl4d7o7980286asb6s5hthjcy
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!){
    product(where: {id: $id}){
        name
        price
        description
    }
  }
`;




export default function SingleProduct({ id }) {
    const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
        variables: {
            id,
        },
    });
    if (loading) return <p> Loading...</p>
    if (error) return <p> Error</p>
    const { product } = data;
    return (<p>
        {product.name}
    </p>)
};