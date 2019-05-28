import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { PRODUTOS } from './mock-produtos';
import { Carrinho } from './carrinho';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  carrinho: Carrinho = new Carrinho();
  private produtosUrl = 'api/produtos';  // URL to web api

  constructor(
    private httpClient: HttpClient
  ) { }

  getCarrinho(): Carrinho {
    return this.carrinho;
  }

  buscarProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.produtosUrl);
  }

  addItem(produto: Produto): void {
    this.carrinho.addItem(produto);
  }
 }
