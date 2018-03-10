import { UsuarioService } from './usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

const rotas: Routes = [
  { path: 'novo-usuario', component: CadastroUsuarioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [ UsuarioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
