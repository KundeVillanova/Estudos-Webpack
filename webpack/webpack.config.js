const path = require('path');

module.exports = {

    watch: true, //para nao precisar usar o script para rodar no json, rodando uma vez ele já vai atualizar
    
    mode: "development", //modifica como vamos ver o arquivo compilado no bundle.js

    entry:'./src/teste.js',

    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }

}