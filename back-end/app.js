const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');

const mongoose = require('mongoose')

const Livros = require ('./models/livro');

mongoose.connect('mongodb+srv://portel4_luccas:portel4123@cluster0.b0oa9.mongodb.net/app-livros?retryWrites=true&w=majority')
.then(() => {
  console.log ("Conexão OK")
  }).catch(() => {
  console.log("Conexão NOK")
  });
app.use (bodyParser.json());


app.use ((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
  });

app.get('/api/livros',(req, res, next) => {
  Livros.find().then(
    documents => {
      res.status(200).json(
        {
          mensagem: "Tudo OK",
          livro: documents
        }
      )
    }
  )
});

app.post ('/api/livros', (req, res, next) => {
  const livro = new Livros({
    id: req.body.id,
    titulo: req.body.titulo,
    autor: req.body.autor,
    paginas: req.body.paginas
    });

    livro.save();

    console.log (livro);
  res.status(201).json({mensagem: 'Livro inserido'})
});

module.exports = app;
