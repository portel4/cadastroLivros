import { Component } from '@angular/core';
import {Livros} from './livros/livros.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-livros';

  livros: Livros[] = []

  onlivroAdicionado(livro){
    this.livros=[...this.livros, livro]
  }

}
