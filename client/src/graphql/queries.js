import { gql } from '@apollo/client';

export const GET_DISHES = gql`
 query getDishes{
  dishes{
    id,
    name, 
    description,
    weight
    price
  }
 }
`;