///const { dishes } = require('../DataDishes.js');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql');

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

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ///Add product
        addDish: {
            type: DishesType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                price: { type: new GraphQLNonNull(GraphQLString) },
                weight: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const dish = new Dishes({
                    name: args.name,
                    description: args.description,
                    price: args.price,
                    weight: args.weight
                });
                return dish.save();
            },
        },
        ///Delete product
        deleteDish: {
            type: DishesType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return Dishes.findByIdAndRemove(args.id);
            }
        }
    }
})



module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});




