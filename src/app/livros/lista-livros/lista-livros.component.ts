import { Component, OnInit, OnDestroy } from '@angular/core';
import {Livros} from '../livros.model';
import {LivroService} from '../livros.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit, OnDestroy {

livros: Livros[] = []
private livrosSubscription: Subscription;

constructor(public livroService: LivroService){

}

ngOnInit(): void{
  this.livroService.getLivros();
  this.livrosSubscription = this.livroService.
  getListaDeLivrosAtualizadasObservable().subscribe((livros: Livros[]) => {
    this.livros= livros;
  }
  );
}
ngOnDestroy(): void{
  this.livrosSubscription.unsubscribe();
}


}
