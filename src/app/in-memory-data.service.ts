import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const produtos = [
      { id: 1, nome: 'Maça', valor: 5.9953, img: 'assets/img/apple.png' },
      { id: 2, nome: 'Uva', valor: 12.00, img: 'assets/img/grapes.png' },
      { id: 3, nome: 'Morango', valor: 8.90, img: 'assets/img/strawberry.png' },
      { id: 4, nome: 'Cenoura', valor: 3.85, img: 'assets/img/carrot.png' }
    ];
    return { produtos };
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(produtos: Produto[]): number {
    return produtos.length > 0 ? Math.max(...produtos.map(produto => produto.id)) + 1 : 1;
  }
}
