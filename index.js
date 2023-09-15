const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const categoriaController = require('./controller/CategoriaController');
app.use('/', categoriaController);

const livroController = require('./controller/LivroController');
app.use('/', livroController);

app.listen(8080, ()=>{
    console.log('Servidor Rodando na Porta 8080 - URL: http://localhost3000');
}); 