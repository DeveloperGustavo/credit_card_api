const CreditCard    = require("../Models/CreditCard");
const ViaCep        = require("../Models/ViaCepRequest");

exports.index = (req, res) => {
    CreditCard.find({}).then((credit_card) => {
        return res.json(credit_card);
    }).catch((error) => {
        return res.status(400).json({
            code: 400,
            msg: "Erro ao tentar listar cartão de crédito.",
            error: error
        });
    });
}

exports.find_by_id = (req, res) => {
    CreditCard.findById({_id:req.params.id}).then((credit_card) => {
        return res.status(200).json(credit_card);
    }).catch((error) => {
        return res.status(400).json({
            code: 404,
            msg: "Erro ao tentar listar cartão de crédito.",
            error: error
        });
    });
}

exports.store = (req, res) => {
    console.log(req.body);
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
}

exports.update = (req, res) => {
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
}

exports.delete = (req, res) => {
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
}

exports.teste = (req, res) => {
    const cep = new ViaCep();
    var consulta = cep.consultaCep(req.params.cep);
    console.log(consulta.body);
    return res.status(200).json(consulta);
}