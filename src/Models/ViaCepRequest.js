const request = require('request');

module.exports = class ViaCep {
    consultaCep (cep) {
        var url = 'http://viacep.com.br/ws/' + cep + '/json/';
        return request(url, (err, res, body) => {
            if(err)
                return res.statusCode(400).json({
                    err: "Houve um erro na chamada",
                    erro: err
                });
            return body;            
        });
    }
}