import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HASURA_KEY, HASURA_URL } from "./keys";

const client = new ApolloClient({
    uri: HASURA_URL,
    headers: {
        'x-hasura-admin-secret': HASURA_KEY
    },
    cache: new InMemoryCache()
});


export default client;