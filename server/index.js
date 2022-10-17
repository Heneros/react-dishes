const express = require('express');
const colors = require('colors');
const cors = require('cors');
const { graphiql } = require('graphiql')
require('dotenv').config();

const schema = require('./schema/schema');
const port = process.env.PORT || 5000;
const { graphqlHTTP } = require('express-graphql');

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(port, console.log(`Server running on port ${port}`));