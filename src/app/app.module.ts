import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LivroService} from './livros/livros.service';

/**Imports do Angular Material */
import {MatInputModule} from '@angular/material/input';
import {MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LivrosInserirComponent } from './livros/livros-inserir/livros-inserir.component';
import { ListaLivrosComponent } from './livros/lista-livros/lista-livros.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';

@NgModule({
  declarations: [
    AppComponent,
    LivrosInserirComponent,
    ListaLivrosComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
