import {Injectable} from '@angular/core';
import {Livros} from './livros.model';
import {Subject} from 'rxjs';


@Injectable({ providedIn: 'root' })
export class LivroService {
  constructor() { }

  private livros: Livros[] = [];
  private listaLivrosAtualizadas = new Subject<Livros[]>();

  getLivros(): Livros[]{
    return [...this.livros, ]
  }

  adicionarLivro(id: number, titulo: string, autor:string, paginas: number ){
    const livros: Livros={
      id: id,
      titulo: titulo,
      autor: autor,
      paginas: paginas

    };
    this.livros.push(livros);
    this.listaLivrosAtualizadas.next([...this.livros]);


  }
  getListaDeLivrosAtualizadasObservable() {
    return this.listaLivrosAtualizadas.asObservable();
    }

}
