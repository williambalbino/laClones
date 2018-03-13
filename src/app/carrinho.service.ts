import { Produto } from './../model/produto';
import { Injectable } from '@angular/core';

@Injectable()
export class CarrinhoService {
  produtos: Produto[] = [];

  constructor() { }

  adicionar(produto: Produto) {
    this.produtos.push(produto);
  }

  getProdutos(): Produto[] {
    return this.produtos;
  }
}


