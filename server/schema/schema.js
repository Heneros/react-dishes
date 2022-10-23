///const { dishes } = require('../DataDishes.js');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList } = require('graphql');

const Dishes = require('../models/Dishes');


const DishesType = new GraphQLObjectType({
    name: 'Dishes',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLString },
        weight: { type: GraphQLString },
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        dishes: {
            type: new GraphQLList(DishesType),
            resolve(parent, args) {
                return Dishes.find();
            }
        },
        dish: {
            type: DishesType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Dishes.findById(args.id);
            }
        },

    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});




