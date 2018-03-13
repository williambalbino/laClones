import { CarrinhoService } from './../carrinho.service';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Produto } from '../../model/produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

produtos: Observable<Produto[]>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private produtoService: ProdutoService,
              private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.produtos = this.produtoService.getProdutos();
  }

  comprar(produto: Produto) {
    this.carrinhoService.adicionar(produto);
    this.router.navigate(['/carrinho']);
  }

}
