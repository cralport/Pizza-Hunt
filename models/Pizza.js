const { Schema, model } = require('mongoose');

const PizzaSChema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});

//create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSChema);

//export the Pizza model
module.exports = Pizza;