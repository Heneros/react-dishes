import { gql } from '@apollo/client';


const ADD_DISH = gql`
 mutation addDish($name: String!, $description: String!, $weight: String!, $price: String!){
    addDish(name: $name, description: $description,weight: $weight, price: $price ){
        name,
        description,
        weight,
        price
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
    weight
    }
}
`;


export { DELETE_DISH, ADD_DISH };