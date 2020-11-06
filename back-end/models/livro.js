//importando o pacote
const mongoose = require ('mongoose');
//definindo o "schema"
//note a semelhança com recursos de bases relacionais
const LivroSchema = mongoose.Schema ({
id:{type: String, required: true},
titulo: {type: String, required: true},
autor: {type: String, required: true},
paginas: {type: String, required: true, default:'000000'}
});
//criamos o modelo associado ao nome Livros e exportamos
//tornando acessível para outros módulos da aplicação
module.exports = mongoose.model('Livro', LivroSchema);
