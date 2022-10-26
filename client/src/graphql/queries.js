import { gql } from '@apollo/client';

export const GET_DISHES = gql`
 query getDishes{
  dishes{
    name, 
    description,
    weight
    price
  }
 }
`;