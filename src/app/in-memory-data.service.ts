import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  // Cria um hash de banco de dados em memória.
  createDb() {
    const produtos = [
      { id: 1, nome: 'Maça', valor: 5.9953, img: 'assets/img/apple.png' },
      { id: 2, nome: 'Uva', valor: 12.00, img: 'assets/img/grapes.png' },
      { id: 3, nome: 'Morango', valor: 8.90, img: 'assets/img/strawberry.png' },
      { id: 4, nome: 'Cenoura', valor: 3.85, img: 'assets/img/carrot.png' }
    ];
    const categorias = [
      { nome: 'Frutas' },
      { nome: 'Verduras' },
      { nome: 'Limpeza' }
    ];
    return { produtos, categorias };
  }

  genId(produtos: Produto[]): number {
    return produtos.length > 0 ? Math.max(...produtos.map(produto => produto.id)) + 1 : 1;
  }
}
