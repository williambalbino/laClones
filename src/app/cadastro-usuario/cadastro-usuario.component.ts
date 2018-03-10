import { UsuarioService } from './../usuario.service';
import { Usuario } from './../../model/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {

  model: Usuario;
  enviado = false;

  constructor(public usuarioService: UsuarioService) {
    this.novoUsuario();
  }

  enviar() {
    this.usuarioService.adicionaUsuario(this.model);
    this.enviado = true;
  }

  novoUsuario() {
    this.model = new Usuario('', '', '');
  }
}
