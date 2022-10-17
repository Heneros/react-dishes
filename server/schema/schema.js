const { dishes } = require('../DataDishes.js');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLSchema } = require('graphql');

const DishestType = new GraphQLObjectType({
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
        dish: {
            type: DishestType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                /// return dishes.find(dish => dish.id === args.id)
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});




