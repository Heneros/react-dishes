import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { HASURA_KEY, HASURA_URL, MONGO_PASS } from "./keys";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const MONGODB = `mongodb+srv://admin:${MONGO_PASS}@reactdishescluster.0rln0.mongodb.net/?retryWrites=true&w=majority`;

const server = new ApolloServer({
    typeDefs,
    resolvers
});

// mongoose.connect(MONGODB, { useNewUrlParser: true })
//     .then(() => {

//     })


const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: HASURA_URL,
    headers: {
        'x-hasura-admin-secret': HASURA_KEY
    },

});


export default client;