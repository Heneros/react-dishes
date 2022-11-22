const express = require('express');
const colors = require('colors');
const cors = require('cors');
const { graphiql } = require('graphiql');
// const cors = require('cors');

require('dotenv').config();

const schema = require('./schema/schema');
const connectDB = require('./config/db');
// const dishRouter = require("./routes/dish");
const routerDish = require("./routes/dish");

const port = process.env.PORT || 5000;
const { graphqlHTTP } = require('express-graphql');

const app = express();
process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
});

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/dishes', routerDish);
connectDB();

// app.use(cors());

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
app.use(express.urlencoded({
    extended: true
}));

app.listen(port, console.log(`Server running on port ${port}`.cyan.underline.bold));