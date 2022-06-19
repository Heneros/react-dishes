// import { useQuery } from '@apollo/client';
// import gql from 'graphql-tag';

// const SINGLE_ITEM_QUERY = gql`
//   query{
//     Product(where: {id: "cl4d7o7980286asb6s5hthjcy"}){
//         name
//         price
//         description
//     }
//   }
// `;


// cl4d7o7980286asb6s5hthjcy
export default function SingleProduct({ query }) {
    // const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY);
    // console.log(data, loading, error);
    console.log(query.id);
    return (<p>
        Single Product
    </p>)
};