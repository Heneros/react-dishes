import { gql } from '@apollo/client';

const DELETE_DISH = gql`
mutation deleteDish($id: ID!){
    deleteDish(id: $id){
    id,
    name,
    description
    price,
    weight
    }
}
`;


export { DELETE_DISH };