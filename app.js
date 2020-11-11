// Pacote para gerenciar as requisições HTTP
const express   = require('express');

// Pacote para gerenciar MongoDB
const mongoose  = require('mongoose');

require("./models/CreditCard");
const CreditCard = mongoose.model('CreditCard');

const app = express();

app.use(express.json());

// Conexão com banco de dados MongoDB
mongoose.connect('mongodb://localhost/credit_cards', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => { // try
    console.log("Conexão realizada com sucesso.");
}).catch((error) => { // catch
    console.log("Houve um erro ao tentar conectar-se com o banco de dados." + error);
});

// Definição das rotas
app.get("/credit_cards", (req, res) => {
    CreditCard.find({}).then((credit_card) => {
        return res.json(credit_card);
    }).catch((error) => {
        return res.status(400).json({
            code: 400,
            msg: "Erro ao tentar listar cartão de crédito.",
            error: error
        });
    });
});

app.get("/credit_cards/:id", (req, res) => {
    CreditCard.findById({_id:req.params.id}).then((credit_card) => {
        return res.status(200).json(credit_card);
    }).catch((error) => {
        return res.status(400).json({
            code: 404,
            msg: "Erro ao tentar listar cartão de crédito.",
            error: error
        });
    });
});

app.post("/credit_cards", (req, res) => {
    CreditCard.create(req.body, (error) => {
        if (error) 
            return res.status(400).json({
                code: 400,
                msg: "Erro ao tentar cadastrar cartão de crédito.",
                error: error
            });
        
        return res.status(201).json({
            code: 201,
            msg: "Cartão cadastrado com sucesso."
        });
    });
});

app.put("/credit_cards/:id", (req, res) => {
    CreditCard.findById({_id:req.params.id}).update(req.body, (error) => {
        if (error) 
            return res.status(400).json({
                code: 400,
                msg: "Erro ao tentar alterar cartão de crédito.",
                error: error
            });
        
        return res.status(201).json({
            code: 201,
            msg: "Cartão alterado com sucesso."
        });
    });
});

app.delete("/credit_cards/:id", (req, res) => {
    CreditCard.findByIdAndDelete({_id:req.params.id}, (error) => {
        if (error) 
            return res.status(400).json({
                code: 400,
                msg: "Erro ao tentar deletar cartão de crédito.",
                error: error
            });
        
        return res.status(201).json({
            code: 200,
            msg: "Cartão deletado com sucesso."
        });
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});