const express = require('express');
const { graphql } = require('graphql');
const { graphiql } = require('graphiql')
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 5000;

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql
}))


app.listen(port, console.log(`Server running on port ${port}`));