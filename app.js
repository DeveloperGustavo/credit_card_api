// Pacote para gerenciar as requisições HTTP
const express   = require('express');
const request = require('request');
// Pacote para habilitar CORS
const cors      = require('cors');

// Pacote para gerenciar MongoDB
const mongoose  = require('mongoose');

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

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow_origin", "*");
    res.header("Access-COntrol-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(express.json());

// Arquivo de rotas
require('./src/Routes/index')(app);


app.get('/', (req, res) => {
    return res.status(200).json({
        code: 200,
        msg: "Minha API Node com Docker :)"
    })
});


app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});