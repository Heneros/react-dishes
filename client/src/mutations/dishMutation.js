import { gql } from '@apollo/client';


const ADD_DISH = gql`
 mutation addDish($name: String!, $description: String!, $weight: String!, $price: String!, $imageUrl: String!){
    addDish(name: $name, description: $description,weight: $weight, price: $price, imageUrl: $imageUrl ){
        name,
        description,
        weight,
        price,
        imageUrl
    }
 }
`;



const DELETE_DISH = gql`
mutation deleteDish($id: ID!){
    deleteDish(id: $id){
    id,
    name,
    description
    price,
    weight,
    imageUrl
    }
}
`;





export { DELETE_DISH, ADD_DISH };