import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
    #  query getProducts {
    #     products{
    #         id
    #         name
    #         weight
    #         price
    #         description
    #     }
    #  }
    query MyQuery {
  products_products {
    id
    name
    price
    weight
    description
  }
}
`;