import { Component, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';

import { LivroService} from '../livros.service';

@Component({
  selector: 'livros-inserir',
  templateUrl: './livros-inserir.component.html',
  styleUrls: ['./livros-inserir.component.css']
})
export class LivrosInserirComponent  {
  constructor(public livroService: LivroService){}

  onAdicionarLivro(form: NgForm){

    if (form.invalid) return;

    this.livroService.adicionarLivro(
      form.value.id,
      form.value.titulo,
      form.value.autor,
      form.value.paginas
    );
      form.resetForm();
  }
}
