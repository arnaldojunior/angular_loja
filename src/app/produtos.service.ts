import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { Carrinho } from './carrinho';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private carrinho: Carrinho = new Carrinho();
  private produtosUrl = 'api/produtos';
  private categoriasUrl = 'api/categorias';

  constructor(
    private httpClient: HttpClient
  ) { }

  getCarrinho(): Carrinho {
    return this.carrinho;
  }

  get produtos(): Observable<Produto[]> {
    // Utiliza o método get do HttpClient para realizar uma requisição na URL especificada.
    // HttpClient.get retorna no body da resposta um objeto JSON não tipado. Por isso, 
    // usamos o <Produto[]>.
    return this.httpClient.get<Produto[]>(this.produtosUrl);
  }

  getProduto(id: number): Observable<Produto> {
    const url = `${this.produtosUrl}/${id}`;
    return this.httpClient.get<Produto>(url);
  }

  get categorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.categoriasUrl);
  }

  addItem(produto: Produto, quantidade: number): void {
    this.carrinho.addItem(produto, quantidade);
  }
}
