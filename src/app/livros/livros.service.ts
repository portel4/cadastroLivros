import {Injectable} from '@angular/core';
import {Livros} from './livros.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http'


@Injectable({ providedIn: 'root' })
export class LivroService {
  constructor(private httpClient : HttpClient) { }

  private livros: Livros[] = [];

  private listaLivrosAtualizadas = new Subject<Livros[]>();

  getLivros(): void{
    this.httpClient.get<{mensagem : string, livros : Livros[]}>(
      'http://localhost:8000/api/livros'
    ).subscribe((dados) => {
      this.livros = dados.livros;
      this.listaLivrosAtualizadas.next([...this.livros]);
    })

    //return [...this.livros, ]
  }

  adicionarLivro(id: number, titulo: string, autor:string, paginas: number ){
    const livros: Livros={
      id: id,
      titulo: titulo,
      autor: autor,
      paginas: paginas

    };
    this.httpClient.post<{mensagem: string}> ('http://localhost:8000/api/livros',livros).subscribe(
      (dados) => {
        console.log(dados.mensagem);
        this.livros.push(livros);
        this.listaLivrosAtualizadas.next([...this.livros]);
      }
    )

  }
  getListaDeLivrosAtualizadasObservable() {
    return this.listaLivrosAtualizadas.asObservable();
    }

}
