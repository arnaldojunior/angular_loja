import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { PRODUTOS } from './mock-produtos';
import { Carrinho } from './carrinho';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  carrinho: Carrinho = new Carrinho();

  constructor() { }

  getCarrinho(): Carrinho {
    return this.carrinho;
  }

  buscarProdutos(): Produto[] {
    return PRODUTOS;
  }

  addItem(produto: Produto): void {
    this.carrinho.addItem(produto);
  }
 }
