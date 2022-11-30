const mongoose = require('mongoose');

const DishesSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    weight: {
        type: String
    },
    imageUrl: {
        type: String
    }
});



module.exports = mongoose.model('Dishes', DishesSchema);

