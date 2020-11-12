// const router = require('express').Router();
const CreditCardController = require('../Controllers/CreditCardController');

module.exports = (app) => {
    app.get("/credit_cards", CreditCardController.index);
    app.get("/credit_cards/:id", CreditCardController.find_by_id);
    app.post("/credit_cards", CreditCardController.store);
    app.put("/credit_cards/:id", CreditCardController.update);
    app.delete("/credit_cards/:id", CreditCardController.delete);
}