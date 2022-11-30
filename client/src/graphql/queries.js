import { gql } from '@apollo/client';

export const GET_DISHES = gql`
 query getDishes{
  dishes{
    id,
    name, 
    description,
    weight
    price
    imageUrl
  }
 }
`;


export const GET_DISH = gql`
  query getDish($id: ID!){
    dish(id: $id){
      id,
      name,
      description
      price,
      weight
      imageUrl
    }
  }
`;