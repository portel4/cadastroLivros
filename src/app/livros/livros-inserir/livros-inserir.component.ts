import { Component, EventEmitter, Output} from '@angular/core';
import {Livros} from '../livros.model';

@Component({
  selector: 'livros-inserir',
  templateUrl: './livros-inserir.component.html',
  styleUrls: ['./livros-inserir.component.css']
})
export class LivrosInserirComponent  {

@Output() livroAdicionado = new EventEmitter<Livros>();

id: number;
titulo: string;
autor: string;
paginas: number;

onAdicionarLivro(){

  const livro : Livros = {

    id: this.id,
    titulo: this.titulo,
    autor: this.autor,
    paginas: this.paginas

  }

  this.livroAdicionado.emit(livro);
}

}
