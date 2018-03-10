import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

  proximoId = 0;
  usuarios: Usuario[] = [];

  constructor() { }

  adicionaUsuario( usuario: Usuario): void {
    usuario.id = this.proximoId++;
    this.usuarios.push(usuario);
  }

  getUsuario(id: number): Usuario {
    const index = this.usuarios.findIndex((usuario: Usuario) => usuario.id === id);
    return (index >= 0) ? this.usuarios[index] : null;
  }

  getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  removeUsuario(id: number): void {
    const index = this.usuarios.findIndex((usuario: Usuario) => usuario.id === id);
    if (index >= 0) {
      this.usuarios.splice(index, 1);
    }
  }
}
