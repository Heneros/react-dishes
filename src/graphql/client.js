import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HASURA_KEY, HASURA_URL } from "./keys";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: HASURA_URL,
    headers: {
        'x-hasura-admin-secret': HASURA_KEY
    },

});


export default client;