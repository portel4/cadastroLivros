import { Component, Input } from '@angular/core';
import {Livros} from '../livros.model';

@Component({
  selector: 'lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

@Input () livros: Livros[] = []





}
