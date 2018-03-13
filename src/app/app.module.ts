import { CarrinhoService } from './carrinho.service';
import { UsuarioService } from './usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutoService } from './produto.service';

const rotas: Routes = [
  { path: 'novo-usuario', component: CadastroUsuarioComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'detalhe-produto', component: DetalheProdutoComponent },
  { path: 'lista-produtos', component: ListaProdutosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    CadastroUsuarioComponent,
    RodapeComponent,
    CarrinhoComponent,
    DetalheProdutoComponent,
    ListaProdutosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [ UsuarioService, CarrinhoService, ProdutoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
