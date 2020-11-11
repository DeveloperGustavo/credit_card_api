const mongoose = require('mongoose');

const CreditCard = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    holder: {
        type: String,
        required: true
    },
    expiration_date: {
        type: Date,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    },
    limit: {
        type: Number,
        required: true
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model('CreditCard', CreditCard);