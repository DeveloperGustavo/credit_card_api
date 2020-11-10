const express = require('express');

const app = express();

app.use(express.json());

app.get("/credit_cards", (req, res) => {
    return res.json([
        {
            credit_card_number: "123456",
            expiration: "2020-01-01",
            cvv: "123"
        },
        {
            credit_card_number: "123456",
            expiration: "2020-01-01",
            cvv: "123"
        }
    ])
});

app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000: http://localhost:8000");
});